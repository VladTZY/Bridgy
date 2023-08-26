import { RequestedStudentsTable } from "./RequestedStudentsTable";

export const OrganizationViewInfo = ({ eventId }) => {
  return (
    <div className="mt-10">
      <button className="w-[30%] border py-5 text-[#2135D9] border-[#2135D9] rounded-full hover:bg-[#2135D9] hover:text-white text-xl">
        Mark Attendance
      </button>
      <RequestedStudentsTable eventId={eventId} />
    </div>
  );
};
