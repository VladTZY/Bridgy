import { Circle } from "rc-progress";

export const SchoolProgressCard = ({
  color,
  title,
  total,
  description,
  percentage,
}) => {
  return (
    <div className="w-[100%] flex flex-row overscroll-x-hidden rounded-xl bg-white m-3 justify-around">
      <div className="mt-6 flex flex-col space-y-2">
        <div className="text-2xl text-bold">{title}</div>
        <div className="text-3xl">{total}</div>
        <div className="pt-6 text-xl text-gray-500">{description}</div>
      </div>
      <div className=" my-4 w-[30%] rounded-full flex relative items-center justify-center">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-center text-center text-xl" style={{ color: color }}>
          {percentage}%
        </div>
        <div
          style={{
            height: "100%",
            width: "100%",
          }}
        >
          <Circle className="relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100%]"
            percent={percentage}
            strokeColor={color}
            strokeWidth={10}
            trailColor="#d3d3d3"
            trailWidth={10}
            strokeLinecap="round"
            gapPosition="right"
          />
        </div>
      </div>
    </div>
  );
};
