const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  const Organization = sequelize.define(
    "organization",
    {
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phoneNumber: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
      },
    },
    { timestamps: false }
  );

  return Organization;
};
