import { Circle } from "rc-progress";

export const StudentProgressCard = ({
  color,
  title,
  total,
  update,
  percentage,
}) => {
  return (
    <div className="flex-1 rounded-3xl p-3 bg-white shadow w-[100%] mx-2">
      <div className="flex justify-between ">
        <div className="p-3 flex flex-col space-y-4">
          <div className="sm:text-lg md:text-xl lg:text-xl text-bold">
            {title}
          </div>
          <div className="sm:text-3xl md:text-4xl lg:text-xl">{total}</div>
        </div>
        <div
          className="m-3 sm:w-16 md:w-24 lg:w-24 rounded-full outline outline-2 outline-offset-8 flex relative items-center justify-center"
          style={{ outlineColor: color }}
        >
          <div className="absolute text-center text-l">{percentage}%</div>
          <div className="w-24">
            <Circle
              percent={percentage}
              strokeColor={color}
              strokeWidth={10}
              trailColor="white"
              trailWidth={10}
              strokeLinecap="square"
              gapPosition="right"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
