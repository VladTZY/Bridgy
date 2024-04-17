import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import { Toolbar } from "@mui/material";
import { NotificationCard } from "../../components/sharedComponents/NotificationCard";
import { useState, useEffect } from "react";
import axiosInstance from "../../utils/axiosInstance";

export const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    axiosInstance
      .get(`/notification/get_all`)
      .then((res) => setNotifications(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Box sx={{ width: 1, minHeight: "95vh", bgcolor: "background" }}>
      {/*Lasam spatiu pt navbar*/}
      <Toolbar />
      <Grid item xs={12} md={6}>
        <Typography
          variant="h4"
          fontWeight="700"
          sx={{
            flexGrow: 1,
            pt: 4,
            pl: 4,
            pb: 2,
            fontSize: {
              xs: "22px",
              lg: "26px",
              xl: "30px",
            },
          }}
        >
          Notifications
        </Typography>
        <List sx={{ mx: 4 }}>
          {notifications.map((notification, index) => {
            console.log("aici");
            return (
              <NotificationCard
                key={index}
                type={notification.type}
                message={notification.message}
                studentId={notification.studentId}
                eventId={notification.eventId}
              />
            );
          })}
        </List>
      </Grid>
    </Box>
  );
};
