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
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, [jwt]);

  return (
    <div>
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
    </div>
  );
};
