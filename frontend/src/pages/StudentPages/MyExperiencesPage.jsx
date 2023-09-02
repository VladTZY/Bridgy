import { WriteExperienceCard } from "../../components/WriteExperienceCard";
import { Card } from "../../components/Card";

export const MyExperiencesPage = () => {
  return (
    <div className="min-h-full bg-gray-100 flex flex-col">
      <div className="flex">
        <Card />
        <WriteExperienceCard />
      </div>
    </div>
  );
};
