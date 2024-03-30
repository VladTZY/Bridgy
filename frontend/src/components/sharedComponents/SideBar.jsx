import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";
import {
  Drawer,
  List,
  Box,
  ListItem,
  ListItemButton,
  Stack,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import ProfileIcon from "@mui/icons-material/AccountCircle";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AddOpIcon from "@mui/icons-material/DashboardCustomize";
import MissionIcon from "@mui/icons-material/AutoAwesomeMotion";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import LogoutIcon from "@mui/icons-material/Logout";

const drawerWidth = 260;

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

const buttonStyle = {
  active: {
    bgcolor: "blue.main",
    text: "blue.contrastText",
    hoverColor: "blue.main",
  },
  inactive: {
    bgcolor: "white.main",
    text: "white.contrastText",
    hoverColor: "blue.transparent",
  },
};

const SideBar = () => {
  const userRole = useSelector((state) => state.auth.role);
  const userId = useSelector((state) => state.auth.id);
  const dispatch = useDispatch();
  const location = useLocation();
  const profileActive =
    location.pathname == `/profile/${userId}` ? "active" : "inactive";

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        height: "100vh",
        bgcolor: "primary.main",
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto", flexGrow: 1 }}>
        <List>
          {buttonMapping[userRole].map((value) => {
            let status = "inactive";

            if (value.route == location.pathname) status = "active";

            return (
              <ListItem
                key={value.text}
                disablePadding
                sx={{
                  my: 1,
                  width: 1,
                }}
              >
                <Button
                  sx={{
                    mx: 2,
                    width: 1,
                    textTransform: "none",
                    borderRadius: 6,
                    textAlign: "left",
                    justifyContent: "left",
                    bgcolor: buttonStyle[status].bgcolor,
                    ":hover": {
                      bgcolor: buttonStyle[status].hoverColor,
                    },
                  }}
                  startIcon={
                    <value.icon
                      sx={{ color: buttonStyle[status].text, ml: 1 }}
                    />
                  }
                >
                  <Link to={value.route} style={{ width: "100%" }}>
                    <Typography
                      variant="h6"
                      color={buttonStyle[status].text}
                      fontWeight="550"
                      sx={{
                        py: 1,
                        pr: 1,
                      }}
                    >
                      {value.text}
                    </Typography>
                  </Link>
                </Button>
              </ListItem>
            );
          })}

          <ListItem
            disablePadding
            key={"Profile"}
            sx={{
              my: 1,
            }}
          >
            <Button
              sx={{
                mx: 2,
                width: 1,
                textTransform: "none",
                borderRadius: 6,
                textAlign: "left",
                justifyContent: "left",
                bgcolor: buttonStyle[profileActive].bgcolor,
                ":hover": {
                  bgcolor: buttonStyle[profileActive].hoverColor,
                },
              }}
              startIcon={
                <ProfileIcon
                  sx={{ color: buttonStyle[profileActive].text, ml: 1 }}
                />
              }
            >
              <Link to={`/profile/${userId}`} style={{ width: "100%" }}>
                <Typography
                  variant="h6"
                  color={buttonStyle[profileActive].text}
                  fontWeight="550"
                  sx={{
                    py: 1,
                    pr: 1,
                  }}
                >
                  Profile
                </Typography>
              </Link>
            </Button>
          </ListItem>
        </List>
      </Box>
      <Toolbar
        disableGutters
        sx={{ ml: 2, mb: 8 }}
        onClick={() => dispatch(logout())}
      >
        <LogoutIcon />
        <Typography variant="h6" color="primary.contrastText" fontWeight="550">
          Logout
        </Typography>
      </Toolbar>
    </Drawer>
  );
};

export default SideBar;
