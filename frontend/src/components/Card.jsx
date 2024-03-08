import { useNavigate } from "react-router-dom";

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
    <div class="mx-auto max-w-sm overflow-hidden rounded-lg bg-white shadow">
      <img src={photoUrl} class="aspect-video w-full object-cover" alt="" />
      <div class="p-4  ">
        <p class="mb-1 text-sm text-primary-500 ">
          Organization Name • <time>{dateToStr(time)}</time> •{" "}
          <location>{location}</location>
        </p>
        <h3 class="text-xl font-medium text-gray-900 truncate overflow-hidden">
          {title}
        </h3>
        <p class="mt-1 text-gray-500 truncate overflow-hidden">{description}</p>
        <button
          className="rounded-xl px-4 mt-2 py-1 bg-[#2EA0FB] hover:bg-[#2135D9] text-white text-l text-center justify-center"
          onClick={handleMoreInfo}
        >
          More info
        </button>
      </div>
    </div>
  );
};
