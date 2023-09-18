const { EventModel, LocationModel } = require("../database/sequelize.js");

const getEvents = async (req, res) => {
  try {
    const offset = parseInt(req.query.offset);
    const pageSize = parseInt(req.query.pageSize);

    console.log(offset, pageSize);

    const events = await EventModel.findAll({
      offset: offset * pageSize,
      limit: pageSize,
      include: LocationModel,
    });

    res.status(200).json(events);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getEventById = async (req, res) => {
  try {
    const id = req.query.id;

    if (!id) throw Error("Id not specified");

    const event = await EventModel.findByPk(id, { include: LocationModel });

    if (!event) throw Error("No event at this id");

    res.status(200).json(event);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getEventsByStatus = async (req, res) => {
  try {
    const status = req.query.status;
    const offset = parseInt(req.query.offset);
    const pageSize = parseInt(req.query.pageSize);

    if (!status) throw Error("Status not specified");

    if (status != "PUBLISHED" && status != "FULL" && status != "PUBLISHED")
      throw Error("Wrong status name");

    const events = await EventModel.findAll({
      where: {
        status: status,
      },
      offset: offset * pageSize,
      limit: pageSize,
      include: LocationModel,
    });

    res.status(200).json(events);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getEventByOrganization = async (req, res) => {
  try {
    const organizationId = req.query.organizationId;

    if (!organizationId) throw Error("Organization Id not specified");

    const events = await EventModel.findAll({
      where: {
        organizationId: organizationId,
      },
      include: LocationModel,
    });

    res.status(200).json(events);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getEventByOrganizationAndStatus = async (req, res) => {
  try {
    const organizationId = req.query.organizationId;
    const status = req.query.status;

    if (!status) throw Error("Status not specified");
    if (!organizationId) throw Error("Organization Id not specified");

    const events = await EventModel.findAll({
      where: {
        organizationId: organizationId,
        status: status,
      },
      include: LocationModel,
    });

    res.status(200).json(events);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = {
  getEvents,
  getEventById,
  getEventsByStatus,
  getEventByOrganization,
  getEventByOrganizationAndStatus,
};
