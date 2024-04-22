const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  const UserToPersonalEvent = sequelize.define(
    "UserToPersonalEvent",
    {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      feedback: {
        type: Sequelize.STRING,
      },
    },
    { timestamps: false }
  );

  return UserToPersonalEvent;
};
