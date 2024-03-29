import axiosInstance from "../../utils/axiosInstance";
import { useState, useEffect } from "react";
import { WriteExperienceCard } from "../../components/WriteExperienceCard";
import { Card } from "../../components/Card";
import DefaultImage from "../../../Bridgy_Assets/Images/Missions/defaultMission.png";

export const MyExperiencesPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axiosInstance
      .get(`/student/finished_events`)
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
                <div
                  className="flex flex-col lg:flex lg:flex-row justify-between"
                  key={data.event.id}
                >
                  <Card
                    style="w-[100%] lg:max-w-sm"
                    id={data.event.id}
                    title={data.event.name}
                    description={data.event.description}
                    time={data.event.time}
                    location={data.event.location}
                    duration={data.event.hours}
                    event_type={"opportunity"}
                    photoUrl={
                      data.event.photoUrl == "NO_FILE"
                        ? DefaultImage
                        : `${import.meta.env.VITE_MISSIONS_BUCKET_URL}${
                            event.photoUrl
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
              ))}
            </div>
          ),
        }[events.length == 0]
      }
    </div>
  );
};
