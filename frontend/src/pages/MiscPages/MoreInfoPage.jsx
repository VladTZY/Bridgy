import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import axios from "axios";
import { StudentMoreInfo } from "../../components/StudentMoreInfo";
import { OrganizationMoreInfo } from "../../components/OrganizationMoreInfo";
import pic from "../../../Bridgy_Assets/Images/Webpage/What we do 01.png";
import ClockIcon from "../../../Bridgy_Assets/icon/clock blue.svg";
import LocationIcon from "../../../Bridgy_Assets/icon/location blue.svg";
import CalendarIcon from "../../../Bridgy_Assets/icon/calender blue.svg";

export const MoreInfoPage = () => {
  const jwt = useSelector((state) => state.auth.jwt);
  const role = useSelector((state) => state.auth.role);
  const userId = useSelector((state) => state.auth.id);
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
  });

  useEffect(() => {
    axios
      .get(`http://localhost:4004/api/events/id?id=${id}`, {
        headers: {
          Authorization: `BEARER ${jwt}`,
        },
      })
      .then((res) => {
        setEvent(res.data);
      })
      .catch((error) => console.log(error));
  }, [id, jwt]);

  const isAdmin = (role, userId, eventId) => {
    return true;
  };

  return (
    <div className="h-full bg-gray-100 flex flex-col">
      <div className="m-5 p-5 rounded-lg bg-white flex flex-col">
        <img
          className="mx-6 rounded-lg self-center"
          src={pic}
          style={{ height: "600px" }}
        />
        <div className="mt-8 text-6xl font-bold">{event.name}</div>
        <div className="mt-4 text-xl">{event.description}</div>
        <div className="flex h-[40px] mt-4 space-x-4">
          <div className="flex px-28 border items-center">
            <img src={CalendarIcon} style={{ width: "30px", height: "30px" }} />
            <div className="text-xl text-black">
              {event.time?.toString().substring(0, 10)}{" "}
              {event.time?.toString().substring(11, 16)}
            </div>
          </div>
          <div className="flex px-28 border items-center">
            <img src={LocationIcon} style={{ width: "30px", height: "30px" }} />
            <div className="text-xl text-black">Location</div>
          </div>
          <div className="flex px-28 border items-center">
            <img src={ClockIcon} style={{ width: "30px", height: "30px" }} />
            <div className="text-xl text-black">{event.hours} hours</div>
          </div>
          <div className="flex px-28 border items-center">
            <img src={ClockIcon} style={{ width: "30px", height: "30px" }} />
            <div className="text-xl text-black">{event.capacity} places</div>
          </div>
        </div>
        {role == "STUDENT" ? (
          <StudentMoreInfo jwt={jwt} eventId={id} />
        ) : isAdmin(role, userId, id) ? (
          <OrganizationMoreInfo eventId={id} />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};
