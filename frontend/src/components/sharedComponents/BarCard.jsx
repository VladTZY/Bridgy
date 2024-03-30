import React from "react";
import { Box, Divider, Toolbar, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { Link } from "react-router-dom";

export const BarCard = ({ id, title, description, location }) => {
  return (
    <Link to={`/opportunity/${id}`}>
      <Box sx={{ mx: 4, p: 1 }}>
        <Toolbar disableGutters>
          <CircleIcon sx={{ color: "green" }} />
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ width: 1 / 3, letterSpacing: 1, ml: 2 }}
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
        <Divider color="gray" />
      </Box>
    </Link>
  );
};
