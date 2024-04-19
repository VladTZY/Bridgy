import axiosInstance from "../../utils/axiosInstance";
import { useState, useEffect } from "react";
import { RequestsTable } from "./RequestsTable";
import { Box, Typography } from "@mui/material";
import { StudentsTable } from "./StudentsTable";

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
    <Box>
      <Typography
        variant="h5"
        component="div"
        sx={{ textAlign: "center", mb: 2 }}
      >
        {" "}
        This event has not started yet!
      </Typography>
      <StudentsTable students={acceptedStudents} title={"Accepted Students"} />
      <Box sx={{ mb: 4 }}></Box>
      <RequestsTable
        eventId={eventId}
        students={requestedStudents}
        setRequestedStudents={setRequestedStudents}
        acceptedStudents={acceptedStudents}
        setAcceptedStudents={setAcceptedStudents}
      />
    </Box>
  );
};
