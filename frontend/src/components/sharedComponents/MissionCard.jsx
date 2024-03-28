import React from "react";
import { styled } from "@mui/material/styles";
import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
} from "@mui/material";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export const MissionCard = () => {
  return (
    <Card sx={{ maxWidth: 1 / 4.2, mx: 2, bgcolor: "primary.main" }}>
      <CardMedia
        sx={{ p: 2 }}
        component="img"
        height="190"
        image="../../../assets/defaultMission.png"
        alt="Paella dish"
      />

      <CardContent>
        <Typography
          variant="h6"
          color="primary.contrastText"
          fontWeight="bold"
          sx={{ letterSpacing: 2 }}
        >
          Title
        </Typography>
        <Typography sx={{ mt: 1 }}>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
