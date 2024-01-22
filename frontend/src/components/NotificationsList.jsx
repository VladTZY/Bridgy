import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";

import { NotificationCard } from "./NotificationCard";

export const NotificationsList = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/notification/get_all`, {
        withCredentials: true,
      })
      .then((res) => setNotifications(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="flex flex-col">
      {
        {
          true: (
            <div className="mt-20 text-center text-4xl font-extrabold">
              {" "}
              Nothing new here! <br></br> Join more events!
            </div>
          ),

          false: (
            <div className="bg-white m-5 p-5 rounded-3xl">
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
          ),
        }[notifications.length == 0]
      }
    </div>
  );
};
