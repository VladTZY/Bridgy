import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import axios from "axios";
import { StudentPublishedMoreInfo } from "../../components/StudentPublishedMoreInfo";
import { StudentFinishedMoreInfo } from "../../components/StudentFinishedMoreInfo";
import { StudentOngoingMoreInfo } from "../../components/StudentOngoingMoreInfo";
import { StudentAcceptedMoreInfo } from "../../components/StudentAcceptedMoreInfo";
import { StudentRequestedMoreInfo } from "../../components/StudentRequestedMoreInfo";
import { OrganizationPublishedMoreInfo } from "../../components/OrganizationPublishedMoreInfo";
import { OrganizationOngoingMoreInfo } from "../../components/OrganizationOngoingMoreInfo";
import { OrganizationFinishedMoreInfo } from "../../components/OrganizationFinishedMoreInfo";
import ClockIcon from "../../../Bridgy_Assets/icon/clock blue.svg";
import LocationIcon from "../../../Bridgy_Assets/icon/location blue.svg";
import CalendarIcon from "../../../Bridgy_Assets/icon/calender blue.svg";
import DefaultImage from "../../../Bridgy_Assets/Images/Missions/defaultMission.png";

import datetimeToStr from "../../misc/datetimeToStr";

export const MoreInfoPage = () => {
  const role = useSelector((state) => state.auth.role);
  const userId = useSelector((state) => state.auth.id);
  const [isAdmin, setIsAdmin] = useState(false);
  const { id } = useParams();
  const [event, setEvent] = useState({
    name: "",
    description: "",
    hours: null,
    time: new Date(),
    capacity: 0,
    country: "",
    city: "",
    latitude: null,
    longitude: null,
    photoUrl: "",
    location: ("", ""),
    status: "",
  });
  const [locationName, setLocationName] = useState("");

  useEffect(() => {
    if (role == "ORGANIZATION") {
      axios
        .get(
          `${
            import.meta.env.VITE_API_URL
          }/organization/check_admin?eventId=${id}`,
          { withCredentials: true }
        )
        .then((res) => {
          setIsAdmin(res.data.isAdmin);
        })
        .catch((error) => console.log(error));
    }

    axios
      .get(`${import.meta.env.VITE_API_URL}/events/id?id=${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        setEvent(res.data);

        if (res.data.remote) setLocationName("Remote");
        else
          setLocationName(
            res.data.location.country + ", " + res.data.location.city
          );
      })
      .catch((error) => console.log(error));
  }, [id, role]);

  return (
    <div className=" bg-gray-100 flex flex-col w-[85vw] ml-[15vw]">
      <div className="mx-3 mb-10  rounded-lg bg-white flex flex-col">
        <img
          className="rounded-lg self-center"
          src={
            event.photoUrl == "NO_FILE"
              ? DefaultImage
              : `${import.meta.env.VITE_UPLOAD_URL}/uploads/${event.photoUrl}`
          }
          style={{
            height: "45vh",
            width: "100%",
            objectFit: "cover",
            aspectRatio: "16 / 9",
          }}
        />
        <div className="mt-4  text-xl font-bold text-center w-[100%] px-2">
          {event.name}
        </div>
        <div className="mt-3 w-[100%] px-2 text-l text-center ">
          {event.description}
        </div>
        <div className="flex flex-row w-[100%] px-3 justify-evenly  mt-3 space-x-4">
          <div className="flex flex-col w-[50%] space-y-2">
            <div className="flex  border items-center justify-between md:justify-center space-x-2 px-2 rounded-xl">
              <img src={CalendarIcon} style={{ height: "40%" }} />
              <div className="text-l text-black truncate overflow-hidden">
                {datetimeToStr(event.time)}
              </div>
            </div>
            <div className="flex border items-center justify-between md:justify-center space-x-2 px-2 rounded-xl">
              <img src={LocationIcon} style={{ height: "40%" }} />
              <div className="text-l text-black">{locationName}</div>
            </div>
          </div>
          <div className="flex flex-col w-[50%] space-y-2">
            <div className="flex  border items-center justify-between md:justify-center space-x-2 px-2 rounded-xl">
              <img src={ClockIcon} style={{ height: "40%" }} />
              <div className="text-l text-black">{event.hours} hours</div>
            </div>
            <div className="flex  border items-center justify-between md:justify-center space-x-2 px-2 rounded-xl">
              <img src={ClockIcon} style={{ height: "40%" }} />
              <div className="text-l text-black">{event.capacity} places</div>
            </div>
          </div>
        </div>
        <div>
          {role == "STUDENT" ? (
            event.status == "PUBLISHED" ? (
              <StudentPublishedMoreInfo
                eventId={id}
                placesLeft={event.placesLeft}
              />
            ) : event.status == "STUDENT_FINISHED" ? (
              <StudentFinishedMoreInfo eventId={id} />
            ) : event.status == "STUDENT_ONGOING" ? (
              <StudentOngoingMoreInfo />
            ) : event.status == "STUDENT_ACCEPTED" ? (
              <StudentAcceptedMoreInfo />
            ) : (
              <StudentRequestedMoreInfo />
            )
          ) : isAdmin ? (
            event.status == "PUBLISHED" ? (
              <OrganizationPublishedMoreInfo eventId={id} />
            ) : event.status == "FINISHED" ? (
              <OrganizationFinishedMoreInfo eventId={id} />
            ) : (
              <OrganizationOngoingMoreInfo eventId={id} />
            )
          ) : (
            <div className="mt-5 text-xl font-extrabold">
              You cannot access this event!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
