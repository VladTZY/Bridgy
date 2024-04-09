import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Button,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Box,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import dateToStr from "../../utils/dateToStr";

export const MissionCard = ({
  id,
  title,
  description,
  photoUrl,
  time,
  location,
  duration,
}) => {
  return (
    <Card
      sx={{
        maxWidth: 1,
        bgcolor: "primary.main",
        borderRadius: 2,
        ":hover": {
          boxShadow: 6,
        },
      }}
    >
      <CardMedia
        sx={{ pb: 2, height: "24vh" }}
        component="img"
        image={photoUrl}
      />
      <Box
        sx={{
          width: 1,
        }}
      >
        <Typography color="gray" align="center">
          {dateToStr(time)} •{" "}
          {location.city == "" ? "Remote" : `${location.city}`} • {duration}{" "}
          hours
        </Typography>
      </Box>
      <Box sx={{ mx: 2, mt: 2 }}>
        <Typography
          variant="h6"
          color="primary.contrastText"
          fontWeight="bold"
          sx={{ letterSpacing: 2 }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            height: "4vh",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {description}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 1,
          mt: 2,
        }}
      >
        <Link to={`/opportunity/${id}`}>
          <Button
            variant="contained"
            sx={{
              bgcolor: "blue.light",
              color: "blue.contrastText",
              borderRadius: 4,
              px: 3,
              textTransform: "none",
              fontSize: {
                lg: "16px",
                xl: "18px",
              },
              ":hover": {
                bgcolor: "blue.main",
              },
            }}
          >
            More info
          </Button>
        </Link>
      </Box>
    </Card>
  );
};
