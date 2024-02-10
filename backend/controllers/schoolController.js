const {
  UserModel,
  SchoolModel,
  LocationModel,
  UserToEvent,
  EventModel,
} = require("../database/sequelize");
const userValidator = require("../misc/userValidator");
const bcrypt = require("bcrypt");
const fs = require("fs");
const csv = require("csv-parser");
const papa = require("papaparse");

const createStudent = async (
  { username, email, phoneNumber, bio, country, city, grade },
  reqId
) => {
  const password = "studentPassword@123";

  try {
    //VALIDATIONS
    await userValidator({ username, email, password, phoneNumber });

    if (!grade) throw Error("Grade needs to be filled");

    const school = await SchoolModel.findOne({
      where: {
        adminId: reqId,
      },
    });

    if (!school) throw Error(`User is not admin of any school ${reqId}`);

    /// CREATION OF USER
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const location = await LocationModel.create({
      country: country,
      city: city,
    });

    const user = await UserModel.create({
      username: username,
      email: email,
      grade: grade,
      phoneNumber: phoneNumber,
      bio: bio,
      password: hash,
      schoolId: school.id,
      locationId: location.id,
      role: "STUDENT",
    });

    return {
      username,
      email,
      grade,
      phoneNumber,
      bio,
      schoolId: user.schoolId,
      role: user.role,
    };
  } catch (error) {
    throw error;
  }
};

const createOneStudent = async (req, res) => {
  try {
    await createStudent(req.body, req.user.id);

    res.status(200).json("Student created");
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error.message);
  }
};

const handleData = (data) => {
  const studentInfo = Object.values(data);
  const username = studentInfo[1] + " " + studentInfo[2];
  const email = studentInfo[3];
  const phoneNumber = studentInfo[4];
  const grade = studentInfo[5];
};

const createMultipleStudents = async (req, res) => {
  try {
    const csvFilePath = req.file.path;

    fs.createReadStream(csvFilePath)
      .pipe(csv())
      .on("data", (data) => {
        handleData(data);
        csvData.push(data);
        console.log(data);
      })
      .on("error", () => {
        throw new Error("CSV Format not respected.");
      });

    res.status(200).json({ message: "ok" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error.message);
  }
};

const getStudents = async (req, res) => {
  try {
    const grade = req.query.grade;

    const school = await SchoolModel.findOne({
      attributes: ["id"],
      where: {
        adminId: req.user.id,
      },
    });

    const students = await UserModel.findAll({
      attributes: { exclude: ["password", "role"] },
      where: {
        schoolId: school.id,
        role: "STUDENT",
        grade: grade,
      },
    });

    res.status(200).json(students);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getInDepthData = async (objectiveType, objective, students) => {
  let actualObjective = 0;
  let completedStudents = 0;
  let totalHours = 0;

  const promises = students.map(async (student) => {
    const finishedEvents = await UserToEvent.findAll({
      attributes: ["eventId"],
      where: {
        userId: student.id,
        status: "FINISHED",
      },
      include: {
        model: EventModel,
        attributes: ["hours"],
      },
    });

    let hoursNow = 0;
    finishedEvents.map(async (event) => {
      hoursNow += event.event.hours;
    });

    if (objectiveType == "EVENT") {
      actualObjective += finishedEvents.length;
      if (finishedEvents.length >= objective) completedStudents++;
    } else {
      actualObjective += hoursNow;

      if (hoursNow >= objective) completedStudents++;
    }
    totalHours = totalHours + hoursNow;
  });

  await Promise.all(promises);

  return { actualObjective, completedStudents, totalHours };
};

const getStats = async (req, res) => {
  try {
    const userId = req.user.id;
    const payload = {
      numberOfStudents: 0,
      completedStudents: 0,
      totalEconomy: 0,
      totalObjective: 0,
      actualObjective: 0,
    };

    const school = await SchoolModel.findOne({
      attributes: ["id", "objectiveType", "objective"],
      where: {
        adminId: userId,
      },
    });

    const students = await UserModel.findAll({
      attributes: ["id"],
      where: {
        schoolId: school.id,
        role: "STUDENT",
      },
    });

    payload.numberOfStudents = students.length;
    payload.totalObjective = students.length * school.objective;

    const inDepthdata = await getInDepthData(
      school.objectiveType,
      school.objective,
      students
    );

    payload.actualObjective = inDepthdata.actualObjective;
    payload.completedStudents = inDepthdata.completedStudents;
    payload.totalEconomy = inDepthdata.totalHours * 31.8;

    res.status(200).json(payload);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = {
  createOneStudent,
  getStudents,
  createMultipleStudents,
  getStats,
};
