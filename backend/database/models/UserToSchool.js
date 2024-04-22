const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  const UserToSchool = sequelize.define(
    "UserToSchool",
    {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      grade: {
        type: Sequelize.TINYINT,
        allowNull: false,
      },
      lastMeet: {
        type: Sequelize.DATE,
      },
    },
    { timestamps: false }
  );

  return UserToSchool;
};
