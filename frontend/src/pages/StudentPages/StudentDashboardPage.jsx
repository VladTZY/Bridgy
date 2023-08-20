import { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import axios from "axios";

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
      <div>
        <h1>Ongoing events</h1>
        {ongoingEvents.map((data) => {
          return (
            <Card
              key={data.event.id}
              name={data.event.name}
              description={data.event.description}
            />
          );
        })}
      </div>

      <div>
        <h1>Requested events</h1>
        {requestedEvents.map((data) => {
          return (
            <Card
              key={data.event.id}
              name={data.event.name}
              description={data.event.description}
            />
          );
        })}
      </div>
    </div>
  );
};
