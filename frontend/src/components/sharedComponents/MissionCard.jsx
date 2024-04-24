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
  datetime,
  location,
  duration,
}) => {
  return (
    <Card
      sx={{
        maxWidth: 1,
        bgcolor: "secondary.main",
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
        <Typography
          color="gray"
          align="center"
          sx={{
            fontSize: {
              lg: "16px",
              xl: "18px",
            },
          }}
        >
          {dateToStr(datetime)} •{" "}
          {location.city == "" ? "Remote" : `${location.city}`} • {duration}{" "}
          hours
        </Typography>
      </Box>
      <CardContent>
        <Typography
          variant="h6"
          color="primary.contrastText"
          fontWeight="bold"
          noWrap
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
      </CardContent>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 1,
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
