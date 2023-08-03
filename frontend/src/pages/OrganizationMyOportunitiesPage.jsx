import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Card } from "../components/Card";

export const OrganizationMyOportunitiesPage = () => {
  const jwt = useSelector((state) => state.auth.jwt);
  const organizationId = useSelector((state) => state.auth.institutionId);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://localhost:4004/api/events/by_organization?organizationId=${organizationId}`,
        {
          headers: {
            Authorization: `BEARER ${jwt}`,
          },
        }
      )
      .then((res) => {
        setEvents(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [organizationId]);
  return (
    <div>
      {events.map((event) => {
        return (
          <Card
            key={event.id}
            name={event.name}
            description={event.description}
          />
        );
      })}
    </div>
  );
};
