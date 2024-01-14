import { useNavigate } from "react-router-dom";
import ClockIcon from "../../Bridgy_Assets/icon/clock blue.svg";
import LocationIcon from "../../Bridgy_Assets/icon/location blue.svg";
import CalendarIcon from "../../Bridgy_Assets/icon/calender blue.svg";

import dateToStr from "../misc/dateToStr";

export const Card = ({
  id,
  event_type,
  title,
  description,
  time,
  location,
  duration,
  photoUrl,
}) => {
  const navigate = useNavigate();

  const handleMoreInfo = () => {
    navigate(`/${event_type}/${id}`);
  };

  if (location == "") location = "Remote";

  return (
    <div className="w-[30%] flex flex-col rounded-xl transform transition duration-500  hover:scale-105 hover:drop-shadow-black bg-white m-2 mb-2">
      <img
        src={photoUrl}
        className="rounded-lg mt-4 self-center px-4 w-[100%] object-cover"
        style={{ height: "55%", aspectRatio: "16 / 9" }}
      />
      <div className="flex w-full h-[7%] justify-evenly mt-2 px-1.5">
        <div className="w-[33.3%] flex px-1 border items-center justify-evenly ">
          <img src={CalendarIcon} style={{ height: "60%" }} />
          <div className="text-sm text-black">{dateToStr(time)}</div>
        </div>
        <div className="w-[30%] flex px-1 border items-center justify-evenly">
          <img src={LocationIcon} style={{ height: "60%" }} />
          <div className="text-sm text-black">{location}</div>
        </div>
        <div className="w-[30%] flex px-1 border items-center justify-evenly">
          <img src={ClockIcon} style={{ height: "60%" }} />
          <div className="text-sm text-black">{duration} hours</div>
        </div>
      </div>
      <div className="mt-2 ml-6 text-2xl text-bold">{title}</div>
      <div className="mx-6 text-xl text-gray-700">
        {description?.toString().substring(0, 45)}...
      </div>
      <button
        className="rounded-3xl mx-8 mt-2 px-200 py-2 bg-[#2EA0FB] hover:bg-[#2135D9] text-white text-xl"
        onClick={handleMoreInfo}
      >
        More info
      </button>
    </div>
  );
};
