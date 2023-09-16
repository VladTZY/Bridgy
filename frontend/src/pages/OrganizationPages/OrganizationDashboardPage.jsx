import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Card } from "../../components/Card";
import { Link } from "react-router-dom";

export const OrganizationDashboardPage = () => {
  const jwt = useSelector((state) => state.auth.jwt);
  const organizationId = useSelector((state) => state.auth.institutionId);
  const [ongoingEvents, setOngoingEvents] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://localhost:4004/api/events/by_organization_and_status?organizationId=${organizationId}&status=FULL`,
        {
          headers: {
            Authorization: `BEARER ${jwt}`,
          },
        }
      )
      .then((res) => {
        setOngoingEvents(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [organizationId]);

  return (
    <div className="min-h-full bg-gray-100 flex flex-col">
      <div className="flex flex-col">
        <div className="m-10 flex justify-between">
          <div className="text-4xl font-semibold">Ongoing Events</div>
          <Link to="/organization/missions">
            <button className="text-white bg-[#2EA0FB] hover:bg-[#2135D9] rounded-full py-4 px-16 text-xl">
              Add New
            </button>
          </Link>
        </div>
        <div className="mx-6 flex flex-wrap">
          {ongoingEvents.map((event) => {
            return (
              <Card
                key={event.id}
                id={event.id}
                title={event.name}
                description={event.description}
                date={event.time}
                location={event.location}
                duration={event.hours}
                event_type={"opportunity"}
                photoUrl={
                  event.photoUrl == null
                    ? "../../Bridgy_Assets/Images/Webpage/What we do 01.png"
                    : `http://localhost:4004/uploads/${event.photoUrl}`
                }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
