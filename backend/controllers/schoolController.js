const {
  UserModel,
  SchoolModel,
  LocationModel,
  UserToEvent,
  EventModel,
  UserToSchool,
} = require("../database/sequelize");
const Sequelize = require("sequelize");
const studentValidator = require("../misc/studentValidator");
const readCSV = require("../misc/readCSV");
const readXLSX = require("../misc/readXLSX");
const bcrypt = require("bcrypt");
const path = require("path");

const createStudent = async (
  { username, email, phoneNumber, bio, country, city, grade },
  schoolId
) => {
  const password = "studentPassword@123";

  try {
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
      phoneNumber: phoneNumber,
      bio: bio,
      password: hash,
      locationId: location.id,
      role: "STUDENT",
    });

    const userToSchool = await UserToSchool.create({
      grade: grade,
      userId: user.id,
      schoolId: schoolId,
    });

    return {
      username,
      email,
      grade: userToSchool.grade,
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
    // check if is admin
    const school = await SchoolModel.findOne({
      where: {
        adminId: req.user.id,
      },
    });

    if (!school) throw Error(`User is not admin of any school ${req.user.id}`);

    // validate student
    await studentValidator({
      username: req.body.username,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      grade: req.body.grade,
    });

    // create student
    await createStudent(req.body, school.id);

    res.status(200).json("Student created");
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const createMultipleStudents = async (req, res) => {
  try {
    // check if is admin
    const school = await SchoolModel.findOne({
      where: {
        adminId: req.user.id,
      },
    });

    if (!school) throw Error(`User is not admin of any school ${req.user.id}`);

    // get the json data from csv
    const filepath = req.file.path;
    var jsonArray = null;

    if (path.extname(filepath).toLowerCase() == ".csv")
      jsonArray = readCSV(filepath);
    if (path.extname(filepath).toLowerCase() == ".xlsx")
      jsonArray = readXLSX(filepath);
    if (jsonArray == null) throw Error("Incorect file type");

    // validate data
    for (let i = 0; i < jsonArray.length; i++) {
      try {
        await studentValidator({
          username: jsonArray[i].name,
          email: jsonArray[i].email,
          phoneNumber: jsonArray[i].phoneNumber,
          grade: jsonArray[i].grade,
        });
      } catch (error) {
        throw Error(
          error.message + " on line " + (i + 1) + " ignoring the header line"
        );
      }
    }

    // create students
    for (let i = 0; i < jsonArray.length; i++) {
      newEntry = jsonArray[i];

      await createStudent(
        {
          username: newEntry.name,
          email: newEntry.email,
          phoneNumber: newEntry.phoneNumber,
          bio: "",
          country: newEntry.country,
          city: newEntry.city,
          grade: newEntry.grade,
        },
        school.id
      );
    }

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

    let students = [];

    if (grade) {
      students = await UserModel.findAll({
        where: {
          role: "STUDENT",
        },
        attributes: [
          "id",
          "username",
          "email",
          "phoneNumber",
          [Sequelize.literal("UserToSchools.grade"), "grade"],
          [Sequelize.literal("UserToSchools.lastMeet"), "lastMeet"],
        ],
        include: [
          {
            model: UserToSchool,
            where: {
              schoolId: school.id,
              grade: grade,
            },
            attributes: [],
          },
          {
            model: LocationModel,
            attributes: { exclude: ["id"] },
          },
        ],
      });
    } else {
      students = await UserModel.findAll({
        where: {
          role: "STUDENT",
        },
        attributes: [
          "id",
          "username",
          "email",
          "phoneNumber",
          [Sequelize.literal("UserToSchools.grade"), "grade"],
          [Sequelize.literal("UserToSchools.lastMeet"), "lastMeet"],
        ],
        include: [
          {
            model: UserToSchool,
            where: {
              schoolId: school.id,
            },
            attributes: [],
          },
          {
            model: LocationModel,
            attributes: { exclude: ["id"] },
          },
        ],
      });
    }

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

    students = await UserModel.findAll({
      where: {
        role: "STUDENT",
      },
      attributes: ["id"],
      include: [
        {
          model: UserToSchool,
          where: {
            schoolId: school.id,
          },
          attributes: [],
        },
      ],
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

const getSchoolObjective = async (req, res) => {
  try {
    const school = await SchoolModel.findOne({
      attributes: ["objectiveType", "objective"],
      where: {
        adminId: req.user.id,
      },
    });

    res.status(200).json({
      objectiveType: school.objectiveType,
      objective: school.objective,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const setSchoolObjective = async (req, res) => {
  try {
    const { objectiveType, objective } = req.body;

    if (!(objectiveType || objective)) throw Error("No update");

    const school = await SchoolModel.findOne({
      attributes: ["id", "objectiveType", "objective"],
      where: {
        adminId: req.user.id,
      },
    });

    if (
      objectiveType &&
      (objectiveType == "HOURS" || objectiveType == "EVENTS")
    )
      school.objectiveType = objectiveType;

    if (objective) school.objective = objective;

    await school.save();

    res.status(200).json({
      objectiveType: school.objectiveType,
      objective: school.objective,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = {
  createOneStudent,
  getStudents,
  createMultipleStudents,
  getStats,
  getSchoolObjective,
  setSchoolObjective,
};
