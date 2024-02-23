import { EventProgressCard } from "../../components/EventProgressCard";
import { NotificationsList } from "../../components/NotificationsList";

export const UpdatesPage = () => {
  return (
    <div className="min-h-full bg-gray-100 flex flex-col ml-[15vw]">
      <h1 className="text-2xl font-semibold ml-7 my-6">Student Projects</h1>
      <div className="flex flex-wrap  pl-5 justify-center">
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

      <NotificationsList />
    </div>
  );
};
