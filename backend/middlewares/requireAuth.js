const jwt = require("jsonwebtoken");
const { UserModel } = require("../database/sequelize");

const requireAuth = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization)
    return res.status(401).json({ error: "Auth token required" });

  const token = authorization.split(" ")[1];

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
