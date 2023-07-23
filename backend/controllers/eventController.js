const { EventModel } = require("../database/sequelize.js");

const getEvents = async (req, res) => {
  try {
    const events = await EventModel.findAll({
      where: {
        status: "PUBLISHED",
      },
    });

    res.status(200).json(events);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getEventById = async (req, res) => {
  try {
    const id = req.params.id;

    const event = await EventModel.findByPk(id);

    res.status(200).json(event);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = { getEvents, getEventById };
