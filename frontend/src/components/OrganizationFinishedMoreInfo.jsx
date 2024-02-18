import { AcceptedStudentsTable } from "./AcceptedStudentsTable";
import axios from "axios";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

export const OrganizationFinishedMoreInfo = ({ eventId }) => {
  const [finishedStudents, setFinishedStudents] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${
          import.meta.env.VITE_API_URL
        }/organization/finished_students?eventId=${eventId}`,
        { withCredentials: true }
      )
      .then((res) => setFinishedStudents(res.data))
      .catch((error) => console.log(error));
  }, [eventId]);

  return (
    <div className="mt-5">
      <div className="text-xl font-extrabold text-center  ">This event is now finished!</div>
      <div className="text-center">
        <h1 className="text-xl font-semibold">Who showed up?</h1>
        <AcceptedStudentsTable eventId={eventId} students={finishedStudents} />
      </div>
    </div>
  );
};
