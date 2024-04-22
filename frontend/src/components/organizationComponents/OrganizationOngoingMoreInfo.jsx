import { MarkAttendanceModal } from "./MarkAttendanceModal";
import { EndEventModal } from "./EndEventModal";

import axiosInstance from "../../utils/axiosInstance";
import { useState, useEffect } from "react";
import { Box, Button, Typography, Grid } from "@mui/material";

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
    <Box>
      <Grid container sx={{ justifyContent: "center", mb: 4 }} spacing={20}>
        <Grid item xs={10} lg={5}>
          <Button
            onClick={() => setAttendanceModal(true)}
            sx={{
              py: { lg: 3, xl: 4 },
              width: 1,
              bgcolor: "white.main",
              borderRadius: 15,
              borderColor: "blue.main",
              border: 2,
              textTransform: "none",
              color: "blue.main",
              ":hover": { bgcolor: "blue.main", color: "white.main" },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: {
                  lg: "26px",
                  xl: "36px",
                },
              }}
            >
              Mark attendance
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={10} lg={5}>
          <Button
            onClick={() => setEndModal(true)}
            sx={{
              py: { lg: 3, xl: 4 },
              width: 1,
              bgcolor: "white.main",
              borderRadius: 15,
              borderColor: "blue.main",
              border: 2,
              textTransform: "none",
              color: "blue.main",
              ":hover": { bgcolor: "blue.main", color: "white.main" },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: {
                  lg: "26px",
                  xl: "36px",
                },
              }}
            >
              Finish Event
            </Typography>
          </Button>
        </Grid>
      </Grid>
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
    </Box>
  );
};
