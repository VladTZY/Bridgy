const {
  EventModel,
  UserToEvent,
  OrganizationModel,
} = require("../database/sequelize");
const { createNotification } = require("./notificationController");

const { Op } = require("sequelize");

const getOngoingEvents = async (req, res) => {
  try {
    const dateNow = new Date();

    const events = await UserToEvent.findAll({
      where: {
        status: "JOINED",
        userId: req.user.id,
      },
      include: {
        model: EventModel,
        where: {
          status: "PUBLISHED",
          time: {
            [Op.lt]: dateNow,
          },
        },
      },
    });

    res.status(200).json(events);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getAcceptedEvents = async (req, res) => {
  try {
    const dateNow = new Date();

    const events = await UserToEvent.findAll({
      where: {
        status: "JOINED",
        userId: req.user.id,
      },
      include: {
        model: EventModel,
        where: {
          status: "PUBLISHED",
          time: {
            [Op.gt]: dateNow,
          },
        },
      },
    });

    res.status(200).json(events);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getRequestedEvents = async (req, res) => {
  try {
    const events = await UserToEvent.findAll({
      where: {
        status: "REQUESTED",
        userId: req.user.id,
      },
      include: {
        model: EventModel,
        where: {
          status: "PUBLISHED",
        },
      },
    });

    res.status(200).json(events);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getFinishedEvents = async (req, res) => {
  try {
    const events = await UserToEvent.findAll({
      where: {
        status: "FINISHED",
        userId: req.user.id,
      },
      include: {
        model: EventModel,
        where: {
          status: "FINISHED",
        },
      },
    });

    res.status(200).json(events);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const joinEvent = async (req, res) => {
  try {
    const userId = req.user.id;
    const eventId = req.params.id;

    const event = await EventModel.findByPk(eventId);

    if (!event) throw Error("Event doesn't exists");

    if (event.status != "PUBLISHED") throw Error("Event is closed");

    const enroled = await UserToEvent.findAll({
      where: {
        eventId: eventId,
        status: "JOINED",
      },
    });

    if (enroled.length >= event.capacity) throw Error("Event full");

    const userToEvent = await UserToEvent.create({
      userId: userId,
      eventId: eventId,
      status: "REQUESTED",
    });

    const organization = await OrganizationModel.findByPk(
      event.organizationId,
      {
        attributes: { include: ["adminId"] },
      }
    );

    createNotification(
      organization.adminId,
      "STUDENT_REQUESTED",
      `${req.user.username} requested to join your event, ${event.name}`,
      req.user.id,
      event.id
    );

    res.status(200).json(userToEvent);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getStatusForEvent = async (req, res) => {
  try {
    const eventId = req.query.eventId;

    if (!eventId) throw Error("Event id not specified");

    const userToEvent = await UserToEvent.findOne({
      where: {
        userId: req.user.id,
        eventId: eventId,
      },
    });

    if (!userToEvent) return res.status(200).json({ status: "NEUTRAL" });

    res.status(200).json({ status: userToEvent.status });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const postFeedback = async (req, res) => {
  try {
    const userId = req.user.id;
    const eventId = req.params.id;
    const feedback = req.body.feedback;

    const userToEvent = await UserToEvent.findOne({
      where: {
        eventId: eventId,
        userId: userId,
        status: "FINISHED",
      },
    });

    if (!userToEvent)
      throw Error("This enrolment doesnt exist or isnt finished");

    userToEvent.feedback = feedback;
    await userToEvent.save();

    await res.status(200).json(userToEvent.feedback);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = {
  getOngoingEvents,
  getRequestedEvents,
  getAcceptedEvents,
  joinEvent,
  getStatusForEvent,
  postFeedback,
  getFinishedEvents,
};
