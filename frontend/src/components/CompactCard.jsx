import { useNavigate } from "react-router-dom";
import ClockIcon from "../../Bridgy_Assets/icon/clock blue.svg";
import LocationIcon from "../../Bridgy_Assets/icon/location blue.svg";
import CalendarIcon from "../../Bridgy_Assets/icon/calender blue.svg";

import dateToStr from "../misc/dateToStr";

export const CompactCard = ({
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
    <button
      onClick={handleMoreInfo}
      className="w-[28%] h-[40vh] flex flex-col rounded-xl transform transition duration-500  hover:scale-105 hover:drop-shadow-black bg-white m-2 margin-y-auto"
    >
      <img
        src={photoUrl}
        className="rounded-lg px-3  pt-4 self-center object-cover"
        style={{ height: "55%", aspectRatio: "16 / 9 , width-[100%]," }}
      />
      <div className="pt-2 mx-auto px-4 text-xl text-bold w-[100%] "><p className="text-clip overflow-hidden">{title}</p></div> 
      <div className="mx-auto pt-2 px-2 text-lg text-gray-700">
        {description?.toString().substring(0, 30)}...
      </div>
      <div className="flex h-[10%] w-full mt-2  justify-center px-3">
        <div className="flex px-3 border justify-around items-center w-[45%]">
          <img src={CalendarIcon} style={{ height: "50%" }} />
          <div className="text-md text-black">{dateToStr(time)}</div>
        </div>
        <div className="flex px-4 border justify-around items-center w-[30%]">
          <img src={LocationIcon} style={{ height: "50%" }} />
          <div className="text-md text-black">{location}</div>
        </div>
        <div className="flex px-4 border justify-around items-center w-[25%]">
          <img src={ClockIcon} style={{ height: "50%" }} />
          <div className="text-md text-black">{duration}h</div>
        </div>
      </div>
    </button>
  );
};
