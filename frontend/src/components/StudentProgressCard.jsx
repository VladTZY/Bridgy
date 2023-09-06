import { Circle } from "rc-progress";

export const StudentProgressCard = ({
  color,
  title,
  total,
  update,
  percentage,
}) => {
  return (
    <div className="w-[25%] flex rounded-3xl bg-white m-3 justify-between">
      <div className="mt-6 flex flex-col space-y-4">
        <div className="ml-6 text-2xl text-bold">{title}</div>
        <div className="ml-6 text-5xl">{total}</div>
        <div className="mt-6 ml-6 text-xl" style={{ color: color }}>
          {update}
        </div>
      </div>
      <div
        className="mx-5 my-8 w-[30%] rounded-full outline outline-2 outline-offset-8 flex relative items-center justify-center"
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
            strokeLinecap="square"
            gapPosition="right"
          />
        </div>
      </div>
    </div>
  );
};
