const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  const Notification = sequelize.define("Notification", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    type: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    message: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    studentId: {
      type: Sequelize.STRING,
    },
    eventId: {
      type: Sequelize.STRING,
    },
  });

  return Notification;
};
