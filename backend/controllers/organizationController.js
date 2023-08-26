const {
  EventModel,
  LocationModel,
  OrganizationModel,
  UserToEvent,
} = require("../database/sequelize");

const createEvent = async (req, res) => {
  const {
    name,
    description,
    hours,
    time,
    capacity,
    country,
    city,
    latitude,
    longitude,
  } = req.body;

  try {
    if (!name || !description || !capacity || !country || !city)
      throw Error("All fields need to be filled");

    const location = await LocationModel.create({
      country: country,
      city: city,
      latitude: latitude,
      longitude: longitude,
    });

    const organization = await OrganizationModel.findOne({
      where: {
        adminId: req.user.id,
      },
    });

    if (!organization) throw Error("User is not admin of any organization");

    const event = await EventModel.create({
      name: name,
      description: description,
      hours: hours,
      time: time,
      capacity: capacity,
      status: "PUBLISHED",
      locationId: location.id,
      organizationId: organization.id,
    });

    res.status(200).json(event);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getRequestedStudents = async (req, res) => {
  try {
    const eventId = req.query.eventId;

    if (!eventId) throw Error("Event id not specified");

    const event = await EventModel.findOne({
      where: {
        id: eventId,
      },
      include: OrganizationModel,
    });

    if (event.organization.adminId != req.user.id)
      throw Error("Not admin for this event");

    const userToEvent = await UserToEvent.findAll({
      where: {
        eventId: eventId,
        status: "REQUESTED",
      },
    });

    res.status(200).json(userToEvent);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const confirmStudent = async (req, res) => {
  try {
    const eventId = req.query.event;
    const studentId = req.query.student;

    if (!eventId) throw Error("Event id not specified");

    if (!studentId) throw Error("Student id not specified");

    const event = await EventModel.findOne({
      where: {
        id: eventId,
      },
      include: OrganizationModel,
    });

    if (event.organization.adminId != req.user.id)
      throw Error("Not admin for this event");

    const userToEvent = await UserToEvent.findOne({
      where: {
        userId: studentId,
        eventId: eventId,
      },
    });

    if (!userToEvent) throw Error("Student didn t apply");

    if (userToEvent.status != "REQUESTED")
      throw Error("Student application is not requested");

    userToEvent.status = "JOINED";
    await userToEvent.save();

    res.status(200).json(userToEvent);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const rejectStudent = async (req, res) => {
  try {
    const eventId = req.query.event;
    const studentId = req.query.student;

    if (!eventId) throw Error("Event id not specified");

    if (!studentId) throw Error("Student id not specified");

    const event = await EventModel.findOne({
      where: {
        id: eventId,
      },
      include: OrganizationModel,
    });

    if (event.organization.adminId != req.user.id)
      throw Error("Not admin for this event");

    const userToEvent = await UserToEvent.findOne({
      where: {
        userId: studentId,
        eventId: eventId,
      },
    });

    if (!userToEvent) throw Error("Student didn t apply");

    userToEvent.status = "REJECTED";
    await userToEvent.save();

    res.status(200).json(userToEvent);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const finishEvent = async (req, res) => {
  try {
    const eventId = req.query.eventId;
    const studentList = req.body;

    if (!eventId) throw Error("Event id not specified");

    if (!studentList) throw Error("Student list not specified");

    const event = await EventModel.findOne({
      where: {
        id: eventId,
      },
      include: OrganizationModel,
    });

    if (event.organization.adminId != req.user.id)
      throw Error("Not admin for this event");

    studentList.forEach(async (student) => {
      const userToEvent = await UserToEvent.findOne({
        where: {
          userId: student.userId,
          eventId: eventId,
        },
      });

      if (!userToEvent)
        throw Error(
          `User with id ${student.userId} didnt participated in the event`
        );

      userToEvent.status = student.status;
      await userToEvent.save();
    });

    event.status = "FINISHED";
    await event.save();

    res.status(200).json({ message: "Event finished" });
  } catch (error) {
    res.status(200).json(error.message);
  }
};

module.exports = {
  createEvent,
  getRequestedStudents,
  confirmStudent,
  rejectStudent,
  finishEvent,
};
