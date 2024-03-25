const jwt = require("jsonwebtoken");
const { UserModel } = require("../database/sequelize");

const requireAuth = async (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) return res.status(401).json({ error: "Auth token required" });

  try {
    const { id } = jwt.verify(token, process.env.SECRET);

    req.user = await UserModel.findOne({
      where: {
        id: id,
      },
    });

    next();
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};

module.exports = { requireAuth };
