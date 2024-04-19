import { Box, Typography } from "@mui/material";

export const StudentOngoingMoreInfo = () => {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography
        variant="h5"
        component="div"
        sx={{ textAlign: "center", mb: 2 }}
      >
        The event has started, make sure you show up!
      </Typography>
    </Box>
  );
};
