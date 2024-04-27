const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  const Event = sequelize.define("event", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.TEXT,
      defaultValue: "",
    },
    supervisorContact: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    datetime: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    hours: {
      type: Sequelize.INTEGER,
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
      defaultValue: "NO_FILE",
    },
    videoUrl: {
      type: Sequelize.STRING,
      defaultValue: "NO_VIDEO",
    },
    category: {
      type: Sequelize.STRING,
      defaultValue: "No Category",
    },
    status: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  return Event;
};
