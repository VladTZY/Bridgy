export const NotificationCard = ({ type, message, studentId, eventId }) => {
  return (
    <div>
      <div className="mx-12 my-1 px-6 py-2 rounded-md w-[94%] bg-white flex justify-between transform transition duration-200">
        <div className="flex space-x-4 items-center">
          <div className="py-4 text-3xl font-semibold">{type}</div>
          <div className="text-xl">{message}</div>
        </div>
      </div>
    </div>
  );
};
