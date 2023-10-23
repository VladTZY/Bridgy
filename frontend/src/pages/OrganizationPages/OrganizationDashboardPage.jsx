import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";
import { EventShortCard } from "../../components/EventShortCard";
import { CompactCard } from "../../components/CompactCard";

export const OrganizationDashboardPage = () => {
  const jwt = useSelector((state) => state.auth.jwt);
  const id = useSelector((state) => state.auth.id);
  const organizationId = useSelector((state) => state.auth.institutionId);
  const [ongoingEvents, setOngoingEvents] = useState([]);
  const [finishedEvents, setFinishedEvents] = useState([]);
  const [publishedEvents, setPublishedEvents] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${
          import.meta.env.VITE_API_URL
        }/events/by_admin_and_status?adminId=${id}&status=ONGOING`,
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

    axios
      .get(
        `${
          import.meta.env.VITE_API_URL
        }/events/by_admin_and_status?adminId=${id}&status=PUBLISHED`,
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
        `${
          import.meta.env.VITE_API_URL
        }/events/by_admin_and_status?adminId=${id}&status=FINISHED`,
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
      <div className="flex flex-col">
        <div className="mx-5 my-7 flex justify-between items-center">
          <div className="text-4xl font-semibold">Ongoing Events</div>
          <Link to="/organization/post_opportunities">
            <button className="text-white bg-[#2EA0FB] hover:bg-[#2135D9] rounded-full py-4 px-16 text-xl">
              Add New
            </button>
          </Link>
        </div>
        <div className="mx-2 flex">
          {ongoingEvents.slice(0, 4).map((event) => {
            return (
              <CompactCard
                key={event.id}
                id={event.id}
                title={event.name}
                description={event.description}
                date={event.time}
                location={event.location.city}
                duration={event.hours}
                event_type={"opportunity"}
                photoUrl={
                  event.photoUrl == "NO_FILE"
                    ? "../../Bridgy_Assets/Images/Webpage/What we do 01.png"
                    : `${import.meta.env.VITE_UPLOAD_URL}/uploads/${
                        event.photoUrl
                      }`
                }
              />
            );
          })}
        </div>
        <div className="flex flex-col">
          <h1 className="text-4xl font-semibold mx-5 my-7">Upcoming Events</h1>

          <div className="mx-2 flex">
            {publishedEvents.slice(0, 4).map((event) => {
              return (
                <CompactCard
                  key={event.id}
                  id={event.id}
                  title={event.name}
                  description={event.description}
                  date={event.time}
                  location={event.location.city}
                  duration={event.hours}
                  event_type={"opportunity"}
                  photoUrl={
                    event.photoUrl == "NO_FILE"
                      ? "../../Bridgy_Assets/Images/Webpage/What we do 01.png"
                      : `${import.meta.env.VITE_UPLOAD_URL}/uploads/${
                          event.photoUrl
                        }`
                  }
                />
              );
            })}
          </div>
        </div>
        <div className="text-4xl font-semibold mx-5 my-7">
          Recently Completed
        </div>
        <div className="flex flex-col">
          {finishedEvents.map((event) => {
            return (
              <EventShortCard
                key={event.id}
                id={event.id}
                title={event.name}
                description={event.description}
                attendance={10}
                capacity={event.capacity}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
