import { Link } from "react-router-dom";
import { Box, Toolbar, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

export const BarCard2 = ({ id, title, description, location, icon }) => {
  return (
    <Link to={`/opportunity/${id}`}>
      <Box
        sx={{
          bgcolor: "white.main",
          borderRadius: 6,
          mb: 2,
          ":hover": {
            boxShadow: 4,
          },
        }}
      >
        <Toolbar>
          {icon}
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{
              width: 1 / 3,
              letterSpacing: 1,
              ml: 1,
              fontSize: {
                lg: "21px",
                xl: "26px",
              },
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="h7"
            color="gray"
            sx={{
              width: 1 / 3,
              ml: 2,
              mr: 4,
              display: "-webkit-box",
              overflow: "hidden",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 1,
            }}
          >
            {description}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              width: 1 / 3,
            }}
          >
            <Typography variatn="h6" fontWeight="bold">
              {location.city == ""
                ? "Remote"
                : `${location.city}, ${location.country}`}
            </Typography>
          </Box>
        </Toolbar>
      </Box>
    </Link>
  );
};
