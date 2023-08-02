const { UserModel } = require("../database/sequelize");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const validator = require("validator");

const createToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET, { expiresIn: "3d" });
};

const signupUser = async (req, res) => {
  const { username, email, password, phoneNumber, role } = req.body;

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
      role: role,
    });

    const token = createToken(user.id);

    res
      .status(200)
      .json({ username: user.username, role: user.role, token: token });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email) throw Error("No email sent");
    if (!password) throw Error("No password sent");

    const user = await UserModel.findOne({
      where: {
        email: email,
      },
    });

    const match = await bcrypt.compare(req.body.password, user.password);

    if (!match) throw Error("Incorect password");

    const token = createToken(user.id);

    res.status(200).json({
      username: user.username,
      role: user.role,
      token: token,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getProfileInfo = async (req, res) => {
  const id = req.params.id;

  try {
    if (!id) throw Error("Id required");

    const user = await UserModel.findByPk(id);

    const userInfo = {
      username: user.username,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
    };

    res.status(200).json(userInfo);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = { loginUser, signupUser, getProfileInfo };
