const { UserModel } = require("../database/sequelize");

const validator = require("validator");
const bcrypt = require("bcrypt");

const createAdmin = async (req, res) => {
  const { username, email, password, phoneNumber } = req.body;

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

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await UserModel.create({
      username: username,
      email: email,
      phoneNumber: phoneNumber,
      password: hash,
      role: "ADMIN",
    });

    res.status(200).json({
      message: "User admin created ",
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = { createAdmin };
