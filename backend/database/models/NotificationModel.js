const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  const Notification = sequelize.define("Notification", {
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
