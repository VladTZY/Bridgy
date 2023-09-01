const { EventModel, UserToEvent } = require("../database/sequelize");

const getOngoingEvents = async (req, res) => {
  try {
    const events = await UserToEvent.findAll({
      where: {
        status: "JOINED",
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

    console.log(enroled.length);

    if (enroled.length >= event.capacity) throw Error("Event full");

    const userToEvent = await UserToEvent.create({
      userId: userId,
      eventId: eventId,
      status: "REQUESTED",
    });

    res.status(200).json(userToEvent);
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
  joinEvent,
  getOngoingEvents,
  getRequestedEvents,
  postFeedback,
};
