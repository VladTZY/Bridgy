import accepted from "../../Bridgy_Assets/icon/arrow green.svg";
import rejected from "../../Bridgy_Assets/icon/arrow red.svg";

export const NotificationCard = ({ type, message, studentId, eventId }) => {
  return (
    <div>
      <div className=" py-2 rounded-xl w-[100%] px-4 bg-white flex justify-between transform transition duration-200">
        <div className="flex flex-col lg:flex-row lg:space-x-4 items-center justify-between ">
          {
            {
              ACCEPTED: <img src={accepted} style={{ width: "50%" }} />,
              REJECTED: <img src={rejected} style={{ width: "50%" }} />,
            }[type]
          }
          <div className="py-4 text-xl font-bold">{type}</div>
          <div className="text-l text-center">{message}</div>
        </div>
      </div>
    </div>
  );
};
