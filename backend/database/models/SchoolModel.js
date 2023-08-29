const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  const School = sequelize.define(
    "school",
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
      objective: {
        type: Sequelize.INTEGER,
      },
      objectiveType: {
        type: Sequelize.STRING,
      },
    },
    { timestamps: false }
  );

  return School;
};
