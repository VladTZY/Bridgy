const {
  EventModel,
  LocationModel,
  OrganizationModel,
  UserToEvent,
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
      limit: pageSize + 1,
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

    let event = await EventModel.findByPk(id, {
      attributes: {
        exclude: ["createdAt", "updatedAt", "locationId", "organizationId"],
      },
      include: [
        {
          attributes: { exclude: ["id"] },
          model: LocationModel,
        },
        {
          attributes: ["name"],
          model: OrganizationModel,
        },
      ],
    });
    event = JSON.stringify(event);
    event = JSON.parse(event);

    if (!event) throw Error("No event at this id");

    const eventTime = new Date(event.datetime);
    const dateNow = new Date();

    if (
      req.user.role != "STUDENT" &&
      eventTime < dateNow &&
      event.status == "PUBLISHED"
    )
      event.status = "ONGOING";

    if (req.user.role == "STUDENT") {
      const userToEvent = await UserToEvent.findOne({
        where: {
          userId: req.user.id,
          eventId: id,
        },
      });

      if (userToEvent) {
        if (userToEvent.status == "JOINED") {
          if (eventTime < dateNow) event.status = "STUDENT_ONGOING";
          else event.status = "STUDENT_ACCEPTED";
        } else if (userToEvent.status == "REQUESTED")
          event.status = "STUDENT_REQUESTED";
        else if (userToEvent.status == "FINISHED")
          event.status = "STUDENT_FINISHED";
      }
    }

    if (eventTime > dateNow) {
      const checkCapacity = await UserToEvent.findAndCountAll({
        where: {
          eventId: id,
          status: "JOINED",
        },
      });

      event.placesLeft = event.capacity - checkCapacity.count;
    }

    res.status(200).json(event);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getEventsByStatus = async (req, res) => {
  try {
    const status = req.query.status;
    const category = req.query.category;

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

    let conditional = {
      status: status,
    };
    const dateNow = new Date();

    if (status == "ONGOING") {
      conditional.status = "PUBLISHED";
      conditional.datetime = {
        [Op.lt]: dateNow,
      };
    }

    if (status == "PUBLISHED") {
      conditional.datetime = {
        [Op.gt]: dateNow,
      };
    }

    if (category && category != "All categories")
      conditional.category = category;

    const events = await EventModel.findAll({
      where: conditional,
      offset: offset * pageSize,
      limit: pageSize + 1,
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
      limit: pageSize + 1,
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
          datetime: {
            [Op.lt]: dateNow,
          },
        },
        offset: offset * pageSize,
        limit: pageSize + 1,
        include: LocationModel,
      });
    } else if (status == "PUBLISHED") {
      events = await EventModel.findAll({
        where: {
          organizationId: organizationId,
          status: status,
          datetime: {
            [Op.gt]: dateNow,
          },
        },
        offset: offset * pageSize,
        limit: pageSize + 1,
        include: LocationModel,
      });
    } else {
      events = await EventModel.findAll({
        where: {
          organizationId: organizationId,
          status: status,
        },
        offset: offset * pageSize,
        limit: pageSize + 1,
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
          datetime: {
            [Op.lt]: dateNow,
          },
        },
        offset: offset * pageSize,
        limit: pageSize + 1,
        include: LocationModel,
      });
    } else if (status == "PUBLISHED") {
      events = await EventModel.findAll({
        where: {
          organizationId: organization.id,
          status: status,
          datetime: {
            [Op.gt]: dateNow,
          },
        },
        offset: offset * pageSize,
        limit: pageSize + 1,
        include: LocationModel,
      });
    } else {
      events = await EventModel.findAll({
        where: {
          organizationId: organization.id,
          status: status,
        },
        offset: offset * pageSize,
        limit: pageSize + 1,
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
