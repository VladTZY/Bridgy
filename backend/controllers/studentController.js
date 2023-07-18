const { EventModel, UserToEvent } = require("../database/sequelize");

const joinEvent = async (req, res) => {
  const userId = req.user.id;
  const eventId = req.params.id;

  try {
    const event = await EventModel.findByPk(eventId);

    if (!event) throw Error("Event doesn't exists");

    if (event.status != "PUBLISHED") throw Error("Event is closed");

    const enroled = await UserToEvent.findAll({
      where: {
        eventId: eventId,
        status: "JOINED",
      },
    });

    console.log(enroled.length);

    if (enroled.length >= event.capacity) throw Error("Event full");

    const userToEvent = await UserToEvent.create({
      userId: userId,
      eventId: eventId,
      status: "REQUESTED",
    });

    res.status(200).json(userToEvent);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = { joinEvent };
