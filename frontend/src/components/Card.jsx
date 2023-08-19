import { useNavigate } from "react-router-dom";
import ClockIcon from "../../Bridgy_Assets/icon/clock blue.svg";
import LocationIcon from "../../Bridgy_Assets/icon/location blue.svg";
import CalendarIcon from "../../Bridgy_Assets/icon/calender blue.svg";


export const Card = ({ id, event_type, pic, title, description, date, location, duration}) => {
  const navigate = useNavigate();

  const handleMoreInfo = () => {
    navigate(`/${event_type}/${id}`);
  };

  return (
    <div className="w-[500px] rounded-lg transform transition duration-500  hover:scale-110 hover:drop-shadow-black flex-row">
      <img src={pic} className="rounded-lg ml-12" style={{height: '200px'}} />
      <div className="flex h-[30px] justify-around mt-4">
        <div className="flex px-8 border justify-around">
          <img src={CalendarIcon} style={{width: '20px', height: '20px'}} />
          <div className="text-md text-black">
            {date?.toString().substring(0, 10)}
          </div>
        </div>
        <div className="flex px-8 border justify-around">
          <img src={LocationIcon} style={{width: '20px', height: '20px'}} />
          <div className="text-md text-black">
            {location}
          </div>
        </div>
        <div className="flex px-8 border justify-around">
          <img src={ClockIcon} style={{width: '20px', height: '20px'}} />
          <div className="text-md text-black">
            {duration}h
          </div>
        </div>
      </div>
      <div className="mt-4 ml-6 text-3xl text-bold">
        {title}
      </div>
      <div className="ml-6 mt-2 text-xl">
        {description}
      </div>
      <button className="rounded-3xl ml-4 mt-8 px-48 py-4 bg-[#2EA0FB] hover:bg-[#2135D9] text-white text-xl" onClick={handleMoreInfo}>More info</button>
    </div>
  );
};
