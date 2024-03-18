import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Card } from "../../components/Card";
import { SearchBar } from "../../components/SearchBar";
import DefaultImage from "../../../Bridgy_Assets/Images/Missions/defaultMission.png";

export const MissionsPage = () => {
  const id = useSelector((state) => state.auth.id);
  const organizationId = useSelector((state) => state.auth.institutionId);
  const [publishedEvents, setPublishedEvents] = useState([]);
  const [finishedEvents, setFinishedEvents] = useState([]);
  const [publishedPage, setPublishedPage] = useState(1);
  const [finishedPage, setFinishedPage] = useState(1);

  useEffect(() => {
    axios
      .get(
        `${
          import.meta.env.VITE_API_URL
        }/events/by_admin_and_status?adminId=${id}&status=PUBLISHED&offset=${
          publishedPage - 1
        }&pageSize=4`,
        { withCredentials: true }
      )
      .then((res) => {
        setPublishedEvents(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [organizationId, publishedPage]);

  useEffect(() => {
    axios
      .get(
        `${
          import.meta.env.VITE_API_URL
        }/events/by_admin_and_status?adminId=${id}&status=FINISHED&offset=${
          finishedPage - 1
        }&pageSize=4`,
        { withCredentials: true }
      )
      .then((res) => {
        setFinishedEvents(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [organizationId, finishedPage]);

  const handlePublishedChangePage = (val) => {
    if (val == -1 && publishedPage + val > 0)
      setPublishedPage(publishedPage - 1);
    if (val == 1 && publishedEvents.length > 4)
      setPublishedPage(publishedPage + 1);
  };

  const handleFinishedChangePage = (val) => {
    if (val == -1 && finishedPage + val > 0) setFinishedPage(finishedPage - 1);
    if (val == 1 && finishedEvents.length > 4)
      setFinishedPage(finishedPage + 1);
  };

  return (
    <div className="min-h-full bg-gray-100 flex flex-col pb-[8vh] ml-[15vw] px-3 w-[85vw] pt-6">
      <SearchBar />
      <div className="flex flex-col overflow-x-scroll overflow-hidden">
        <h1 className="text-2xl font-semibold  mt-4 mb-3 text-center md:text-left">
          Future Opportunities
        </h1>

        <div className="mx-2 flex flex-row overflow-x-scroll no-scrollbar space-x-4 md:px-2">
          {publishedEvents.slice(0, 4).map((event) => {
            return (
              <Card
                key={event.id}
                id={event.id}
                title={event.name}
                description={event.description}
                time={event.time}
                location={event.location}
                duration={event.hours}
                event_type={"opportunity"}
                photoUrl={
                  event.photoUrl == "NO_FILE"
                    ? DefaultImage
                    : `${import.meta.env.VITE_MISSIONS_BUCKET_URL}${
                        event.photoUrl
                      }`
                }
              />
            );
          })}
        </div>
        <div className="flex justify-end mx-5 space-x-6">
          {publishedPage > 1 ? (
            <button
              className="bg-white hover:bg-[#2EA0FB] rounded-xl border-2 text-black hover:text-white shadow-md hover:shadow-2xl py-2 px-5 mt-4"
              onClick={() => handlePublishedChangePage(-1)}
            >
              Previous Page
            </button>
          ) : (
            <div className="bg-inherit text-transparent py-2 px-5 mt-4">
              Previous Page
            </div>
          )}
          {publishedEvents.length > 4 ? (
            <button
              className="bg-white hover:bg-[#2EA0FB] rounded-xl border-2 text-black hover:text-white shadow-md hover:shadow-2xl py-2 px-5 mt-4"
              onClick={() => handlePublishedChangePage(1)}
            >
              Next Page
            </button>
          ) : (
            <div className="bg-inherit text-transparent py-2 px-5 mt-4">
              Next Page
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col ">
        <h1 className="text-2xl font-semibold my-4 text-center md:text-left">
          Past Opportunities
        </h1>

        <div className="mx-2 flex flex-row overflow-x-scroll no-scrollbar space-x-4 md:px-2">
          {finishedEvents.slice(0, 4).map((event) => {
            return (
              <Card
                key={event.id}
                id={event.id}
                title={event.name}
                description={event.description}
                time={event.time}
                location={event.location}
                duration={event.hours}
                event_type={"opportunity"}
                photoUrl={
                  event.photoUrl == "NO_FILE"
                    ? DefaultImage
                    : `${import.meta.env.VITE_MISSIONS_BUCKET_URL}${
                        event.photoUrl
                      }`
                }
              />
            );
          })}
        </div>
        <div className="flex justify-end mx-5 space-x-6">
          {finishedPage > 1 ? (
            <button
              className="bg-white hover:bg-[#2EA0FB] rounded-xl border-2 text-black hover:text-white shadow-md hover:shadow-2xl py-2 px-5 mt-4"
              onClick={() => handleFinishedChangePage(-1)}
            >
              Previous Page
            </button>
          ) : (
            <div className="bg-inherit text-transparent py-2 px-5 mt-4">
              Previous Page
            </div>
          )}
          {finishedEvents.length > 4 ? (
            <button
              className="bg-white hover:bg-[#2EA0FB] rounded-xl border-2 text-black hover:text-white shadow-md hover:shadow-2xl py-2 px-5 mt-4"
              onClick={() => handleFinishedChangePage(1)}
            >
              Next Page
            </button>
          ) : (
            <div className="bg-inherit text-transparent py-2 px-5 mt-4">
              Next Page
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
