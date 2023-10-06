import { AcceptedStudentsTable } from "./AcceptedStudentsTable";
import axios from "axios";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

export const OrganizationFinishedMoreInfo = ({ eventId }) => {
  const jwt = useSelector((state) => state.auth.jwt);
  const [finishedStudents, setFinishedStudents] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${
          import.meta.env.VITE_API_URL
        }/organization/finished_students?eventId=${eventId}`,
        {
          headers: {
            Authorization: `BEARER ${jwt}`,
          },
        }
      )
      .then((res) => setFinishedStudents(res.data))
      .catch((error) => console.log(error));
  }, [jwt, eventId]);

  return (
    <div className="mt-5">
      <div className="text-3xl font-extrabold">This event is now finished!</div>
      <div className="mt-10">
        <h1 className="text-4xl font-semibold">Who showed up?</h1>
        <AcceptedStudentsTable eventId={eventId} students={finishedStudents} />
      </div>
    </div>
  );
};
