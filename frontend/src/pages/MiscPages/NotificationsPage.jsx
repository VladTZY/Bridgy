import { NotificationsList } from "../../components/NotificationsList";

export const NotificationsPage = () => {
  return (
    <div className=" bg-gray-100 ml-[15vw] w-[85vw] pb-10">
      <div className="bg-white my-5 mx-2 xl:mx-3 rounded-3xl justify-between items-center ">
        <NotificationsList />
      </div>
    </div>
  );
};
