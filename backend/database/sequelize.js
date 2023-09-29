const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  dialect: process.env.DB_DIALECT,
  port: process.env.DB_PORT,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

const UserModel = require("./models/UserModel")(sequelize);
const SchoolModel = require("./models/SchoolModel")(sequelize);
const OrganizationModel = require("./models/OrganizationModel")(sequelize);
const EventModel = require("./models/EventModel")(sequelize);
const LocationModel = require("./models/LocationModel")(sequelize);
const NotificationModel = require("./models/NotificationModel")(sequelize);

const UserToEvent = require("./models/UserToEvent")(sequelize);

UserModel.hasMany(NotificationModel);

LocationModel.hasOne(SchoolModel);
LocationModel.hasOne(OrganizationModel);
LocationModel.hasOne(EventModel);

EventModel.belongsTo(LocationModel);
LocationModel.hasOne(UserModel);

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

EventModel.hasMany(UserToEvent);
UserToEvent.belongsTo(EventModel);
UserModel.hasMany(UserToEvent);
UserToEvent.belongsTo(UserModel);

module.exports = {
  sequelize,
  UserModel,
  SchoolModel,
  OrganizationModel,
  EventModel,
  LocationModel,
  UserToEvent,
  NotificationModel,
};
