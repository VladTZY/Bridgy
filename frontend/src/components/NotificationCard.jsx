import accepted from "../../Bridgy_Assets/icon/arrow green.svg";
import rejected from "../../Bridgy_Assets/icon/arrow red.svg";

export const NotificationCard = ({ type, message, studentId, eventId }) => {
  return (
    <div>
      <div className="mx-5 px-10 py-2 rounded-xl w-[95%] bg-white flex justify-between transform transition duration-200">
        <div className="flex space-x-4 items-center justify-between w-[100%]">
          {
            {
              ACCEPTED: <img src={accepted} style={{ height: "50%" }} />,
              REJECTED: <img src={rejected} style={{ height: "50%" }} />,
            }[type]
          }
          <div className="py-4 text-xl font-bold">{type}</div>
          <div className="text-l">{message}</div>
        </div>
      </div>
    </div>
  );
};
