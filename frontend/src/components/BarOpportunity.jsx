import { useNavigate } from "react-router-dom";
import dateToStr from "../utils/dateToStr";

export const BarOpportunity = ({
  id,
  event_type,
  title,
  description,
  time,
  location,
  circle_src,
}) => {
  const navigate = useNavigate();

  const handleMoreInfo = () => {
    navigate(`/${event_type}/${id}`);
  };

  if (location == "") location = "Remote";

  return (
    <button
      className="w-[100%] px-2 transform transition duration-200  hover:scale-[1.01] hover:drop-shadow-black"
      onClick={handleMoreInfo}
    >
      <div className="flex bg-white border-1 shadow rounded-xl overflow-hidden items-center justify-start w-[100%] ">
        <div className=" w-[10%] lg:w-[3%] pl-4 ">
          <img
            className="w-[100%] lg:w-[50%]"
            loading="lazy"
            src={circle_src}
          />
        </div>
        <div className="flex justify-between w-[80%] xl:w-[100%] mx-5">
          <div className="flex flex-col  py-2 truncate">
            <p className="text-l text-left font-bold">{title}</p>

            <p className="text-gray-500 text-left text-sm w-[100%] truncate">
              {description}
            </p>
          </div>
          <div className="flex flex-col  py-2">
            <p className="text-l text-right">{location}</p>

            <p className="text-l text-right">
              <time>{dateToStr(time)}</time>
            </p>
          </div>
        </div>
      </div>
    </button>
  );
};
