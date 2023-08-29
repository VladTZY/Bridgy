const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  const Event = sequelize.define(
    "event",
    {
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      hours: {
        type: Sequelize.INTEGER,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      time: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      capacity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      remote: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      photoUrl: {
        type: Sequelize.STRING,
      },
      supervisorContact: {
        type: Sequelize.STRING,
      },
    },
    { timestamps: false }
  );

  return Event;
};
