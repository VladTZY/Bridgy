import { Box, Typography } from "@mui/material";

export const StudentAcceptedMoreInfo = ({ eventId }) => {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography
        variant="h5"
        component="div"
        sx={{ textAlign: "center", mb: 2 }}
      >
        You have been accepted to this event, make sure to show up!
      </Typography>
    </Box>
  );
};
