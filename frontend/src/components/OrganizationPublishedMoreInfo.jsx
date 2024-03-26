import { AcceptedStudentsTable } from "./AcceptedStudentsTable";
import { RequestedStudentsTable } from "./RequestedStudentsTable";

import axiosInstance from "../utils/axiosInstance";
import { useState, useEffect } from "react";

export const OrganizationPublishedMoreInfo = ({ eventId }) => {
  const [acceptedStudents, setAcceptedStudents] = useState([]);
  const [requestedStudents, setRequestedStudents] = useState([]);

  useEffect(() => {
    axiosInstance
      .get(`/organization/joined_students?eventId=${eventId}`)
      .then((res) => setAcceptedStudents(res.data))
      .catch((error) => console.log(error));

    axiosInstance
      .get(`/organization/requested_students?eventId=${eventId}`)
      .then((res) => setRequestedStudents(res.data))
      .catch((error) => console.log(error));
  }, [eventId]);

  return (
    <div className="mt-5">
      <div className="text-xl font-bold text-center">
        This event has not started yet!
      </div>
      <div className="mt-5">
        <h1 className="text-xl font-semibold">Accepted Students</h1>
        <AcceptedStudentsTable eventId={eventId} students={acceptedStudents} />
      </div>
      <div className="mt-5">
        <h1 className="text-xl font-semibold">Requested Students</h1>
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
