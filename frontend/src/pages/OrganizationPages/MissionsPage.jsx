import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Card } from "../../components/Card";
import { SearchBar } from "../../components/SearchBar";

export const MissionsPage = () => {
  const id = useSelector((state) => state.auth.id);
  const organizationId = useSelector((state) => state.auth.institutionId);
  const [publishedEvents, setPublishedEvents] = useState([]);
  const [finishedEvents, setFinishedEvents] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${
          import.meta.env.VITE_API_URL
        }/events/by_admin_and_status?adminId=${id}&status=PUBLISHED`,
        { withCredentials: true }
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
        { withCredentials: true }
      )
      .then((res) => {
        setFinishedEvents(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [organizationId]);
  return (
    <div className="min-h-full bg-gray-100 flex flex-col pb-10">
      <SearchBar />
      <div className="flex flex-col overflow-x-scroll overflow-hidden">
        <h1 className="text-2xl font-semibold mx-5 mt-2 mb-3">
          Future Opportunities
        </h1>

        <div className="mx-2 flex flex-wrap">
          {publishedEvents.map((event) => {
            return (
              <Card
                key={event.id}
                id={event.id}
                title={event.name}
                description={event.description}
                time={event.time}
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

      <div className="flex flex-col ">
        <h1 className="text-2xl font-semibold mx-5 my-3">Past Opportunities</h1>

        <div className="mx-2 flex flex-wrap overflow-x-scroll overflow-hidden">
          {finishedEvents.map((event) => {
            return (
              <Card
                key={event.id}
                id={event.id}
                title={event.name}
                description={event.description}
                time={event.time}
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
    </div>
  );
};
