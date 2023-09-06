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
        className="m-5 w-[30%] rounded-full outline outline-2 outline-offset-4 flex relative items-center justify-center"
        style={{ outlineColor: color }}
      >
        <div className="absolute text-center text-3xl">{percentage}%</div>
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
            trailColor="white"
            trailWidth={15}
            strokeLinecap="round"
            gapPosition="right"
          />
        </div>
      </div>
    </div>
  );
};
