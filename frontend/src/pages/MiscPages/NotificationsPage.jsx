import { NotificationsList } from "../../components/NotificationsList";

export const NotificationsPage = () => {
  return (
    <div className=" bg-gray-100 ml-[15vw] w-[85vw]">
      <div className="bg-white m-5 rounded-3xl justify-between items-center">
        <NotificationsList />
      </div>
    </div>
  );
};
