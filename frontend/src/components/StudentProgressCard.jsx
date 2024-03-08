import { Circle } from "rc-progress";
import pic from "../../Bridgy_Assets/LOGO BRIDGY/fav icon/backgroundcard.png";  

export const StudentProgressCard = ({
  color,
  title,
  total,
  update,
  percentage,
}) => {
  return (
    <div className=" relative flex-1 rounded-3xl p-3 bg-white shadow w-[100%] mx-2 " >
    <div className="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center rounded-3xl" style={{backgroundImage: `url(${pic})`}}></div>
      <div className="flex justify-between bg-cover h-full "  >
        <div className="p-3 flex flex-col space-y-4">
          <div className="sm:text-lg md:text-xl lg:text-xl 2xl:text-2xl text-bold">
            {title}
          </div>
          <div className="sm:text-3xl md:text-4xl lg:text-xl 2xl:text-2xl">{total}</div>
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
