import axiosInstance from "../../utils/axiosInstance";
import {
  Modal,
  Box,
  Typography,
  Divider,
  TextField,
  Checkbox,
  Grid,
  Button,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white.main",
  borderRadius: 6,
  boxShadow: 24,
  p: 4,
};

export const MarkAttendanceModal = ({
  setAttendanceModal,
  students,
  setStudents,
  eventId,
}) => {
  const handleChange = (index, userId) => {
    axiosInstance
      .post(
        `/organization/check_student?userId=${userId}&eventId=${eventId}`,
        {}
      )
      .then((res) => {
        const newArray = students.map((student, indexNow) => {
          if (indexNow != index) return student;

          if (student.status == "JOINED") student.status = "MARKED";
          else student.status = "JOINED";

          return student;
        });

        setStudents(newArray);
      });
  };
  return (
    <Modal
      open={true}
      onClose={() => setAttendanceModal(false)}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box>
        <Box sx={{ ...style, width: 400 }}>
          {" "}
          <Typography fontWeight="bold" variant="h5">
            Mark Attendance
          </Typography>
          <Divider color="black" sx={{ mt: 2 }} />
          <Typography sx={{ mt: 2 }} variant="h6">
            Check the students who showed up
          </Typography>
          <>
            {students.map((student, index) => {
              return (
                <Grid container sx={{ justifyContent: "space-between" }}>
                  <Typography variant="h7" sx={{ alignSelf: "center" }}>
                    {student.user.username}
                  </Typography>
                  <Checkbox
                    defaultChecked={student.status == "MARKED"}
                    onChange={(e) => handleChange(index, student.user.id)}
                  />
                </Grid>
              );
            })}
          </>
          <Button
            onClick={() => setAttendanceModal(false)}
            variant="contained"
            sx={{
              bgcolor: "blue.light",
              color: "blue.contrastText",
              px: 4,
              py: 2,
              mt: 2,
              width: 1,
              fontSize: "16px",
              borderRadius: 8,
              ":hover": {
                bgcolor: "blue.main",
              },
            }}
          >
            Save attendance
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
