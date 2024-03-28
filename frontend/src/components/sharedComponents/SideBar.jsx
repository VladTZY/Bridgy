import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Drawer,
  List,
  Box,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Toolbar,
  Typography,
} from "@mui/material";
import ProfileIcon from "@mui/icons-material/AccountCircle";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AddOpIcon from "@mui/icons-material/DashboardCustomize";
import MissionIcon from "@mui/icons-material/AutoAwesomeMotion";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

const drawerWidth = 220;

const buttonMapping = {
  ORGANIZATION: [
    {
      text: "Dashboard",
      route: "/organization/dashboard",
      icon: DashboardIcon,
    },
    {
      text: "Post Opportunities",
      route: "/organization/post_opportunities",
      icon: AddOpIcon,
    },
    {
      text: "Missions",
      route: "/organization/missions",
      icon: MissionIcon,
    },
    {
      text: "Notifications",
      route: "/organization/notifications",
      icon: NotificationsActiveIcon,
    },
  ],
};

const SideBar = () => {
  const userRole = useSelector((state) => state.auth.role);
  const userId = useSelector((state) => state.auth.id);

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        bgcolor: "primary.main",
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          {buttonMapping[userRole].map((value) => (
            <ListItem key={value.text} disablePadding>
              <Link to={value.route}>
                <ListItemButton>
                  <ListItemIcon>
                    <value.icon />
                  </ListItemIcon>
                  <ListItemText
                    disableTypography
                    primary={
                      <Typography
                        variant="h6"
                        color="primary.contrastText"
                        fontWeight="550"
                      >
                        {value.text}
                      </Typography>
                    }
                  />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
          <ListItem key={"profile"} disablePadding>
            <Link to={`/profile/${userId}`}>
              <ListItemButton>
                <ListItemIcon>
                  <ProfileIcon />
                </ListItemIcon>
                <ListItemText
                  disableTypography
                  primary={
                    <Typography
                      variant="h6"
                      color="primary.contrastText"
                      fontWeight="550"
                    >
                      Profile
                    </Typography>
                  }
                />
              </ListItemButton>
            </Link>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default SideBar;
