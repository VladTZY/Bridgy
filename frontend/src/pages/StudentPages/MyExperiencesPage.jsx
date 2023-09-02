import { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import axios from "axios";

import pic from "../../../Bridgy_Assets/Images/Webpage/What we do 01.png";

import { WriteExperienceCard } from "../../components/WriteExperienceCard";
import { Card } from "../../components/Card";

export const MyExperiencesPage = () => {
  const jwt = useSelector((state) => state.auth.jwt);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4004/api/student/finished_events", {
        headers: {
          Authorization: `BEARER ${jwt}`,
        },
      })
      .then((res) => {
        setEvents(res.data);
      })
      .catch((error) => console.log(error));
  }, [jwt]);

  return (
    <div className="min-h-full bg-gray-100 flex flex-col">
      {events.map((data) => (
        <div className="flex" key={data.event.id}>
          <Card
            id={data.event.id}
            title={data.event.name}
            description={data.event.description}
            date={data.event.time}
            location={data.event.location}
            duration={data.event.hours}
            event_type={"opportunity"}
            pic={pic}
          />
          <WriteExperienceCard
            id={data.event.id}
            title={data.event.name}
            eventDescription={data.feedback}
          />
        </div>
      ))}
    </div>
  );
};
