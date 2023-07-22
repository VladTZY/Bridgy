const {
  UserModel,
  SchoolModel,
  LocationModel,
  OrganizationModel,
} = require("../database/sequelize");

const validator = require("validator");
const bcrypt = require("bcrypt");

const createSchool = async (req, res) => {
  const {
    schoolName,
    schoolEmail,
    schoolPhoneNumber,
    schoolCountry,
    schoolCity,
    schoolLatitude,
    schoolLongitude,
    username,
    email,
    phoneNumber,
  } = req.body;

  if (
    !schoolEmail ||
    !schoolName ||
    !schoolPhoneNumber ||
    !username ||
    !email ||
    !phoneNumber
  )
    throw Error("All fields need to be filled");

  if (!validator.isEmail(email)) {
    throw Error("Email invalid");
  }

  if (!validator.isEmail(schoolEmail)) {
    throw Error("School Email invalid");
  }

  const exists = await UserModel.findOne({
    where: {
      email: email,
    },
  });

  if (exists) throw Error("Email already registered");

  const password = "schoolPassword@123";
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await UserModel.create({
    username: username,
    email: email,
    phoneNumber: phoneNumber,
    password: hash,
    role: "SCHOOL",
  });

  const location = await LocationModel.create({
    country: schoolCountry,
    city: schoolCity,
    latitude: schoolLatitude,
    longitude: schoolLongitude,
  });

  const school = await SchoolModel.create({
    name: schoolName,
    email: schoolEmail,
    phoneNumber: schoolPhoneNumber,
    locationId: location.id,
    adminId: user.id,
  });

  res.status(200).json({ school, password });

  try {
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const createOrganization = async (req, res) => {
  const {
    organizationName,
    organizationEmail,
    organizationPhoneNumber,
    organizationDescription,
    organizationCountry,
    organizationCity,
    organizationLatitude,
    organizationLongitude,
    username,
    email,
    phoneNumber,
  } = req.body;

  try {
    if (
      !organizationEmail ||
      !organizationName ||
      !organizationPhoneNumber ||
      !username ||
      !email ||
      !phoneNumber
    )
      throw Error("All fields need to be filled");

    if (!validator.isEmail(email)) {
      throw Error("Email invalid");
    }

    if (!validator.isEmail(organizationEmail)) {
      throw Error("Organization Email invalid");
    }

    const exists = await UserModel.findOne({
      where: {
        email: email,
      },
    });

    if (exists) throw Error("Email already registered");

    const password = "organizationPassword@123";
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await UserModel.create({
      username: username,
      email: email,
      phoneNumber: phoneNumber,
      password: hash,
      role: "ORGANIZATION",
    });

    const location = await LocationModel.create({
      country: organizationCountry,
      city: organizationCity,
      latitude: organizationLatitude,
      longitude: organizationLongitude,
    });

    const organization = await OrganizationModel.create({
      name: organizationName,
      email: organizationEmail,
      phoneNumber: organizationPhoneNumber,
      description: organizationDescription,
      locationId: location.id,
      adminId: user.id,
    });

    res.status(200).json({ organization, password });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = { createSchool, createOrganization };
