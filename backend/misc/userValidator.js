const { UserModel } = require("../database/sequelize");
const validator = require("validator");

module.exports = async ({ username, email, password, phoneNumber }) => {
  if (!username) throw Error("Username needs to be filled");

  if (!email) throw Error("Email needs to be filled");

  if (!password) throw Error("Password needs to be filled");

  if (!phoneNumber) throw Error("Phone number needs to be filled");

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
};
