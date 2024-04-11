import { useState } from "react";
import axiosInstance from "../../utils/axiosInstance";

import { Box, Button, Stack, TextField, Typography } from "@mui/material";

export const FeedbackCard = ({ id, title, feedback }) => {
  const [myFeedback, setMyFeedback] = useState(feedback);

  const handleSave = () => {
    axiosInstance
      .post(`/student/post_feedback/${id}`, { feedback: myFeedback })
      .catch((error) => console.log(error));
  };

  const handleCancel = () => {
    setMyFeedback(feedback);
  };

  return (
    <Box
      sx={{ bgcolor: "white.main", borderRadius: 6, height: 1, boxShadow: 2 }}
    >
      <Box
        sx={{
          height: 1,
          py: 2,
          px: 3,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h5"
          fontWeight={700}
          sx={{
            fontSize: {
              lg: "26px",
              xl: "36px",
            },
          }}
        >
          {title}
        </Typography>
        <TextField
          multiline
          placeholder="Tell us about your experience during this event.."
          sx={{ width: 1, height: 1, mt: 2, borderRadius: 4 }}
          inputProps={{
            style: { height: "19vh" },
          }}
          value={myFeedback ? myFeedback : ""}
          onChange={(e) => setMyFeedback(e.target.value)}
        ></TextField>
        <Stack direction="row">
          <Button
            variant="contained"
            sx={{
              bgcolor: "blue.light",
              color: "blue.contrastText",
              px: 3,
              py: 1,
              my: 2,
              fontSize: {
                lg: "16px",
                xl: "21px",
              },
              borderRadius: 6,
              textTransform: "none",
              ":hover": {
                bgcolor: "blue.main",
              },
            }}
            onClick={() => handleSave()}
          >
            Save
          </Button>

          <Button
            variant="contained"
            sx={{
              bgcolor: "white.main",
              color: "blue.light",
              px: 3,
              py: 1,
              my: 2,
              ml: 2,
              fontSize: {
                lg: "16px",
                xl: "21px",
              },
              borderRadius: 6,
              textTransform: "none",
              ":hover": {
                bgcolor: "blue.light",
                color: "blue.contrastText",
              },
            }}
            onClick={() => handleCancel()}
          >
            Cancel
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};
