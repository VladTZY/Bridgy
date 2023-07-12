const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  }
);

const UserModel = require("./models/UserModel")(sequelize);
const SchoolModel = require("./models/SchoolModel")(sequelize);
const OrganizationModel = require("./models/OrganizationModel")(sequelize);
const EventModel = require("./models/EventModel")(sequelize);

const UserToEvent = require("./models/UserToEvent")(sequelize);

UserModel.hasOne(SchoolModel, { foreignKey: "adminId" });
SchoolModel.belongsTo(UserModel, { foreignKey: "adminId" });

UserModel.hasOne(OrganizationModel, { foreignKey: "adminId" });
OrganizationModel.belongsTo(UserModel, { foreignKey: "adminId" });

OrganizationModel.hasMany(EventModel, {
  foreignKey: "organizationId",
});
EventModel.belongsTo(OrganizationModel);

SchoolModel.hasMany(UserModel, {
  foreignKey: "schoolId",
});
UserModel.belongsTo(SchoolModel);

EventModel.belongsToMany(UserModel, { through: UserToEvent });
UserModel.belongsToMany(EventModel, { through: UserToEvent });

module.exports = {
  sequelize,
  UserModel,
  SchoolModel,
  OrganizationModel,
  EventModel,
};
