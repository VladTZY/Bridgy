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

export const MoreInfoPage = () => {
  const jwt = useSelector((state) => state.auth.jwt);
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
  }, [id, jwt, role]);

  console.log(event.status);

  return (
    <div className="h-full bg-gray-100 flex flex-col">
      <div className="m-5 p-5 rounded-lg bg-white flex flex-col">
        <img
          className="rounded-lg self-center"
          src={
            event.photoUrl == "NO_FILE"
              ? "../../../Bridgy_Assets/Images/Webpage/What we do 01.png"
              : `${import.meta.env.VITE_UPLOAD_URL}/uploads/${event.photoUrl}`
          }
          style={{ height: "50vh", aspectRatio: "16 / 9" }}
        />
        <div className="mt-4 ml-7 text-4xl font-bold">{event.name}</div>
        <div className="mt-3 ml-7 text-2xl">{event.description}</div>
        <div className="flex w-full justify-evenly h-[6vh] mt-3 space-x-4">
          <div className="flex w-[23%] border items-center space-x-2 px-4">
            <img src={CalendarIcon} style={{ height: "70%" }} />
            <div className="text-2xl text-black">
              {event.time?.toString().substring(0, 10)}{" "}
              {event.time?.toString().substring(11, 16)}
            </div>
          </div>
          <div className="flex w-[23%] border items-center space-x-2 px-4">
            <img src={LocationIcon} style={{ height: "70%" }} />
            <div className="text-2xl text-black">{locationName}</div>
          </div>
          <div className="flex w-[23%] border items-center space-x-2 px-4">
            <img src={ClockIcon} style={{ height: "70%" }} />
            <div className="text-2xl text-black">{event.hours} hours</div>
          </div>
          <div className="flex w-[23%] border items-center space-x-2 px-4">
            <img src={ClockIcon} style={{ height: "70%" }} />
            <div className="text-2xl text-black">{event.capacity} places</div>
          </div>
        </div>
        {role == "STUDENT" ? (
          event.status == "PUBLISHED" ? (
            <StudentPublishedMoreInfo
              jwt={jwt}
              eventId={id}
              placesLeft={event.placesLeft}
            />
          ) : event.status == "STUDENT_FINISHED" ? (
            <StudentFinishedMoreInfo jwt={jwt} eventId={id} />
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
          <div className="mt-5 text-3xl font-extrabold">
            You cannot access this event!
          </div>
        )}
      </div>
    </div>
  );
};
