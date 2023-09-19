const {
  UserModel,
  SchoolModel,
  OrganizationModel,
  LocationModel,
} = require("../database/sequelize");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const validator = require("validator");

const createToken = (id, username, role) => {
  return jwt.sign({ id, username, role }, process.env.SECRET, {
    expiresIn: "3d",
  });
};

const signupUser = async (req, res) => {
  const {
    username,
    email,
    password,
    phoneNumber,
    role,
    country,
    city,
    address,
  } = req.body;

  try {
    if (!username || !email || !password || !phoneNumber)
      throw Error("All fields need to be filled");

    if (!validator.isEmail(email)) {
      throw Error("Email invalid");
    }

    if (!validator.isStrongPassword(password)) {
      throw Error("Password too weak");
    }

    const exists = await UserModel.findOne({
      where: {
        email: email,
      },
    });

    if (exists) throw Error("Email already registered");

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const location = await LocationModel.create({
      country: country,
      city: city,
      address: address,
    });

    const user = await UserModel.create({
      username: username,
      email: email,
      phoneNumber: phoneNumber,
      password: hash,
      role: role,
      locationId: location.id,
    });

    const token = createToken(user.id, user.username, user.role);

    res.status(200).json({ token: token });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email) throw Error("No email sent");
    if (!password) throw Error("No password sent");

    const user = await UserModel.findOne({
      where: {
        email: email,
      },
    });

    const match = await bcrypt.compare(req.body.password, user.password);

    if (!match) throw Error("Incorect password");

    const token = createToken(user.id, user.username, user.role);

    res.status(200).json({ token: token });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getProfileInfo = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) throw Error("Id required");

    const user = await UserModel.findByPk(id);
    const userLocation = await LocationModel.findByPk(id, {
      attributes: { exclude: ["id"] },
    });

    let payload = {
      username: "Vlad",
      email: "Vlad",
      phoneNumber: "Vlad",
      role: "Vlad",
      bio: "Vlad",
      location: userLocation,
    };

    if (
      user.role == "STUDENT" ||
      user.role == "ADMIN" ||
      user.role == "SUPER_ADMIN"
    ) {
      const userInfo = {
        username: user.username,
        email: user.email,
        phoneNumber: user.phoneNumber,
        role: user.role,
        bio: user.bio,
        location: userLocation,
        schoolName: "",
      };

      if (user.role == "ADMIN" || user.role == "SUPER_ADMIN")
        userInfo.role = "Administrator";

      if (user.role == "STUDENT") {
        const school = await SchoolModel.findByPk(user.schoolId, {
          attributes: ["name"],
        });
        userInfo.schoolName = school.name;
      }

      payload = userInfo;
    }

    if (user.role == "SCHOOL") {
      const school = await SchoolModel.findOne({
        where: {
          adminId: user.id,
        },
        attributes: ["name", "email", "phoneNumber", "locationId"],
      });

      const schoolLocation = await LocationModel.findByPk(school.locationId, {
        attributes: { exclude: ["id"] },
      });

      payload = {
        name: school.name,
        role: "School",
        email: school.email,
        phoneNumber: school.phoneNumber,
        bio: user.bio,
        location: schoolLocation,
      };
    }

    if (user.role == "ORGANIZATION") {
      const organization = await OrganizationModel.findOne({
        where: {
          adminId: user.id,
        },
        attributes: ["name", "email", "phoneNumber", "locationId"],
      });

      const organizationLocation = await LocationModel.findByPk(
        organization.locationId,
        {
          attributes: { exclude: ["id"] },
        }
      );

      payload = {
        name: organization.name,
        role: "ORGANIZATION",
        email: organization.email,
        phoneNumber: organization.phoneNumber,
        bio: user.bio,
        location: organizationLocation,
      };
    }

    res.status(200).json(payload);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const updateProfileInfo = async (req, res) => {
  try {
    const id = req.user.id;
    const { phoneNumber, grade, bio, iconUrl } = req.body;

    const user = await UserModel.findByPk(id, {
      attributes: { exclude: ["password", "role", "locationId", "schoolId"] },
    });

    console.log(user);

    if (phoneNumber) user.phoneNumber = phoneNumber;

    if (grade) user.grade = grade;

    if (bio) user.bio = bio;

    if (iconUrl) user.iconUrl = iconUrl;

    await user.save();

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const changePassword = async (req, res) => {
  try {
    const password = req.body.password;
    const newPassword = req.body.newPassword;

    if (!password) throw Error("Password not specified");
    if (!newPassword) throw Error("New password not specified");

    if (!validator.isStrongPassword(newPassword))
      throw Error("New passowrd too weak");

    const match = await bcrypt.compare(password, req.user.password);

    if (!match) throw Error("Wrong password");

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(newPassword, salt);

    const user = await UserModel.findByPk(req.user.id);

    user.password = hash;
    await user.save();

    res.status(200).json({ message: "Password changed" });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = {
  loginUser,
  signupUser,
  getProfileInfo,
  updateProfileInfo,
  changePassword,
};
