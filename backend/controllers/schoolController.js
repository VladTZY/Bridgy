const {
  UserModel,
  SchoolModel,
  LocationModel,
  UserToEvent,
} = require("../database/sequelize");
const validator = require("validator");
const bcrypt = require("bcrypt");
const csv = require("fast-csv");
const fs = require("fs");

const createOneStudent = async (req, res) => {
  const { username, email, phoneNumber, bio, country, city, grade } = req.body;
  const password = "studentPassword@123";

  try {
    if (!username || !email || !password || !phoneNumber || !grade)
      throw Error("All fields need to be filled");

    if (!validator.isEmail(email)) {
      throw Error("Email invalid");
    }

    if (!validator.isStrongPassword(password)) {
      throw Error("Password too weak");
    }

    const exists = await UserModel.findOne({
      where: {
        email: email,
      },
    });

    if (exists) throw Error("Email already registered");

    const school = await SchoolModel.findOne({
      where: {
        adminId: req.user.id,
      },
    });

    if (!school) throw Error(`User is not admin of any school ${req.user.id}`);

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

    res.status(200).json({
      username,
      email,
      grade,
      phoneNumber,
      bio,
      schoolId: user.schoolId,
      role: user.role,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const createMultipleStudents = async (req, res) => {
  try {
    /// req.file.pathname - file path

    res.status(200).json({ message: "ok" });
  } catch (error) {
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

    console.log(school);

    const students = await UserModel.findAll({
      attributes: ["id"],
      where: {
        schoolId: school.id,
        role: "STUDENT",
      },
    });

    payload.numberOfStudents = students.length;

    students.forEach(async (student) => {
      const finishedEvents = await UserToEvent.findAll({
        attributes: ["eventId"],
        where: {
          userId: student.id,
          status: "FINISHED",
        },
      });
    });

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
