import { Circle } from "rc-progress";
import ClockIcon from "../../Bridgy_Assets/icon/clock blue.svg";
import LocationIcon from "../../Bridgy_Assets/icon/location blue.svg";
import CalendarIcon from "../../Bridgy_Assets/icon/calender blue.svg";

export const EventProgressCard = ({
  title,
  description,
  percentage,
  date,
  location,
  duration,
}) => {
  return (
    <div className="w-[30%] flex flex-col rounded-xl bg-white m-3 justify-around">
      <div className="flex h-[30%] justify-around mt-4">
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
      <div className="flex">
        <div className="m-2 w-[30%] rounded-full flex relative items-center justify-center">
          <div className="absolute text-center text-3xl text-[#2135D9]">
            {percentage}%
          </div>
          <div
            style={{
              height: "100%",
              width: "100%",
            }}
          >
            <Circle
              percent={percentage}
              strokeColor="#2135D9"
              strokeWidth={15}
              trailColor="#bfdbfe"
              trailWidth={15}
              strokeLinecap="round"
              gapPosition="right"
            />
          </div>
        </div>
        <div className="ml-2 mt-4 flex flex-col">
          <div className="text-2xl text-bold">{title}</div>
          <div className="mt-4 text-xl">{description}</div>
        </div>
      </div>
    </div>
  );
};
