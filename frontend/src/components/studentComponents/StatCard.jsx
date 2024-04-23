import { Box, Typography } from "@mui/material";

export const StatCard = ({ title, total }) => {
  return (
    <Box sx={{ backgroundColor: "blue.light", p: 2, borderRadius: 6 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        color="white.main"
        sx={{ ml: 2 }}
      >
        {total}
      </Typography>
      <Typography variant="h6" color="white.main" sx={{ ml: 2 }}>
        {title}
      </Typography>
    </Box>
  );
};
