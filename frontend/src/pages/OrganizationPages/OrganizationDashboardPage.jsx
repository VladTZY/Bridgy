import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";
import { EventShortCard } from "../../components/EventShortCard";
import { CompactCard } from "../../components/CompactCard";
import { OrganizationEventCard }   from "../../components/OrganizationEventCard";

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
          <div className="text-xl md:text-2xl font-semibold">Ongoing Events</div>
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
        <div className="flex justify-between  mx-5 my-7">
          <button
            className="bg-[#2EA0FB] hover:bg-[#2135D9] rounded-xl text-white py-2 px-5"
            onClick={() => handleOngoingChangePage(-1)}
          >
            Previous Page
          </button>
          <button
            className="bg-[#2EA0FB] hover:bg-[#2135D9] rounded-xl text-white py-2 px-5"
            onClick={() => handleOngoingChangePage(1)}
          >
            Next Page
          </button>
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl md:text-2xl font-semibold mx-5 my-7">Upcoming Events</h1>

          <div className="mx-2 flex overflow-x-scroll no-scrollbar space-x-4 md:px-2">
            {publishedEvents.slice(0, 4).map((event) => {
              return (
                <CompactCard
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
        <div className="flex justify-between  mx-5 my-7">
          <button
            className="hover:bg-[#2135D9] bg-[#2EA0FB] rounded-xl text-white py-2 px-5"
            onClick={() => handleUpcomingChangePage(-1)}
          >
            Previous Page
          </button>
          <button
            className="hover:bg-[#2135D9] bg-[#2EA0FB] rounded-xl text-white py-2 px-5"
            onClick={() => handleUpcomingChangePage(1)}
          >
            Next Page
          </button>
        </div>
        <div className="text-xl md:text-2xl font-semibold mx-5 my-7">
          Recently Completed
        </div>
        <div class="w-[85vw] px-4 ">
          <div class="flex gap-3 bg-white border-1 shadow rounded-xl overflow-hidden items-center justify-start">

          <div class="relative w-[15%] lg:w-[3%] pl-2 ">
              <img class="  w-full h-full object-cover object-center transition duration-50" loading="lazy" src="https://via.placeholder.com/150" />
            </div>

          <div class="flex flex-col  py-2">

            <p class="text-xl font-bold">Post title</p>

            <p class="text-gray-500 w-[100%">
                Description of your post/article,
            </p>

            <span class="flex items-center justify-start text-gray-500">
               date time etc
            </span>

        </div>

    </div>

</div>
    </div>
    </div>

  );
};
