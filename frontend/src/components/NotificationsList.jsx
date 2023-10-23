import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";

import { NotificationCard } from "./NotificationCard";

export const NotificationsList = () => {
  const jwt = useSelector((state) => state.auth.jwt);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/notification/get_all`, {
        headers: {
          Authorization: `BEARER ${jwt}`,
        },
      })
      .then((res) => setNotifications(res.data))
      .catch((error) => console.log(error));
  }, [jwt]);

  return (
    <div className="flex flex-col">
      {notifications.map((notification) => {
        return (
          <div key={notification.id}>
            <NotificationCard
              type={notification.type}
              message={notification.message}
              eventId={notification.eventId}
              studentId={notification.studentId}
            />
          </div>
        );
      })}
    </div>
  );
};
