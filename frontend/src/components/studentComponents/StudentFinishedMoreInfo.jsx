import { Box, Typography } from "@mui/material";

export const StudentFinishedMoreInfo = ({ eventId }) => {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography
        variant="h5"
        component="div"
        sx={{ textAlign: "center", mb: 2 }}
      >
        This event is now finished!
      </Typography>
    </Box>
  );
};
