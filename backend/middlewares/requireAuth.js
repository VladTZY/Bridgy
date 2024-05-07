const jwt = require("jsonwebtoken");
const { UserModel } = require("../database/sequelize");

const requireAuth = async (req, res, next) => {
  try {
    const token = req.cookies.access_token;

    if (!token) return res.status(463).json({ error: "Auth token required" });

    const { id } = jwt.verify(token, process.env.SECRET);

    req.user = await UserModel.findOne({
      where: {
        id: id,
      },
    });

    next();
  } catch (err) {
    res.status(463).json({ error: err.message });
  }
};

module.exports = { requireAuth };
