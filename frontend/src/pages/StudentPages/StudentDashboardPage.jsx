import { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import axios from "axios";
import pic from "../../../Bridgy_Assets/Images/Webpage/What we do 01.png";

import { Card } from "../../components/Card";

export const StudentDashboardPage = () => {
  const jwt = useSelector((state) => state.auth.jwt);
  const [ongoingEvents, setOngoingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const [requestedEvents, setRequestedEvents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4004/api/student/ongoing_events", {
        headers: {
          Authorization: `BEARER ${jwt}`,
        },
      })
      .then((res) => {
        setOngoingEvents(res.data);
      })
      .catch((error) => console.log(error));

    axios
      .get("http://localhost:4004/api/student/requested_events", {
        headers: {
          Authorization: `BEARER ${jwt}`,
        },
      })
      .then((res) => {
        setRequestedEvents(res.data);
      })
      .catch((error) => console.log(error));
  }, [jwt]);

  return (
    <div className="h-full bg-gray-100 flex flex-col">
      <div className="min-h-full bg-gray-100 flex flex-col">
        <h1 className="text-4xl font-semibold m-10">Ongoing Events</h1>

        <div className="mx-6 flex flex-wrap">
          {ongoingEvents.map((data) => {
            return (
              <Card
                key={data.event.id}
                id={data.event.id}
                title={data.event.name}
                description={data.event.description}
                date={data.event.time}
                location={data.event.location}
                duration={data.event.hours}
                event_type={"opportunity"}
                pic={pic}
              />
            );
          })}
        </div>
      </div>

      <div className="min-h-full bg-gray-100 flex flex-col">
        <h1 className="text-4xl font-semibold m-10">Requested Events</h1>

        <div className="mx-6 flex flex-wrap">
          {requestedEvents.map((data) => {
            return (
              <Card
                key={data.event.id}
                id={data.event.id}
                title={data.event.name}
                description={data.event.description}
                date={data.event.time}
                location={data.event.location}
                duration={data.event.hours}
                event_type={"opportunity"}
                pic={pic}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
