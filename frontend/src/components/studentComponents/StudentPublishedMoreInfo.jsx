import { Box, Typography, Button, Grid } from "@mui/material";
import axiosInstance from "../../utils/axiosInstance";
import { useNavigate } from "react-router-dom";

export const StudentPublishedMoreInfo = ({ eventId, placesLeft }) => {
  const navigate = useNavigate();

  const joinEvent = () => {
    axiosInstance
      .post(`/student/join_event/${eventId}`, {})
      .then((res) => {
        navigate("/student/dashboard");
      })
      .catch((error) => console.log(error));
  };

  return (
    <Box>
      <Grid container spacing={10} sx={{ justifyContent: "center", mb: 4 }}>
        <Grid item>
          <Button
            sx={{
              px: 20,
              py: 3,
              borderRadius: 14,
              color: "white.main",
              bgcolor: "blue.light",
              textTransform: "none",
              ":hover": { bgcolor: "blue.main" },
            }}
            onClick={() => joinEvent()}
          >
            <Typography variant="h4">Join now!</Typography>
          </Button>
        </Grid>
        <Grid item sx={{ alignSelf: "center" }}>
          <Typography variant="h4">{placesLeft} places left!</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
