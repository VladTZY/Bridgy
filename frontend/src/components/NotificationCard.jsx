import accepted from "../../Bridgy_Assets/icon/arrow green.svg";
import rejected from "../../Bridgy_Assets/icon/arrow red.svg";

export const NotificationCard = ({ type, message, studentId, eventId }) => {
  return (
    <div>
      <div className="mx-12 my-1 px-6 py-2 rounded-md w-[94%] bg-white flex justify-between transform transition duration-200">
        <div className="flex space-x-4 items-center">
          {
            {
              ACCEPTED: <img src={accepted} style={{ height: "50%" }} />,
              REJECTED: <img src={rejected} style={{ height: "50%" }} />,
            }[type]
          }
          <div className="py-4 text-4xl font-semibold">{type}</div>
          <div className="text-2xl">{message}</div>
        </div>
      </div>
    </div>
  );
};
