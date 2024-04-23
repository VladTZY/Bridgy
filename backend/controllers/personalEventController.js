const {
  PersonalEventModel,
  LocationModel,
  UserToPersonalEvent,
} = require("../database/sequelize");

const createPersonalEvent = async (req, res) => {
  try {
    const {
      name,
      supervisorContact,
      description,
      feedback,
      hours,
      datetime,
      remote,
      country,
      city,
      address,
    } = req.body;
    let { category } = req.body;

    console.log(req.body);

    if (!name || !description || !datetime || !supervisorContact || !hours)
      throw Error("All fields need to be filled");

    if (!remote && (!country || !city || !address))
      throw Error("You need to fill the address if the event is not remote");

    if (description.length > 2000)
      throw Error("Description is too long, limit is 2000 characters");

    if (!category) category = "No category";

    const location = await LocationModel.create({
      country: country,
      city: city,
      address: address,
    });

    const personalEvent = await PersonalEventModel.create({
      name: name,
      supervisorContact: supervisorContact,
      description: description,
      datetime: datetime,
      hours: hours,
      category: category,
      remote: remote,
      locationId: location.id,
    });

    const userToPersonalEvent = await UserToPersonalEvent.create({
      feedback: feedback,
      userId: req.user.id,
      personalEventId: personalEvent.id,
    });

    res.status(200).json(personalEvent);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = {
  createPersonalEvent,
};
