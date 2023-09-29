const { NotificationModel } = require("../database/sequelize");

const getNotifications = async (req, res) => {
  try {
    const userId = req.user.id;

    const notifications = await NotificationModel.findAll({
      where: {
        userId: userId,
      },
    });

    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const createNotification = async (userId, type, message, relatedId) => {
  try {
    const notification = await NotificationModel.create({
      type: type,
      message: message,
      relatedId: relatedId,
      userId: userId,
    });

    return notification;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getNotifications,
  createNotification,
};
