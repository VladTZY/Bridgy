import { Circle } from "rc-progress";

export const SchoolProgressCard = ({
  color,
  title,
  total,
  description,
  percentage,
}) => {
  return (
    <div className="w-[33%] flex rounded-2xl bg-white m-3 justify-around">
      <div className="mt-6 flex flex-col space-y-2">
        <div className="text-2xl text-bold">{title}</div>
        <div className="text-5xl">{total}</div>
        <div className="pt-6 text-xl text-gray-500">{description}</div>
      </div>
      <div className="mx-5 my-8 w-[30%] rounded-full flex relative items-center justify-center">
        <div className="absolute text-center text-3xl" style={{ color: color }}>
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
            strokeColor={color}
            strokeWidth={15}
            trailColor="#d3d3d3"
            trailWidth={15}
            strokeLinecap="round"
            gapPosition="right"
          />
        </div>
      </div>
    </div>
  );
};
