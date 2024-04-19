import { useState, useEffect } from "react";
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

export const EndEventModal = ({ setEndModal, students, eventId }) => {
  const [presentArray, setPresentArray] = useState(
    new Array(students.length).fill(false)
  );

  useEffect(() => {
    const newArray = students.map((student) => {
      if (student.status == "MARKED") return true;
      return false;
    });

    setPresentArray(newArray);
  }, [students]);

  const handleChange = (index) => {
    const updatedValues = presentArray.map((val, i) => {
      if (i == index) {
        return !val;
      } else return val;
    });

    setPresentArray(updatedValues);
  };

  const EndEvent = async () => {
    const finalArray = presentArray.map((value, index) => {
      if (value)
        return {
          userId: students[index].user.id,
          status: "FINISHED",
        };

      return {
        userId: students[index].user.id,
        status: "MISSING",
      };
    });

    axiosInstance
      .post(`/organization/finish_event?eventId=${eventId}`, finalArray)
      .then(setEndModal(false));
  };

  return (
    <Modal
      open={true}
      onClose={() => setEndModal(false)}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box>
        <Box sx={{ ...style, width: 400 }}>
          {" "}
          <Typography fontWeight="bold" variant="h5">
            End Event
          </Typography>
          <Divider color="black" sx={{ mt: 2 }} />
          <Typography sx={{ mt: 2 }} variant="h6">
            Who participated?
          </Typography>
          {presentArray.length != 0 && (
            <>
              {students.map((student, index) => {
                return (
                  <Grid container sx={{ justifyContent: "space-between" }}>
                    <Typography variant="h7" sx={{ alignSelf: "center" }}>
                      {student.user.username}
                    </Typography>
                    <Checkbox
                      defaultChecked={student.status == "MARKED"}
                      onChange={(e) => handleChange(index)}
                    />
                  </Grid>
                );
              })}
            </>
          )}
          <Button
            onClick={() => EndEvent()}
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
            End Event
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
