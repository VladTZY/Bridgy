const requireStudent = (req, res, next) => {
  if (
    req.user.role != "STUDENT" &&
    req.user.role != "ADMIN" &&
    req.user.role != "SUPER_ADMIN"
  )
    return res.status(401).json({ error: "Permision denied" });

  next();
};

module.exports = { requireStudent };
