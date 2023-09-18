import { useNavigate } from "react-router-dom";
import ClockIcon from "../../Bridgy_Assets/icon/clock blue.svg";
import LocationIcon from "../../Bridgy_Assets/icon/location blue.svg";
import CalendarIcon from "../../Bridgy_Assets/icon/calender blue.svg";

export const CompactCard = ({
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
    <button
      onClick={handleMoreInfo}
      className="w-[24%] flex flex-col rounded-xl transform transition duration-500  hover:scale-105 hover:drop-shadow-black bg-white m-2"
    >
      <img
        src={photoUrl}
        className="rounded-lg mx-8 mt-4 self-center"
        style={{ height: "50%", aspectRatio: "16 / 9" }}
      />
      <div className="mt-2 ml-6 text-2xl text-bold">{title}</div>
      <div className="mx-6 mt-2 text-lg text-gray-700">
        {description?.toString().substring(0, 30)}...
      </div>
      <div className="flex h-[10%] space-x-2 mt-4 justify-around">
        <div className="flex px-4 border justify-around items-center">
          <img src={CalendarIcon} style={{ height: "70%" }} />
          <div className="text-md text-black">
            {date?.toString().substring(0, 10)}
          </div>
        </div>
        <div className="flex px-4 border justify-around items-center">
          <img src={LocationIcon} style={{ height: "70%" }} />
          <div className="text-md text-black">{location}</div>
        </div>
        <div className="flex px-4 border justify-around items-center">
          <img src={ClockIcon} style={{ height: "70%" }} />
          <div className="text-md text-black">{duration}h</div>
        </div>
      </div>
    </button>
  );
};
