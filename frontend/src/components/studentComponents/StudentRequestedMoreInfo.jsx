import { Box, Typography } from "@mui/material";

export const StudentRequestedMoreInfo = ({ eventId }) => {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography
        variant="h5"
        component="div"
        sx={{ textAlign: "center", mb: 2 }}
      >
        You have made a request for this event, wait for the organization to
        accept you!
      </Typography>
    </Box>
  );
};
