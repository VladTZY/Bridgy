import { AcceptedStudentsTable } from "./AcceptedStudentsTable";
import { RequestedStudentsTable } from "./RequestedStudentsTable";

import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

export const OrganizationPublishedMoreInfo = ({ eventId }) => {
  const [acceptedStudents, setAcceptedStudents] = useState([]);
  const [requestedStudents, setRequestedStudents] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${
          import.meta.env.VITE_API_URL
        }/organization/joined_students?eventId=${eventId}`,
        { withCredentials: true }
      )
      .then((res) => setAcceptedStudents(res.data))
      .catch((error) => console.log(error));

    axios
      .get(
        `${
          import.meta.env.VITE_API_URL
        }/organization/requested_students?eventId=${eventId}`,
        { withCredentials: true }
      )
      .then((res) => setRequestedStudents(res.data))
      .catch((error) => console.log(error));
  }, [eventId]);

  return (
    <div className="mt-5">
      <div className="text-3xl font-extrabold">
        This event has not started yet!
      </div>
      <div className="mt-10">
        <h1 className="text-4xl font-semibold">Accepted Students</h1>
        <AcceptedStudentsTable eventId={eventId} students={acceptedStudents} />
      </div>
      <div className="mt-10">
        <h1 className="text-4xl font-semibold">Requested Students</h1>
        <RequestedStudentsTable
          eventId={eventId}
          students={requestedStudents}
          setRequestedStudents={setRequestedStudents}
          acceptedStudents={acceptedStudents}
          setAcceptedStudents={setAcceptedStudents}
        />
      </div>
    </div>
  );
};
