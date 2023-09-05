import { Circle } from "rc-progress";

export const PieChart = ({ color, title, description, update, percentage }) => {
  return (
    <div className="w-[33%] flex rounded-xl bg-white m-3 justify-between">
      <div className="mt-6 flex flex-col space-y-4">
        <div className="ml-6 text-4xl text-bold">{title}</div>
        <div className="ml-6 text-xl">{description}</div>
        <div className="mt-6 ml-6 text-2xl" style={{ color: color }}>
          {update}
        </div>
      </div>
      <div
        className="rounded-full outline outline-2 outline-offset-3 flex relative items-center justify-center"
        style={{
          margin: 10,
          height: 150,
          width: 150,
          outlineColor: color,
        }}
      >
        <div className="absolute text-center text-2xl">{percentage}%</div>
        <Circle
          percent={percentage}
          strokeColor={color}
          strokeWidth={15}
          trailColor="white"
          trailWidth={15}
          strokeLinecap="round"
          gapPosition="right"
        />
      </div>
    </div>
  );
};
