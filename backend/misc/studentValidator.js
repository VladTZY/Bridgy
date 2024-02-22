const { UserModel } = require("../database/sequelize");
const validator = require("validator");

module.exports = async ({ username, email, phoneNumber, grade }) => {
  try {
    if (!username) throw Error("Username needs to be filled");

    if (!email) throw Error("Email needs to be filled");

    if (!phoneNumber) throw Error("Phone number needs to be filled");

    if (!validator.isEmail(email)) {
      throw Error("Email invalid");
    }

    const exists = await UserModel.findOne({
      where: {
        email: email,
      },
    });
    if (exists) throw Error("Email already registered");

    if (!grade) throw Error("Grade needs to be filled");

    if (grade < 9 || grade > 12) throw Error("Incorect grade");
  } catch (error) {
    throw error;
  }
};
