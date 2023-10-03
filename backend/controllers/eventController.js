const {
  EventModel,
  LocationModel,
  OrganizationModel,
} = require("../database/sequelize.js");

const { Op } = require("sequelize");

const getEvents = async (req, res) => {
  try {
    let offset = 0;
    let pageSize = 1000;

    if (req.query.offset) offset = parseInt(req.query.offset);
    if (req.query.pageSize) pageSize = parseInt(req.query.pageSize);

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

    const dateNow = new Date();

    if (event.time < dateNow && event.status == "PUBLISHED")
      event.status = "ONGOING";

    res.status(200).json(event);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getEventsByStatus = async (req, res) => {
  try {
    const status = req.query.status;

    let offset = 0;
    let pageSize = 1000;

    if (req.query.offset) offset = parseInt(req.query.offset);
    if (req.query.pageSize) pageSize = parseInt(req.query.pageSize);

    if (!status) throw Error("Status not specified");

    if (
      status != "PUBLISHED" &&
      status != "FULL" &&
      status != "FINISHED" &&
      status != "ONGOING"
    )
      throw Error("Wrong status name");

    let events = [];
    const dateNow = new Date();

    if (status == "ONGOING") {
      events = await EventModel.findAll({
        where: {
          status: "PUBLISHED",
          time: {
            [Op.lt]: dateNow,
          },
        },
        offset: offset * pageSize,
        limit: pageSize,
        include: LocationModel,
      });
    } else if (status == "PUBLISHED") {
      events = await EventModel.findAll({
        where: {
          status: status,
          time: {
            [Op.gt]: dateNow,
          },
        },
        offset: offset * pageSize,
        limit: pageSize,
        include: LocationModel,
      });
    } else {
      events = await EventModel.findAll({
        where: {
          status: status,
        },
        offset: offset * pageSize,
        limit: pageSize,
        include: LocationModel,
      });
    }

    res.status(200).json(events);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getEventByOrganization = async (req, res) => {
  try {
    const organizationId = req.query.organizationId;

    let offset = 0;
    let pageSize = 1000;

    if (req.query.offset) offset = parseInt(req.query.offset);
    if (req.query.pageSize) pageSize = parseInt(req.query.pageSize);

    if (!organizationId) throw Error("Organization Id not specified");

    const events = await EventModel.findAll({
      where: {
        organizationId: organizationId,
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

const getEventByOrganizationAndStatus = async (req, res) => {
  try {
    const organizationId = req.query.organizationId;
    const status = req.query.status;

    let offset = 0;
    let pageSize = 1000;

    if (req.query.offset) offset = parseInt(req.query.offset);
    if (req.query.pageSize) pageSize = parseInt(req.query.pageSize);

    if (!status) throw Error("Status not specified");
    if (!organizationId) throw Error("Organization Id not specified");

    let events = [];
    const dateNow = new Date();

    if (status == "ONGOING") {
      events = await EventModel.findAll({
        where: {
          organizationId: organizationId,
          status: "PUBLISHED",
          time: {
            [Op.lt]: dateNow,
          },
        },
        offset: offset * pageSize,
        limit: pageSize,
        include: LocationModel,
      });
    } else if (status == "PUBLISHED") {
      events = await EventModel.findAll({
        where: {
          organizationId: organizationId,
          status: status,
          time: {
            [Op.gt]: dateNow,
          },
        },
        offset: offset * pageSize,
        limit: pageSize,
        include: LocationModel,
      });
    } else {
      events = await EventModel.findAll({
        where: {
          organizationId: organizationId,
          status: status,
        },
        offset: offset * pageSize,
        limit: pageSize,
        include: LocationModel,
      });
    }

    res.status(200).json(events);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getEventByAdminAndStatus = async (req, res) => {
  try {
    const adminId = req.query.adminId;
    const status = req.query.status;

    let offset = 0;
    let pageSize = 1000;

    if (req.query.offset) offset = parseInt(req.query.offset);
    if (req.query.pageSize) pageSize = parseInt(req.query.pageSize);

    const organization = await OrganizationModel.findOne({
      where: {
        adminId: adminId,
      },
      attributes: ["id"],
    });

    let events = [];
    const dateNow = new Date();

    if (status == "ONGOING") {
      events = await EventModel.findAll({
        where: {
          organizationId: organization.id,
          status: "PUBLISHED",
          time: {
            [Op.lt]: dateNow,
          },
        },
        offset: offset * pageSize,
        limit: pageSize,
        include: LocationModel,
      });
    } else if (status == "PUBLISHED") {
      events = await EventModel.findAll({
        where: {
          organizationId: organization.id,
          status: status,
          time: {
            [Op.gt]: dateNow,
          },
        },
        offset: offset * pageSize,
        limit: pageSize,
        include: LocationModel,
      });
    } else {
      events = await EventModel.findAll({
        where: {
          organizationId: organization.id,
          status: status,
        },
        offset: offset * pageSize,
        limit: pageSize,
        include: LocationModel,
      });
    }

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
  getEventByAdminAndStatus,
};
