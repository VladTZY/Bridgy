import { useNavigate } from "react-router-dom";
import dateToStr from "../misc/dateToStr";

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
      class="w-[85vw] px-4 transform transition duration-200  hover:scale-[1.01] hover:drop-shadow-black"
      onClick={handleMoreInfo}
    >
      <div class="flex gap-3 bg-white border-1 shadow rounded-xl overflow-hidden items-center justify-start">
        <div class="relative w-[15%] lg:w-[3%] pl-4 ">
          <img className="w-[50%]" loading="lazy" src={circle_src} />
        </div>
        <div className="flex justify-between w-[100%] mx-5">
          <div class="flex flex-col  py-2">
            <p class="text-2xl text-left font-bold">{title}</p>

            <p class="text-gray-500 text-left w-[100%]">{description}</p>
          </div>
          <div class="flex flex-col  py-2">
            <p class="text-xl text-right">{location}</p>

            <p class="text-l text-right">
              <time>{dateToStr(time)}</time>
            </p>
          </div>
        </div>
      </div>
    </button>
  );
};
