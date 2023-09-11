import { useNavigate } from "react-router-dom";
import ClockIcon from "../../Bridgy_Assets/icon/clock blue.svg";
import LocationIcon from "../../Bridgy_Assets/icon/location blue.svg";
import CalendarIcon from "../../Bridgy_Assets/icon/calender blue.svg";

export const Card = ({
  id,
  event_type,
  title,
  description,
  date,
  location,
  duration,
  photoUrl,
}) => {
  const navigate = useNavigate();

  const handleMoreInfo = () => {
    navigate(`/${event_type}/${id}`);
  };

  return (
    <div className="w-[30%] flex flex-col rounded-xl transform transition duration-500  hover:scale-105 hover:drop-shadow-black bg-white m-3">
      <img
        src={photoUrl}
        className="rounded-lg mx-8 mt-4"
        style={{ height: "25vh" }}
      />
      <div className="flex h-[7%] justify-around mt-4">
        <div className="flex px-4 border justify-around items-center">
          <img src={CalendarIcon} style={{ width: "2vh", height: "2vh" }} />
          <div className="text-md text-black">
            {date?.toString().substring(0, 10)}
          </div>
        </div>
        <div className="flex px-4 border justify-around items-center">
          <img src={LocationIcon} style={{ width: "2vh", height: "2vh" }} />
          <div className="text-md text-black">{location}</div>
        </div>
        <div className="flex px-4 border justify-around items-center">
          <img src={ClockIcon} style={{ width: "2vh", height: "2vh" }} />
          <div className="text-md text-black">{duration}h</div>
        </div>
      </div>
      <div className="mt-4 ml-6 text-3xl text-bold">{title}</div>
      <div className="mx-6 mt-2 text-xl text-gray-700">
        {description?.toString().substring(0, 40)}...
      </div>
      <button
        className="rounded-3xl mx-6 mt-8 mb-4 px-36 py-4 bg-[#2EA0FB] hover:bg-[#2135D9] text-white text-xl"
        onClick={handleMoreInfo}
      >
        More info
      </button>
    </div>
  );
};
