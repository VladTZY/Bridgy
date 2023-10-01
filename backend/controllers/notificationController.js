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

const createNotification = async (
  userId,
  type,
  message,
  studentId,
  eventId
) => {
  try {
    const notification = await NotificationModel.create({
      type: type,
      message: message,
      studentId: studentId,
      eventId: eventId,
      userId: userId,
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  getNotifications,
  createNotification,
};
