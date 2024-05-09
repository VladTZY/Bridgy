import { Box, Icon, Typography } from "@mui/material";

export const InfoCard = ({ title, text, icon }) => {
  return (
    <Box
      sx={{
        bgcolor: "landing",
        borderRadius: 6,
        p: 2,
      }}
    >
      <Typography
        variant="h5"
        textAlign="center"
        fontWeight="bold"
        sx={{
          mb: 2,
          animation: "$pulse 2s infinite",
          backgroundImage:
            "linear-gradient(to right, #3b82f6, #1e3a8a, #60a5fa)",
          backgroundSize: "200% 100%",
          color: "transparent",
          backgroundClip: "text",
        }}
      >
        {title}
      </Typography>
      <Typography variant="h6" textAlign="center">
        {text}
      </Typography>
    </Box>
  );
};
