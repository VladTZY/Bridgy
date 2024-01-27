import { NotificationsList } from "../../components/NotificationsList";

export const NotificationsPage = () => {
  return (
    <div className="h-full bg-gray-100">
      <div className="bg-white m-5 rounded-3xl w-[95%] justify-between items-center">
        <NotificationsList />
      </div>
    </div>
  );
};
