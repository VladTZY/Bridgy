import { AcceptedStudentsTable } from "./AcceptedStudentsTable";
import { EndEventModal } from "./EndEventModal";
import { MarkAttendanceModal } from "./MarkAttendanceModal";

import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

export const OrganizationFinishedMoreInfo = ({ eventId }) => {
  const jwt = useSelector((state) => state.auth.jwt);
  const [acceptedStudents, setAcceptedStudents] = useState([]);
  const [requestedStudents, setRequestedStudents] = useState([]);
  const [endModal, setEndModal] = useState(false);
  const [attendanceModal, setAttendanceModal] = useState(false);

  useEffect(() => {
    axios
      .get(
        `http://localhost:4004/api/organization/joined_students?eventId=${eventId}`,
        {
          headers: {
            Authorization: `BEARER ${jwt}`,
          },
        }
      )
      .then((res) => setAcceptedStudents(res.data))
      .catch((error) => console.log(error));
  }, [jwt, eventId]);

  return (
    <div className="mt-5">
      <div className="text-3xl font-extrabold">This event is now finished!</div>
      <div className="mt-10">
        <h1 className="text-4xl font-semibold">Who showed up?</h1>
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
