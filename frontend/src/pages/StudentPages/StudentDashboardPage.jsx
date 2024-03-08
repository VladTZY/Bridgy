import { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import axios from "axios";
import pic from "../../../Bridgy_Assets/Images/Webpage/What we do 01.png";

import { Card } from "../../components/Card";
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
          <div className=" hidden md:flex md:flex-row overflow-x-scroll  justify-center items-center w-[100%] ">
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

       <div className="w-[100%] lg:px-6 bg-gray-100 ">
       <div className="text-left text-xl font-semibold">
                  Hours
                </div>
       <section class="grid gap-6 my-6 md:grid-cols-3">
    <div class="p-6 bg-white shadow rounded-2xl">
        <dl class="space-y-2">
            <dt class="text-sm font-medium text-gray-500 2xl:text-xl">Total hours/day</dt>

            <dd class="text-5xl font-light md:text-6xl">10</dd>

            <dd class="flex items-center space-x-1 text-sm font-medium text-green-500">
                <span>3h increase</span>

                <svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        d="M17.25 15.25V6.75H8.75"></path>
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        d="M17 7L6.75 17.25"></path>
                </svg>
            </dd>
        </dl>
    </div>

    <div class="p-6 bg-white shadow rounded-2xl">
        <dl class="space-y-2">
            <dt class="text-sm font-medium text-gray-500 2xl:text-xl">Total hours/week</dt>

            <dd class="text-5xl font-light md:text-6xl">43</dd>

            <dd class="flex items-center space-x-1 text-sm font-medium text-red-500">
                <span>10% decrease</span>

                <svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        d="M17.25 8.75V17.25H8.75"></path>
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        d="M17 17L6.75 6.75"></path>
                </svg>
            </dd>
        </dl>
    </div>

    <div class="p-6 bg-white shadow rounded-2xl">
        <dl class="space-y-2">
            <dt class="text-sm font-medium text-gray-500 2xl:text-xl">Total hours</dt>

            <dd class="text-5xl font-light md:text-6xl">439</dd>

            <dd class="flex items-center space-x-1 text-sm font-medium text-green-500">
                <span>3% increase</span>

                <svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        d="M17.25 15.25V6.75H8.75"></path>
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        d="M17 7L6.75 17.25"></path>
                </svg>
            </dd>
        </dl>
    </div>
</section>
       </div>  
      <div className="mt-4 min-h-full bg-gray-100 flex flex-col space-y-4 pl-2">
        <h1 className="text-xl font-bold 2xl:text-2xl">Ongoing Events</h1>

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

      <div className="mt-4 min-h-full bg-gray-100 flex flex-col space-y-4 pl-2">
        <h1 className="text-xl font-bold 2xl:text-2xl">Accepted Events</h1>

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

      <div className="mt-4 min-h-full bg-gray-100 flex flex-col space-y-4 pl-2">
        <h1 className="text-xl font-bold 2xl:text-2xl">Requested Events</h1>

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
