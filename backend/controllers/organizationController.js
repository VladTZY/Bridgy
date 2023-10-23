const {
  EventModel,
  LocationModel,
  OrganizationModel,
  UserToEvent,
  UserModel,
  SchoolModel,
} = require("../database/sequelize");

const { Op } = require("sequelize");
const { createNotification } = require("./notificationController");

const createEvent = async (req, res) => {
  const {
    name,
    description,
    hours,
    time,
    capacity,
    country,
    city,
    address,
    supervisorContact,
    remote,
  } = req.body;

  try {
    if (!name || !description || !capacity)
      throw Error("All fields need to be filled");

    if (!remote && (!country || !city || !address))
      throw Error("You need to fill the address if the event is not remote");

    const location = await LocationModel.create({
      country: country,
      city: city,
      address: address,
    });

    const organization = await OrganizationModel.findOne({
      where: {
        adminId: req.user.id,
      },
    });

    if (!organization) throw Error("User is not admin of any organization");

    let photoUrl = "NO_FILE";
    if (res.req.file) photoUrl = res.req.file.filename;

    const event = await EventModel.create({
      name: name,
      description: description,
      hours: hours,
      time: time,
      capacity: capacity,
      remote: remote,
      supervisorContact: supervisorContact,
      photoUrl: photoUrl,
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
      include: UserModel,
    });

    res.status(200).json(userToEvent);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getJoinedStudents = async (req, res) => {
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

    const joinedStudents = await UserToEvent.findAll({
      where: {
        eventId: eventId,
        status: {
          [Op.or]: ["JOINED", "MARKED"],
        },
      },
      include: UserModel,
    });

    res.status(200).json(joinedStudents);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getFinishedStudents = async (req, res) => {
  try {
    const eventId = req.query.eventId;

    if (!eventId) throw Error("Event id not specified");

    const event = await EventModel.findOne({
      where: {
        id: eventId,
      },
      include: OrganizationModel,
    });

    if (event.status != "FINISHED") throw Error("Event not finished");

    if (event.organization.adminId != req.user.id)
      throw Error("Not admin for this event");

    const finsihedStudents = await UserToEvent.findAll({
      where: {
        eventId: eventId,
        status: "FINISHED",
      },
      include: UserModel,
    });

    res.status(200).json(finsihedStudents);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const acceptStudent = async (req, res) => {
  try {
    const eventId = req.query.eventId;
    const studentId = req.query.studentId;

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

    createNotification(
      studentId,
      "ACCEPTED",
      `Congratulations, you are now accepted in the following event, ${event.name}`,
      null,
      event.id
    );

    res.status(200).json(userToEvent);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const rejectStudent = async (req, res) => {
  try {
    const eventId = req.query.eventId;
    const studentId = req.query.studentId;

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

    createNotification(
      studentId,
      "REJECTED",
      `Sadly, you were rejected in your application for the following event, ${event.name}`,
      null,
      event.id
    );

    res.status(200).json(userToEvent);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const checkStudent = async (req, res) => {
  try {
    const eventId = req.query.eventId;
    const userId = req.query.userId;

    if (!eventId) throw Error("Event id not specified");
    if (!userId) throw Error("User id not specified");

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
        eventId: eventId,
        userId: userId,
        status: {
          [Op.or]: ["JOINED", "MARKED"],
        },
      },
    });

    if (userToEvent.status == "JOINED") userToEvent.status = "MARKED";
    else userToEvent.status = "JOINED";

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

      const studentEnt = await UserModel.findByPk(student.userId, {
        attributes: { include: ["username", "schoolId"] },
      });

      const schoolEnt = await SchoolModel.findByPk(studentEnt.schoolId, {
        attributes: { include: ["adminId"] },
      });

      createNotification(
        schoolEnt.adminId,
        "STUDENT_FINISHES",
        `Your student, ${studentEnt.username} finished the ${event.name} event`,
        student.userId,
        event.id
      );
    });

    event.status = "FINISHED";
    await event.save();

    res.status(200).json({ message: "Event finished" });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const checkAdmin = async (req, res) => {
  try {
    const eventId = req.query.eventId;

    const organization = await OrganizationModel.findOne({
      where: {
        adminId: req.user.id,
      },
      attributes: ["id"],
    });

    const event = await EventModel.findByPk(eventId, {
      attributes: ["organizationId"],
    });

    if (event.organizationId == organization.id)
      res.status(200).json({ isAdmin: true });
    else res.status(200).json({ isAdmin: false });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = {
  createEvent,
  getRequestedStudents,
  getFinishedStudents,
  getJoinedStudents,
  acceptStudent,
  rejectStudent,
  checkStudent,
  finishEvent,
  checkAdmin,
};
