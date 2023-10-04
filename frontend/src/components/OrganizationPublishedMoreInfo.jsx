import { AcceptedStudentsTable } from "./AcceptedStudentsTable";
import { RequestedStudentsTable } from "./RequestedStudentsTable";

import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

export const OrganizationPublishedMoreInfo = ({ eventId }) => {
  const jwt = useSelector((state) => state.auth.jwt);
  const [acceptedStudents, setAcceptedStudents] = useState([]);
  const [requestedStudents, setRequestedStudents] = useState([]);

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

    axios
      .get(
        `http://localhost:4004/api/organization/requested_students?eventId=${eventId}`,
        {
          headers: {
            Authorization: `BEARER ${jwt}`,
          },
        }
      )
      .then((res) => setRequestedStudents(res.data))
      .catch((error) => console.log(error));
  }, [jwt, eventId]);

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
