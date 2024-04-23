import { Box, LinearProgress, Typography } from "@mui/material";

export const LoadCard = ({ title, progress, color }) => {
  return (
    <Box>
      <Typography variant="h8" fontWeight="bold" color="gray">
        {title}
      </Typography>
      <LinearProgress
        variant="determinate"
        value={progress}
        color={color}
        sx={{ height: 20, borderRadius: 5 }}
      />
    </Box>
  );
};
