const {
  EventModel,
  UserToEvent,
  SchoolModel,
  UserToSchool,
} = require("../database/sequelize");

module.exports = async (studentId) => {
  const { schoolId } = await UserToSchool.findOne({
    attributes: ["schoolId"],
    where: {
      userId: studentId,
    },
  });

  const { objectiveType, objective } = await SchoolModel.findByPk(schoolId);

  const finishedEvents = await UserToEvent.findAll({
    attributes: [],
    where: {
      userId: studentId,
      status: "FINISHED",
    },
    include: {
      model: EventModel,
      attributes: ["hours"],
    },
  });

  let precentage = 0;

  if (objectiveType == "EVENTS") {
    precentage = Math.floor((finishedEvents.length * 100) / objective);
  } else if (objectiveType == "HOURS") {
    let hours = 0;
    for (let i = 0; i < finishedEvents.length; i++)
      hours = hours + finishedEvents[i].event.hours;

    precentage = Math.floor((hours * 100) / objective);
  } else throw Error("Objective type incorect");

  return precentage;
};
