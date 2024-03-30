import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Button,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Stack,
  Toolbar,
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
        maxWidth: 1 / 4.2,
        mx: 2,
        bgcolor: "primary.main",
        borderRadius: 2,
      }}
    >
      <CardMedia sx={{ pb: 3 }} component="img" height="190" image={photoUrl} />
      <Stack direction="row">
        <Stack
          direction="row"
          sx={{
            border: 1,
            borderColor: "gray",
            borderRadius: "4px",
            width: "40%",
            p: 1,
            mx: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CalendarMonthIcon sx={{ color: "blue.main" }} />
          <Typography color="gray" fontSize="16px">
            {dateToStr(time)}
          </Typography>
        </Stack>
        <Stack
          direction="row"
          sx={{
            border: 1,
            borderColor: "gray",
            borderRadius: "4px",
            width: "40%",
            p: 1,
            mx: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LocationOnIcon sx={{ color: "blue.main" }} />
          <Typography color="gray">
            {location.city == "" ? "Remote" : `${location.city}`}
          </Typography>
        </Stack>
        <Stack
          direction="row"
          sx={{
            border: 1,
            borderColor: "gray",
            borderRadius: "4px",
            width: "40%",
            p: 1,
            mx: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AccessTimeIcon sx={{ color: "blue.main" }} />
          <Typography color="gray">{duration} hours</Typography>
        </Stack>
      </Stack>
      <CardContent>
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
            mt: 1,
            height: "65px",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions
        sx={{ alignItems: "center", justifyContent: "center", pb: 1 }}
      >
        <Link to={`/opportunity/${id}`}>
          <Button
            variant="contained"
            sx={{
              bgcolor: "blue.light",
              color: "blue.contrastText",
              borderRadius: 4,
              ":hover": {
                bgcolor: "blue.main",
              },
            }}
          >
            More info
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
