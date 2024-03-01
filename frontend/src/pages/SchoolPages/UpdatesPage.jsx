import { EventProgressCard } from "../../components/EventProgressCard";
import { NotificationsList } from "../../components/NotificationsList";

export const UpdatesPage = () => {
  return (
    <div className=" ml-[15vw] ">
      <h1 className="text-2xl font-semibold my-6 px-4">Student Projects</h1>
      <div className=" md:flex w-[85vw] bg-gray-100 flex flex-col px- md:p-4 overflow-x-scroll ">
          <div className=" hidden md:flex md:flex-row overflow-x-scroll  justify-center items-center w-[100%]">
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

          <div className=" w-[85vw] bg-gray-100 flex flex-col  md:p-4 overflow-x-scroll overscroll-contain md:hidden"></div>      
          <div className="  flex flex-row overflow-x-scroll  justify-center items-center w-[300%] md:hidden"> 
            <div className="flex flex-row overflow-x-scroll  justify-center items-center w-[100%]">
            <EventProgressCard
          title={"Food Distribution Event"}
          description={"Amet consecteur"}
          percentage={50}
          date={"02/01/2023"}
          location={"UK"}
          duration={2}
        />
            </div>
            <div className="flex flex-row overflow-x-scroll  justify-center items-center w-[100%]">
            <EventProgressCard
          title={"Food Distribution Event"}
          description={"Amet consecteur"}
          percentage={50}
          date={"02/01/2023"}
          location={"UK"}
          duration={2}
        />
            </div>
            <div className="flex flex-row overflow-x-scroll  justify-center items-center w-[100%]">
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
        </div>
      <NotificationsList className="w-[85vw] px-4" />
    </div>
  );
};
