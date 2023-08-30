import { AcceptedStudentsTable } from "./AcceptedStudentsTable";
import { RequestedStudentsTable } from "./RequestedStudentsTable";

export const OrganizationMoreInfo = ({ eventId }) => {
  return (
    <div className="mt-10">
      <button className="w-[30%] border py-5 text-[#2135D9] border-[#2135D9] rounded-full hover:bg-[#2135D9] hover:text-white text-xl">
        Mark Attendance
      </button>
      <div className="mt-10">
        <h1 className="text-4xl font-semibold">Accepted Students</h1>
        <AcceptedStudentsTable eventId={eventId} />
      </div>
      <div className="mt-10">
        <h1 className="text-4xl font-semibold">Requested Students</h1>
        <RequestedStudentsTable eventId={eventId} />
      </div>
    </div>
  );
};
