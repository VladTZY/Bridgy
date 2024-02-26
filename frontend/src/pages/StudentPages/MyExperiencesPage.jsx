import { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import axios from "axios";

import { WriteExperienceCard } from "../../components/WriteExperienceCard";
import { Card } from "../../components/Card";

export const MyExperiencesPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/student/finished_events`, {
        withCredentials: true,
      })
      .then((res) => {
        setEvents(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="min-h-full p-5 bg-gray-100 flex flex-col space-x-4 ml-[15vw]">
      {
        {
          true: (
            <div className="mt-10 text-center text-xl font-extrabold">
              {" "}
              You have no experiences yet! <br></br> Join more events!
            </div>
          ),
          false: (
            <div>
              {events.map((data) => (
                <div className="flex justify-between" key={data.event.id}>
                  <Card
                    id={data.event.id}
                    title={data.event.name}
                    description={data.event.description}
                    time={data.event.time}
                    location={data.event.location}
                    duration={data.event.hours}
                    event_type={"opportunity"}
                    photoUrl={
                      data.event.photoUrl == "NO_FILE"
                        ? "../../Bridgy_Assets/Images/Webpage/What we do 01.png"
                        : `${import.meta.env.VITE_UPLOAD_URL}/uploads/${
                            data.event.photoUrl
                          }`
                    }
                  />
                  {
                    <WriteExperienceCard
                      id={data.event.id}
                      title={data.event.name}
                      eventDescription={data.feedback}
                    />
                  }
                </div>
              ))}{" "}
            </div>
          ),
        }[events.length == 0]
      }
    </div>
  );
};
