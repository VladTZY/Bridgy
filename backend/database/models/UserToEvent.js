const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  const UserToEvent = sequelize.define(
    "UserToEvent",
    {
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      feedback: {
        type: Sequelize.STRING,
      },
    },
    { timestamps: false }
  );

  return UserToEvent;
};
