import { useState, useEffect } from "react";
import axiosInstance from "../utils/axiosInstance";

import { NotificationCard } from "./NotificationCard";

export const NotificationsList = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    axiosInstance
      .get(`/notification/get_all`)
      .then((res) => setNotifications(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="flex flex-col">
      {
        {
          true: (
            <div className="my-auto text-center text-l font-extrabold py-3">
              {" "}
              Nothing new here! <br></br> Join more events!
            </div>
          ),

          false: (
            <div className="bg-white  rounded-3xl ">
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
