const {
  EventModel,
  UserToEvent,
  OrganizationModel,
  LocationModel,
  PersonalEventModel,
  UserToPersonalEvent,
  UserToSchool,
  SchoolModel,
  UserModel,
} = require("../database/sequelize");
const Sequelize = require("sequelize");
const computeStudentProgress = require("../utils/getStudentProgress");
const { createNotification } = require("./notificationController");

const { Op } = require("sequelize");

const getStudentStats = async (studentId) => {
  try {
    let hoursTotal = 0;
    let hours = 0;
    let eventsCompleted = 0;

    const events = await EventModel.findAll({
      attributes: [
        "hours",
        [Sequelize.literal("UserToEvents.status"), "status"],
      ],
      include: {
        model: UserToEvent,
        attributes: [],
        where: {
          userId: studentId,
          status: {
            [Op.or]: ["FINISHED", "JOINED", "MARKED"],
          },
        },
      },
    });

    const personalEvents = await PersonalEventModel.findAll({
      attributes: ["hours"],
      include: {
        model: UserToPersonalEvent,
        attributes: [],
        where: {
          userId: studentId,
        },
      },
    });

    for (let i = 0; i < events.length; i++) {
      hoursTotal = hoursTotal + events[i].hours;

      if (events[i].status == "FINISHED" || events[i].status == "MARKED") {
        eventsCompleted++;
        hours = hours + events[i].hours;
      }
    }

    for (let i = 0; i < personalEvents.length; i++) {
      hoursTotal = hoursTotal + personalEvents[i].hours;
      hours = hours + personalEvents[i].hours;
    }

    //console.log(events.length + personalEvents.length);

    return {
      eventsTotal: events.length + personalEvents.length,
      eventsCompleted: eventsCompleted + personalEvents.length,
      economicValue: Math.round(hours * 31.8 * 100) / 100,
      hoursTotal: hoursTotal,
      hours: hours,
    };
  } catch (error) {
    throw Error(error.message);
  }
};

const uploadResume = async (req, res) => {
  try {
    if (!res.req.file) throw Error("Resume not uploaded");

    resumeUrl = res.req.file.key;

    const user = await UserModel.findByPk(req.user.id);
    user.resumeUrl = resumeUrl;
    await user.save();

    res.status(200).json({
      message: "success",
      url: resumeUrl,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error.message);
  }
};

const getCardStats = async (req, res) => {
  try {
    const { eventsTotal, eventsCompleted, economicValue, hoursTotal, hours } =
      await getStudentStats(req.user.id);

    const school = await SchoolModel.findOne({
      attributes: ["objective", "objectiveType"],
      include: {
        model: UserToSchool,
        attributes: [],
        where: {
          userId: req.user.id,
        },
      },
    });

    let payload = {
      objectiveType: school.objectiveType,
      objective: school.objective,
      actualObjective: 0,
      objectivePercentage: 0,
      eventsTotal: eventsTotal,
      eventsCompleted: eventsCompleted,
      eventsPrecentage: 0,
      hoursTotal: hoursTotal,
      hoursCompleted: hours,
      hoursPrecentage: 0,
    };

    if (school.objectiveType == "HOURS") {
      payload.actualObjective = hours;
    } else {
      payload.actualObjective = eventsCompleted;
    }

    if (payload.actualObjective > payload.objective)
      payload.objectivePercentage = 100;
    else
      payload.objectivePercentage = Math.floor(
        (100 * payload.actualObjective) / payload.objective
      );

    payload.eventsPrecentage = Math.floor(
      (100 * payload.eventsCompleted) / payload.eventsTotal
    );
    payload.hoursPrecentage = Math.floor(
      (100 * payload.hoursCompleted) / payload.hoursTotal
    );

    res.status(200).json(payload);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getObjectiveProgress = async (req, res) => {
  try {
    const progress = await computeStudentProgress(req.user.id);

    res.status(200).json({ progress: progress });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const createPersonalEvent = async (req, res) => {
  try {
    const {
      name,
      supervisorContact,
      description,
      feedback,
      hours,
      datetime,
      remote,
      country,
      city,
      address,
    } = req.body;
    let { category } = req.body;

    if (!name || !description || !datetime || !supervisorContact || !hours)
      throw Error("All fields need to be filled");

    if (!remote && (!country || !city || !address))
      throw Error("You need to fill the address if the event is not remote");

    if (description.length > 2000)
      throw Error("Description is too long, limit is 2000 characters");

    if (!category) category = "No category";

    const location = await LocationModel.create({
      country: country,
      city: city,
      address: address,
    });

    const personalEvent = await PersonalEventModel.create({
      name: name,
      supervisorContact: supervisorContact,
      description: description,
      datetime: datetime,
      hours: hours,
      category: category,
      remote: remote,
      locationId: location.id,
    });

    const userToPersonalEvent = await UserToPersonalEvent.create({
      feedback: feedback,
      userId: req.user.id,
      personalEventId: personalEvent.id,
    });

    res.status(200).json(personalEvent);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

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
          datetime: {
            [Op.lt]: dateNow,
          },
        },
        include: LocationModel,
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
          datetime: {
            [Op.gt]: dateNow,
          },
        },
        include: LocationModel,
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
        include: LocationModel,
      },
    });

    res.status(200).json(events);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getFinishedEvents = async (req, res) => {
  try {
    const { userId } = req.query;

    if (!userId) throw Error("User id not specified");

    const events = await UserToEvent.findAll({
      where: {
        status: "FINISHED",
        userId: userId,
      },
      include: {
        model: EventModel,
        where: {
          status: "FINISHED",
        },
        include: LocationModel,
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
  getStudentStats,
  uploadResume,
  createPersonalEvent,
  getCardStats,
  getObjectiveProgress,
  getOngoingEvents,
  getRequestedEvents,
  getAcceptedEvents,
  joinEvent,
  getStatusForEvent,
  postFeedback,
  getFinishedEvents,
};
