import { EventProgressCard } from "../../components/EventProgressCard";

export const UpdatesPage = () => {
  return (
    <div className="min-h-full bg-gray-100 flex flex-col">
      <h1 className="text-4xl font-semibold m-10">Student Projects</h1>
      <div className="mx-6 flex flex-wrap">
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
    </div>
  );
};
