import { AcceptedStudentsTable } from "./AcceptedStudentsTable";
import { EndEventModal } from "./EndEventModal";
import { MarkAttendanceModal } from "./MarkAttendanceModal";

import axiosInstance from "../utils/axiosInstance";
import { useState, useEffect } from "react";

export const OrganizationOngoingMoreInfo = ({ eventId }) => {
  const [acceptedStudents, setAcceptedStudents] = useState([]);
  const [endModal, setEndModal] = useState(false);
  const [attendanceModal, setAttendanceModal] = useState(false);

  useEffect(() => {
    axiosInstance
      .get(`/organization/joined_students?eventId=${eventId}`)
      .then((res) => setAcceptedStudents(res.data))
      .catch((error) => console.log(error));
  }, [eventId]);

  return (
    <div className="mt-5">
      <div className="flex justify-evenly px-2">
        <button
          onClick={() => setAttendanceModal(true)}
          className="w-[50%] border py-5 text-[#2135D9] border-[#2135D9] rounded-full hover:bg-[#2135D9] hover:text-white text-l lg:text-xl"
        >
          Mark Attendance
        </button>
        <button
          onClick={() => setEndModal(true)}
          className="w-[50%] border py-5 text-[#2135D9] border-[#2135D9] rounded-full hover:bg-[#2135D9] hover:text-white text-l lg:text-xl"
        >
          Finish Event
        </button>
      </div>
      <div className="mt-10">
        <h1 className="text-4xl font-semibold">Participating Students</h1>
        <AcceptedStudentsTable eventId={eventId} students={acceptedStudents} />
      </div>

      {endModal ? (
        <EndEventModal
          setEndModal={setEndModal}
          students={acceptedStudents}
          eventId={eventId}
        />
      ) : null}

      {attendanceModal ? (
        <MarkAttendanceModal
          setAttendanceModal={setAttendanceModal}
          students={acceptedStudents}
          setStudents={setAcceptedStudents}
          eventId={eventId}
        />
      ) : null}
    </div>
  );
};
