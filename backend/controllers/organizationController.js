const {
  EventModel,
  LocationModel,
  OrganizationModel,
} = require("../database/sequelize");

const createEvent = async (req, res) => {
  const {
    name,
    description,
    hours,
    time,
    capacity,
    country,
    city,
    latitude,
    longitude,
  } = req.body;

  try {
    if (!name || !description || !capacity || !country || !city)
      throw Error("All fields need to be filled");

    const location = await LocationModel.create({
      country: country,
      city: city,
      latitude: latitude,
      longitude: longitude,
    });

    const organization = await OrganizationModel.findOne({
      where: {
        adminId: req.user.id,
      },
    });

    const event = await EventModel.create({
      name: name,
      description: description,
      hours: hours,
      time: time,
      capacity: capacity,
      status: "CREATED",
      locationId: location.id,
      organizationId: organization.id,
    });

    res.status(200).json(event);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = { createEvent };
