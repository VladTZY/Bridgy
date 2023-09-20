import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Card } from "../../components/Card";
import { SearchBar } from "../../components/SearchBar";

export const MissionsPage = () => {
  const jwt = useSelector((state) => state.auth.jwt);
  const organizationId = useSelector((state) => state.auth.institutionId);
  const [publishedEvents, setPublishedEvents] = useState([]);
  const [finishedEvents, setFinishedEvents] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://localhost:4004/api/events/by_organization_and_status?organizationId=${organizationId}&status=PUBLISHED`,
        {
          headers: {
            Authorization: `BEARER ${jwt}`,
          },
        }
      )
      .then((res) => {
        setPublishedEvents(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(
        `http://localhost:4004/api/events/by_organization_and_status?organizationId=${organizationId}&status=FINISHED`,
        {
          headers: {
            Authorization: `BEARER ${jwt}`,
          },
        }
      )
      .then((res) => {
        setFinishedEvents(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [organizationId]);
  return (
    <div className="min-h-full bg-gray-100 flex flex-col">
      <SearchBar />
      <div className="flex flex-col">
        <h1 className="text-4xl font-semibold mx-5 my-7">
          Active Opportunities
        </h1>

        <div className="mx-2 flex flex-wrap">
          {publishedEvents.map((event) => {
            return (
              <Card
                key={event.id}
                id={event.id}
                title={event.name}
                description={event.description}
                date={event.time}
                location={event.location.city}
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

      <div className="flex flex-col">
        <h1 className="text-4xl font-semibold mx-5 my-7">Past Opportunities</h1>

        <div className="mx-2 flex flex-wrap">
          {finishedEvents.map((event) => {
            return (
              <Card
                key={event.id}
                id={event.id}
                title={event.name}
                description={event.description}
                date={event.time}
                location={event.location.city}
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
