import { Circle } from "rc-progress";
import ClockIcon from "../../Bridgy_Assets/icon/clock blue.svg";
import LocationIcon from "../../Bridgy_Assets/icon/location blue.svg";
import CalendarIcon from "../../Bridgy_Assets/icon/calender blue.svg";
import { clearAllListeners } from "@reduxjs/toolkit";

export const EventProgressCard = ({
  title,
  description,
  percentage,
  date,
  location,
  duration,
}) => {
  return (
    <div className="w-[30%] flex flex-col rounded-xl bg-white m-3 justify-around relative shadow-md">
      <div className="flex">
        <div className="p-3 w-[30%] rounded-full flex relative items-center justify-center pr-0.5 h-[17vh]">
          <div className="relative"
            style={{
              height: "100%",
              width: "100%",
            }}>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-center text-center text-2xl text-[#2135D9]">
            {percentage}%
          </div>
            <Circle className="relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100%]"
              percent={percentage}
              strokeColor="#2135D9"
              strokeWidth={10}
              trailColor="#bfdbfe"
              trailWidth={10}
              strokeLinecap="round"
              gapPosition="right"
            />
          </div>
        </div>
        <div className="pl-4 pr-1 flex flex-col justify-center items-left">
          <div className="text-2xl text-bold">{title}</div>
          <div className=" text-xl">{description}</div>
        </div>
      </div>
      <div className="flex h-[30%] justify-center  pb-2 px-2">
        <div className="flex  justify-around items-center px-1">
          <img src={CalendarIcon} style={{ width: "2vh", height: "2vh" }} />
          <div className="text-md text-black">
            {date?.toString().substring(0, 10)} • 
          </div>
        </div>
        <div className="flex px-2  justify-around items-center">
          <img src={LocationIcon} style={{ width: "2vh", height: "2vh" }} />
          <div className="text-md text-black">{location} • </div>
        </div>
        <div className="flex px-2  justify-around items-center">
          <img src={ClockIcon} style={{ width: "2vh", height: "2vh" }} />
          <div className="text-md text-black">{duration}h</div>
        </div>
      </div>
    </div>
  );
};
