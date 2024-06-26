const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  const UserToEvent = sequelize.define(
    "UserToEvent",
    {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
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
