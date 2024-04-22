const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  const PersonalEvent = sequelize.define("personalEvent", {
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
    remote: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    photoUrl: {
      type: Sequelize.STRING,
    },
    category: {
      type: Sequelize.STRING,
      defaultValue: "no category",
    },
  });
  return PersonalEvent;
};
