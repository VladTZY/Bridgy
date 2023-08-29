const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  const Location = sequelize.define(
    "location",
    {
      country: {
        type: Sequelize.STRING,
        defaultValue: "",
      },
      city: {
        type: Sequelize.STRING,
        defaultValue: "",
      },
      address: {
        type: Sequelize.STRING,
        defaultValue: "",
      },
    },
    { timestamps: false }
  );
  return Location;
};
