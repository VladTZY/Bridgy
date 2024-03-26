const {
  UserModel,
  SchoolModel,
  OrganizationModel,
  LocationModel,
} = require("../database/sequelize");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const validator = require("validator");

const createToken = (id, expirationTime) => {
  return jwt.sign({ id }, process.env.SECRET, {
    expiresIn: expirationTime,
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

    res.status(200).json({
      message: "Sign up successful",
      id: user.id,
      username: user.username,
      role: user.role,
    });
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

    const accessToken = createToken(user.id, process.env.ACCESS_TOKEN_TIME);
    const refreshToken = createToken(user.id, process.env.REFRESH_TOKEN_TIME);

    res.cookie("access_token", accessToken, {
      httpOnly: true,
      sameSite: "None",
      secure: true,
    });

    res.cookie("refresh_token", refreshToken, {
      httpOnly: true,
      sameSite: "None",
      secure: true,
      path: "/api/user/refresh",
    });

    res.status(200).json({
      message: "Login successful",
      id: user.id,
      username: user.username,
      role: user.role,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const logoutUser = (req, res) => {
  try {
    res.clearCookie("access_token", {
      httpOnly: true,
      sameSite: "None",
      secure: true,
    });
    res.clearCookie("refresh_token", {
      httpOnly: true,
      sameSite: "None",
      secure: true,
      path: "/api/user/refresh",
    });
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.log(error.message);
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
      username: "johndoe",
      email: "johndoe@email.com",
      phoneNumber: "0",
      role: "None",
      bio: "John Doe",
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
        attributes: [
          "name",
          "email",
          "phoneNumber",
          "locationId",
          "objective",
          "objectiveType",
        ],
      });

      const schoolLocation = await LocationModel.findByPk(school.locationId, {
        attributes: { exclude: ["id"] },
      });

      payload = {
        username: school.name,
        role: "SCHOOL",
        email: school.email,
        phoneNumber: school.phoneNumber,
        bio: user.bio,
        objective: school.objective,
        objectiveType: school.objectiveType,
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
        username: organization.name,
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
    const role = req.user.role;
    const { phoneNumber, bio, objective, objectiveType } = req.body;
    let payload = {};

    const user = await UserModel.findByPk(id, {
      attributes: { exclude: ["password", "role", "locationId", "schoolId"] },
    });

    if (bio) {
      user.bio = bio;
      payload.bio = bio;
    }

    if (role == "STUDENT") {
      if (phoneNumber) user.phoneNumber = phoneNumber;
    }

    if (role == "SCHOOL") {
      const school = await SchoolModel.findOne({
        attributes: ["id", "phoneNumber"],
        where: {
          adminId: id,
        },
      });

      if (phoneNumber) {
        school.phoneNumber = phoneNumber;
        payload.phoneNumber = phoneNumber;
      }

      if (objective) {
        school.objective = objective;
        payload.objective = objective;
      }

      if (objectiveType) {
        school.objectiveType = objectiveType;
        payload.objectiveType = objectiveType;
      }

      await school.save();
    }

    if (role == "ORGANIZATION") {
      const organization = await OrganizationModel.findOne({
        attributes: ["id", "phoneNumber"],
        where: {
          adminId: id,
        },
      });

      if (phoneNumber) {
        organization.phoneNumber = phoneNumber;
        payload.phoneNumber = phoneNumber;
      }

      await organization.save();
    }

    await user.save();

    res.status(200).json(payload);
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

const refreshToken = (req, res) => {
  try {
    const refreshToken = req.cookies.refresh_token;

    if (!refreshToken) throw Error("Refresh token missing");

    const { id } = jwt.verify(refreshToken, process.env.SECRET);
    const accessToken = createToken(id, process.env.REFRESH_TOKEN_TIME);

    res.cookie("access_token", accessToken, {
      httpOnly: true,
      sameSite: "None",
      secure: true,
    });

    res.status(200).json({ message: "Token refreshed" });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = {
  loginUser,
  signupUser,
  logoutUser,
  getProfileInfo,
  updateProfileInfo,
  changePassword,
  refreshToken,
};
