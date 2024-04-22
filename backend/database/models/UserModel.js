const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  const User = sequelize.define(
    "user",
    {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phoneNumber: {
        type: Sequelize.STRING,
      },
      bio: {
        type: Sequelize.TEXT,
      },
      iconUrl: {
        type: Sequelize.STRING,
      },
      resumeUrl: {
        type: Sequelize.STRING,
      },
      role: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );

  return User;
};
