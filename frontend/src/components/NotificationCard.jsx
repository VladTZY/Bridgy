import accepted from "../../Bridgy_Assets/icon/arrow green.svg";
import rejected from "../../Bridgy_Assets/icon/arrow red.svg";

export const NotificationCard = ({ type, message, studentId, eventId }) => {
  return (
    <div>
      <div className=" py-2 rounded-xl w-[100%] px-4 bg-white items-center flex flex-col lg:flex-row justify-center lg:justify-between transform transition duration-200">
        <div className="flex flex-col lg:flex-row lg:space-x-4 items-center justify-between ">
          {
            {
              ACCEPTED: <img src={accepted} style={{ width: "20%" }} />,
              REJECTED: <img src={rejected} style={{ width: "30%" }} />,
            }[type]
          }
          <div className="lg:py-4 text-xl 2xl:text-2xl font-bold">{type}</div>
        </div>
        <div className="text-l 2xl:text-xl text-center items-center justify-center">{message}</div>
      </div>
    </div>
  );
};
