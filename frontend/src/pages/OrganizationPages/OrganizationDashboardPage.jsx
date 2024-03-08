import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";
import { CompactCard } from "../../components/CompactCard";
import { BarOpportunity } from "../../components/BarOpportunity";
import DefaultImage from "../../../Bridgy_Assets/Images/Missions/defaultMission.png";
import OrangeCircle from "../../../Bridgy_Assets/LOGO BRIDGY/fav icon/orangecircle.png";
import GreenCircle from "../../../Bridgy_Assets/LOGO BRIDGY/fav icon/greencircle.png";

export const OrganizationDashboardPage = () => {
  const id = useSelector((state) => state.auth.id);
  const organizationId = useSelector((state) => state.auth.institutionId);
  const [ongoingEvents, setOngoingEvents] = useState([]);
  const [publishedEvents, setPublishedEvents] = useState([]);
  const [finishedEvents, setFinishedEvents] = useState([]);
  const [ongoingPage, setOngoinPage] = useState(1);
  const [upcomingPage, setUpcomingPage] = useState(1);
  const [finishedPage, setFinishedPage] = useState(1);

  useEffect(() => {
    axios
      .get(
        `${
          import.meta.env.VITE_API_URL
        }/events/by_admin_and_status?adminId=${id}&status=ONGOING&offset=${
          ongoingPage - 1
        }&pageSize=4`,
        { withCredentials: true }
      )
      .then((res) => {
        setOngoingEvents(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [organizationId, ongoingPage]);

  useEffect(() => {
    axios
      .get(
        `${
          import.meta.env.VITE_API_URL
        }/events/by_admin_and_status?adminId=${id}&status=PUBLISHED&offset=${
          upcomingPage - 1
        }&pageSize=4`,
        { withCredentials: true }
      )
      .then((res) => {
        setPublishedEvents(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [organizationId, upcomingPage]);

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

  const handleOngoingChangePage = (val) => {
    if (val == -1 && ongoingPage + val > 0) setOngoinPage(ongoingPage - 1);
    if (val == 1 && ongoingEvents.length > 4) setOngoinPage(ongoingPage + 1);
  };

  const handleUpcomingChangePage = (val) => {
    if (val == -1 && upcomingPage + val > 0) setUpcomingPage(upcomingPage - 1);
    if (val == 1 && publishedEvents.length > 4)
      setUpcomingPage(upcomingPage + 1);
  };

  const handleFinishedChangePage = (val) => {
    if (val == -1 && finishedPage + val > 0) setFinishedPage(finishedPage - 1);
    if (val == 1 && finishedEvents.length > 4)
      setFinishedPage(finishedPage + 1);
  };

  return (
    <div className="min-h-full bg-gray-100 flex flex-col pb-5 ml-[15vw]">
      <div className="flex flex-col">
        <div className="mx-5 my-7 flex justify-between items-center ">
          <div className="text-xl md:text-2xl font-semibold">
            Ongoing Events
          </div>
          <Link to="/organization/post_opportunities">
            <button className="text-white bg-[#2EA0FB] hover:bg-[#2135D9] rounded-xl py-1 px-3 md:py-2 md:px-6 text-l">
              Add New
            </button>
          </Link>
        </div>
        <div className="mx-2 flex flex-row overflow-x-scroll no-scrollbar space-x-4 md:px-2">
          {ongoingEvents.slice(0, 4).map((event) => {
            return (
              <CompactCard
                id={event.id}
                title={event.name}
                description={event.description}
                time={event.time}
                location={event.location.city}
                duration={event.hours}
                event_type={"opportunity"}
                photoUrl={
                  event.photoUrl == "NO_FILE"
                    ? DefaultImage
                    : `${import.meta.env.VITE_UPLOAD_URL}/uploads/${
                        event.photoUrl
                      }`
                }
              />
            );
          })}
        </div>
        <div className="flex justify-end mx-5 space-x-6">
          {ongoingPage > 1 ? (
            <button
              className="bg-white hover:bg-[#2EA0FB] rounded-xl border-2 text-black hover:text-white shadow-md hover:shadow-2xl py-2 px-5 mt-4"
              onClick={() => handleOngoingChangePage(-1)}
            >
              Previous Page
            </button>
          ) : (
            <div className="bg-inherit text-transparent py-2 px-5 mt-4">
              Previous Page
            </div>
          )}
          {ongoingEvents.length > 4 ? (
            <button
              className="bg-white hover:bg-[#2EA0FB] rounded-xl border-2 text-black hover:text-white shadow-md hover:shadow-2xl py-2 px-5 mt-4"
              onClick={() => handleOngoingChangePage(1)}
            >
              Next Page
            </button>
          ) : (
            <div className="bg-inherit text-transparent py-2 px-5 mt-4">
              Next Page
            </div>
          )}
        </div>
        <div className="text-xl md:text-2xl font-semibold mx-5 mt-7 mb-4">
          Upcoming Events
        </div>
        <div className="flex flex-col space-y-1">
          {publishedEvents.slice(0, 4).map((event) => {
            return (
              <BarOpportunity
                id={event.id}
                title={event.name}
                description={event.description}
                time={event.time}
                location={event.location.city}
                event_type={"opportunity"}
                circle_src={OrangeCircle}
              />
            );
          })}
        </div>
        <div className="text-xl md:text-2xl font-semibold mx-5 mt-7 mb-4">
          Recently Completed
        </div>
        <div className="flex flex-col space-y-1">
          {finishedEvents.slice(0, 4).map((event) => {
            return (
              <BarOpportunity
                id={event.id}
                title={event.name}
                description={event.description}
                time={event.time}
                location={event.location.city}
                event_type={"opportunity"}
                circle_src={GreenCircle}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
