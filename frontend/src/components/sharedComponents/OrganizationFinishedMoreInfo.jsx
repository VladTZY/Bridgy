import axiosInstance from "../../utils/axiosInstance";
import { useState, useEffect } from "react";
import { StudentsTable } from "./StudentsTable";
import { Box, Typography } from "@mui/material";

export const OrganizationFinishedMoreInfo = ({ eventId }) => {
  const [finishedStudents, setFinishedStudents] = useState([]);

  useEffect(() => {
    axiosInstance
      .get(`/organization/finished_students?eventId=${eventId}`)
      .then((res) => setFinishedStudents(res.data))
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
        This event is now finished!
      </Typography>
      <StudentsTable
        title={"Students that showed up"}
        students={finishedStudents}
      />
    </Box>
  );
};
