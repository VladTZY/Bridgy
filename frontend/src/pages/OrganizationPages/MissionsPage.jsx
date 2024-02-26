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
    <div className="min-h-full bg-gray-100 flex flex-col pb-10 ml-[15vw] px-3 w-[85vw]">
      <SearchBar />
      <div className="flex flex-col overflow-x-scroll overflow-hidden">
        <h1 className="text-2xl font-semibold  mt-4 mb-3 text-center md:text-left">
          Future Opportunities
        </h1>

        <div className=" space-y-4 mx-2 my-2 flex flex-wrap justify-center justify-items-left  ">
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
        <h1 className="text-2xl font-semibold my-4 text-center md:text-left">Past Opportunities</h1>

        <div className="space-y-4 flex flex-wrap justify-center justify-items-left">
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
