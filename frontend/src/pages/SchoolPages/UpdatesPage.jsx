import { EventProgressCard } from "../../components/EventProgressCard";
import { NotificationsList } from "../../components/NotificationsList";

export const UpdatesPage = () => {
  return (
    <div className=" bg-gray-100 flex flex-col ml-[15vw] w-[85vw] px-4 ">
      <h1 className="text-2xl font-semibold my-6">Student Projects</h1>
      <div className="flex flex-wrap justify-center">
        <EventProgressCard
          title={"Food Distribution Event"}
          description={"Amet consecteur"}
          percentage={50}
          date={"02/01/2023"}
          location={"UK"}
          duration={2}
        />
        <EventProgressCard
          title={"Food Distribution Event"}
          description={"Amet consecteur"}
          percentage={50}
          date={"02/01/2023"}
          location={"UK"}
          duration={2}
        />
        <EventProgressCard
          title={"Food Distribution Event"}
          description={"Amet consecteur"}
          percentage={50}
          date={"02/01/2023"}
          location={"UK"}
          duration={2}
        />
      </div>

      <NotificationsList className="w-[85vw] px-4" />
    </div>
  );
};
