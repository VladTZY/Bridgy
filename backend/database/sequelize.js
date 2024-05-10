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

// LOAD MODELS
const UserModel = require("./models/UserModel")(sequelize);
const SchoolModel = require("./models/SchoolModel")(sequelize);
const OrganizationModel = require("./models/OrganizationModel")(sequelize);
const EventModel = require("./models/EventModel")(sequelize);
const PersonalEventModel = require("./models/PersonalEventModel")(sequelize);
const LocationModel = require("./models/LocationModel")(sequelize);
const NotificationModel = require("./models/NotificationModel")(sequelize);

const UserToSchool = require("./models/UserToSchool")(sequelize);
const UserToEvent = require("./models/UserToEvent")(sequelize);
const UserToPersonalEvent = require("./models/UserToPersonalEvent")(sequelize);

// ADD NOTIFICATIONS TO USER
UserModel.hasMany(NotificationModel);

// ADD LOCATION TO ALL
LocationModel.hasOne(UserModel);
LocationModel.hasOne(SchoolModel);
LocationModel.hasOne(OrganizationModel);
LocationModel.hasOne(EventModel);
LocationModel.hasOne(PersonalEventModel);

// FOR EAGER LOADING EVENTS
EventModel.belongsTo(LocationModel);
PersonalEventModel.belongsTo(LocationModel);
UserModel.belongsTo(LocationModel);

// EAGER LOAD LOCATION INTO SCHOOLS/ORG
SchoolModel.belongsTo(LocationModel);
OrganizationModel.belongsTo(LocationModel);

// LINK SCHOOL ADMIN
UserModel.hasOne(SchoolModel, { foreignKey: "adminId" });
SchoolModel.belongsTo(UserModel, { foreignKey: "adminId" });

// LINK ORGANIZATION ADMIN
UserModel.hasOne(OrganizationModel, { foreignKey: "adminId" });
OrganizationModel.belongsTo(UserModel, { foreignKey: "adminId" });

// LINK EVENT TO ORGANIZATION
OrganizationModel.hasMany(EventModel, {
  foreignKey: "organizationId",
});
EventModel.belongsTo(OrganizationModel);

// LINK SCHOOL TO STUDENTS - many to many in case a student will belong to 2 schools (highschool + some private thing idk)
SchoolModel.belongsToMany(UserModel, { through: UserToSchool });
UserModel.belongsToMany(SchoolModel, { through: UserToSchool });

// EAGER LOADING SUPER M:M REL
SchoolModel.hasMany(UserToSchool);
UserToSchool.belongsTo(SchoolModel);
UserModel.hasMany(UserToSchool);
UserToSchool.belongsTo(UserModel);

// LINK STUDENT TO EVENTS
EventModel.belongsToMany(UserModel, { through: UserToEvent });
UserModel.belongsToMany(EventModel, { through: UserToEvent });

// EAGER LOADING SUPER M:M REL
EventModel.hasMany(UserToEvent);
UserToEvent.belongsTo(EventModel);
UserModel.hasMany(UserToEvent);
UserToEvent.belongsTo(UserModel);

// LINK STUDENT TO PERSONAL EVENTS
PersonalEventModel.belongsToMany(UserModel, { through: UserToPersonalEvent });
UserModel.belongsToMany(PersonalEventModel, { through: UserToPersonalEvent });

// EAGER LOADING SUPER M:M REL
PersonalEventModel.hasMany(UserToPersonalEvent);
UserToPersonalEvent.belongsTo(PersonalEventModel);
UserModel.hasMany(UserToPersonalEvent);
UserToPersonalEvent.belongsTo(UserModel);

module.exports = {
  sequelize,
  UserModel,
  SchoolModel,
  OrganizationModel,
  EventModel,
  PersonalEventModel,
  LocationModel,
  UserToSchool,
  UserToEvent,
  UserToPersonalEvent,
  NotificationModel,
};
