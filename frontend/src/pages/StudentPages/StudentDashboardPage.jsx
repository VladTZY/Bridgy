import { useState, useEffect } from "react";
import axios from "axios";
import DefaultImage from "../../../Bridgy_Assets/Images/Missions/defaultMission.png";
import { CompactCard } from "../../components/CompactCard";
import { StudentProgressCard } from "../../components/StudentProgressCard";

export const StudentDashboardPage = () => {
  const [ongoingEvents, setOngoingEvents] = useState([]);
  const [requestedEvents, setRequestedEvents] = useState([]);
  const [acceptedEvents, setAcceptedEvents] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/student/accepted_events`, {
        withCredentials: true,
      })
      .then((res) => {
        setAcceptedEvents(res.data);
      })
      .catch((error) => console.log(error));

    axios
      .get(`${import.meta.env.VITE_API_URL}/student/ongoing_events`, {
        withCredentials: true,
      })
      .then((res) => {
        setOngoingEvents(res.data);
      })
      .catch((error) => console.log(error));

    axios
      .get(`${import.meta.env.VITE_API_URL}/student/requested_events`, {
        withCredentials: true,
      })
      .then((res) => {
        setRequestedEvents(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="w-[85vw] p-3 bg-gray-100 flex flex-col pb-10 ml-[15vw]">
      <div className=" md:flex w-[100%] bg-gray-100 flex flex-col px- md:p-4 overflow-x-scroll ">
        <div className=" hidden md:flex md:flex-row overflow-x-scroll  justify-center items-center w-[100%] space-x-4">
          <StudentProgressCard
            title={"Active"}
            total={"250"}
            update={"A 17% increase"}
            percentage={70}
            color={"#32cd32"}
          />
          <StudentProgressCard
            title={"In Progress"}
            total={"56"}
            update={"A 2% decrease"}
            percentage={50}
            color={"#eed202"}
          />
          <StudentProgressCard
            title={"Completed"}
            total={"1000+"}
            update={"Full Completion Rate"}
            percentage={100}
            color={"#000080"}
          />
          <StudentProgressCard
            title={"Due"}
            total={"10"}
            update={"A 10% increase"}
            percentage={20}
            color={"#d8bfd8"}
          />
        </div>

        <div className=" w-[85vw] bg-gray-100 flex flex-col  md:p-4 overflow-x-scroll overscroll-contain md:hidden"></div>
        <div className="  flex flex-row overflow-x-scroll  justify-center items-center w-[400%] md:hidden">
          <div className="flex flex-row overflow-x-scroll  justify-center items-center w-[100%]">
            <StudentProgressCard
              title={"Active"}
              total={"250"}
              update={"A 17% increase"}
              percentage={70}
              color={"#32cd32"}
            />
          </div>
          <div className="flex flex-row overflow-x-scroll  justify-center items-center w-[100%]">
            <StudentProgressCard
              title={"In Progress"}
              total={"56"}
              update={"A 2% decrease"}
              percentage={50}
              color={"#eed202"}
            />
          </div>
          <div className="flex flex-row overflow-x-scroll  justify-center items-center w-[100%]">
            <StudentProgressCard
              title={"Completed"}
              total={"1000+"}
              update={"Full Completion Rate"}
              percentage={100}
              color={"#000080"}
            />
          </div>
          <div className="flex flex-row overflow-x-scroll  justify-center items-center w-[100%]">
            <StudentProgressCard
              title={"Due"}
              total={"10"}
              update={"A 10% increase"}
              percentage={20}
              color={"#d8bfd8"}
            />
          </div>
        </div>
      </div>
      <div className="mt-4 min-h-full bg-gray-100 flex flex-col space-y-4 pl-2">
        <h1 className="text-xl font-bold">Ongoing Events</h1>

        <div>
          {
            {
              true: (
                <div className="text-center text-xl font-semibold">
                  You have no events here!
                </div>
              ),
              false: (
                <div className="flex flex-wrap">
                  {ongoingEvents.map((data) => {
                    return (
                      <CompactCard
                        id={data.event.id}
                        title={data.event.name}
                        description={data.event.description}
                        date={data.event.time}
                        location={data.event.location}
                        duration={data.event.hours}
                        event_type={"opportunity"}
                        photoUrl={
                          data.event.photoUrl == null
                            ? DefaultImage
                            : `${import.meta.env.VITE_UPLOAD_URL}/uploads/${
                                data.event.photoUrl
                              }`
                        }
                      />
                    );
                  })}{" "}
                </div>
              ),
            }[ongoingEvents.length == 0]
          }
        </div>
      </div>

      <div className="mt-4 min-h-full bg-gray-100 flex flex-col space-y-4 pl-2">
        <h1 className="text-xl font-bold">Accepted Events</h1>

        <div>
          {
            {
              true: (
                <div className="text-center text-xl font-semibold">
                  You have no events here!
                </div>
              ),
              false: (
                <div className="flex flex-wrap">
                  {acceptedEvents.map((data) => {
                    return (
                      <CompactCard
                        id={data.event.id}
                        title={data.event.name}
                        description={data.event.description}
                        date={data.event.time}
                        location={data.event.location}
                        duration={data.event.hours}
                        event_type={"opportunity"}
                        photoUrl={
                          data.event.photoUrl == null
                            ? DefaultImage
                            : `${import.meta.env.VITE_UPLOAD_URL}/uploads/${
                                data.event.photoUrl
                              }`
                        }
                      />
                    );
                  })}{" "}
                </div>
              ),
            }[acceptedEvents.length == 0]
          }
        </div>
      </div>

      <div className="mt-4 min-h-full bg-gray-100 flex flex-col space-y-4 pl-2">
        <h1 className="text-xl font-bold">Requested Events</h1>

        <div>
          {
            {
              true: (
                <div className="text-center text-xl font-semibold">
                  You have no events here!
                </div>
              ),
              false: (
                <div className="flex flex-wrap">
                  {requestedEvents.map((data) => {
                    return (
                      <CompactCard
                        id={data.event.id}
                        title={data.event.name}
                        description={data.event.description}
                        date={data.event.time}
                        location={data.event.location}
                        duration={data.event.hours}
                        event_type={"opportunity"}
                        photoUrl={
                          data.event.photoUrl == null
                            ? DefaultImage
                            : `${import.meta.env.VITE_UPLOAD_URL}/uploads/${
                                data.event.photoUrl
                              }`
                        }
                      />
                    );
                  })}{" "}
                </div>
              ),
            }[requestedEvents.length == 0]
          }
        </div>
      </div>
    </div>
  );
};
