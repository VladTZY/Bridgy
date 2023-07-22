const { UserModel, SchoolModel } = require("../database/sequelize");
const validator = require("validator");
const bcrypt = require("bcrypt");

const createOneStudent = async (req, res) => {
  const { username, email, phoneNumber } = req.body;
  const password = "studentPassword@123";

  try {
    if (!username || !email || !password || !phoneNumber)
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

    const user = await UserModel.create({
      username: username,
      email: email,
      phoneNumber: phoneNumber,
      password: hash,
      schoolId: school.id,
      role: "STUDENT",
    });

    res.status(200).json({
      username,
      email,
      phoneNumber,
      password,
      schoolId: user.schoolId,
      role: user.role,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = { createOneStudent };
