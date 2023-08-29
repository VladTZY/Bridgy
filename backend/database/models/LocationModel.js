const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  const Location = sequelize.define(
    "location",
    {
      country: {
        type: Sequelize.STRING,
      },
      city: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
    },
    { timestamps: false }
  );
  return Location;
};
