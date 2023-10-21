import { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import axios from "axios";
import pic from "../../../Bridgy_Assets/Images/Webpage/What we do 01.png";

import { Card } from "../../components/Card";
import { CompactCard } from "../../components/CompactCard";
import { StudentProgressCard } from "../../components/StudentProgressCard";

export const StudentDashboardPage = () => {
  const jwt = useSelector((state) => state.auth.jwt);
  const [ongoingEvents, setOngoingEvents] = useState([]);
  const [requestedEvents, setRequestedEvents] = useState([]);
  const [acceptedEvents, setAcceptedEvents] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/student/accepted_events`, {
        headers: {
          Authorization: `BEARER ${jwt}`,
        },
      })
      .then((res) => {
        setAcceptedEvents(res.data);
      })
      .catch((error) => console.log(error));

    axios
      .get(`${import.meta.env.VITE_API_URL}/student/ongoing_events`, {
        headers: {
          Authorization: `BEARER ${jwt}`,
        },
      })
      .then((res) => {
        setOngoingEvents(res.data);
      })
      .catch((error) => console.log(error));

    axios
      .get(`${import.meta.env.VITE_API_URL}/student/requested_events`, {
        headers: {
          Authorization: `BEARER ${jwt}`,
        },
      })
      .then((res) => {
        setRequestedEvents(res.data);
      })
      .catch((error) => console.log(error));
  }, [jwt]);

  return (
    <div className="h-full p-3 bg-gray-100 flex flex-col">
      <div className="flex justify-between space-x-4">
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
      <div className="mt-4 min-h-full bg-gray-100 flex flex-col space-y-4">
        <h1 className="text-4xl font-semibold">Ongoing Events</h1>

        <div>
          {
            {
              true: (
                <div className="text-center text-3xl font-extrabold">
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
                            ? "../../Bridgy_Assets/Images/Webpage/What we do 01.png"
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

      <div className="mt-4 min-h-full bg-gray-100 flex flex-col space-y-4">
        <h1 className="text-4xl font-semibold">Accepted Events</h1>

        <div>
          {
            {
              true: (
                <div className="text-center text-3xl font-extrabold">
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
                            ? "../../Bridgy_Assets/Images/Webpage/What we do 01.png"
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

      <div className="mt-4 min-h-full bg-gray-100 flex flex-col space-y-4">
        <h1 className="text-4xl font-semibold">Requested Events</h1>

        <div>
          {
            {
              true: (
                <div className="text-center text-3xl font-extrabold">
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
                            ? "../../Bridgy_Assets/Images/Webpage/What we do 01.png"
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
