import React from "react";
import { Box, Toolbar, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { Link } from "react-router-dom";

export const BarCard = ({ id, title, description, location }) => {
  return (
    <Link to={`/opportunity/${id}`}>
      <Box
        sx={{
          transition: "all .5s ease",
          mx: 4,
          p: 1,
          borderBottom: 1,
          borderColor: "gray",
          ":hover": {
            boxShadow: 5,
            borderRadius: 5,
            border: 0,
            my: 2,
          },
        }}
      >
        <Toolbar disableGutters>
          <CircleIcon sx={{ color: "green.light" }} />
          <Typography
            variant="h5"
            fontWeight="bold"
            noWrap
            sx={{
              width: 1 / 3,
              letterSpacing: 1,
              ml: 2,
              fontSize: {
                lg: "16px",
                xl: "21px",
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
