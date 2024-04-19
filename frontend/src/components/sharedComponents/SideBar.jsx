import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
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
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SearchIcon from "@mui/icons-material/Search";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import DomainAddIcon from "@mui/icons-material/DomainAdd";
import AddchartIcon from "@mui/icons-material/Addchart";

const drawerWidth = "15vw";

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
      route: "/notifications",
      icon: NotificationsActiveIcon,
    },
  ],
  SCHOOL: [
    {
      text: "Dashboard",
      route: "/school/dashboard",
      icon: DashboardIcon,
    },
    {
      text: "Add student",
      route: "/school/add_student",
      icon: PersonAddIcon,
    },
    {
      text: "Notifications",
      route: "/notifications",
      icon: NotificationsActiveIcon,
    },
  ],
  STUDENT: [
    {
      text: "Dashboard",
      route: "/student/dashboard",
      icon: DashboardIcon,
    },
    {
      text: "Find Opportunities",
      route: "/student/find_opportunities",
      icon: SearchIcon,
    },
    {
      text: "My Experiences",
      route: "/student/my_experiences",
      icon: FactCheckIcon,
    },
    {
      text: "Notifications",
      route: "/notifications",
      icon: NotificationsActiveIcon,
    },
  ],
  ADMIN: [
    {
      text: "Create organization",
      route: "/admin/create_organization",
      icon: AddchartIcon,
    },
    {
      text: "Create school",
      route: "/admin/create_school",
      icon: DomainAddIcon,
    },
  ],
  SUPER_ADMIN: [
    {
      text: "Create admin",
      route: "/super_admin/create_admin",
      icon: PersonAddIcon,
    },
    {
      text: "Create organization",
      route: "/admin/create_organization",
      icon: AddchartIcon,
    },
    {
      text: "Create school",
      route: "/admin/create_school",
      icon: DomainAddIcon,
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
  const location = useLocation();

  const profileActive =
    location.pathname == `/profile/${userId}` ? "active" : "inactive";

  return (
    <Drawer
      variant="permanent"
      sx={{
        display: {
          xs: "none",
          lg: "flex",
        },
        width: drawerWidth,
        minHeight: "95vh",
        bgcolor: "secondary.main",
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
                  width: 1,
                  pb: 1,
                }}
              >
                <Button
                  sx={{
                    mx: 2,
                    width: 1,
                    textTransform: "none",
                    borderRadius: 5,
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
                      color={buttonStyle[status].text}
                      fontWeight="600"
                      sx={{
                        py: 1,
                        pr: 1,
                        fontSize: {
                          lg: "16px",
                          xl: "21px",
                        },
                      }}
                    >
                      {value.text}
                    </Typography>
                  </Link>
                </Button>
              </ListItem>
            );
          })}

          <ListItem disablePadding key={"Profile"} sx={{}}>
            <Button
              sx={{
                mx: 2,
                width: 1,
                textTransform: "none",
                borderRadius: 5,
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
                  color={buttonStyle[profileActive].text}
                  fontWeight="600"
                  sx={{
                    py: 1,
                    pr: 1,
                    fontSize: {
                      lg: "16px",
                      xl: "21px",
                    },
                  }}
                >
                  Profile
                </Typography>
              </Link>
            </Button>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default SideBar;
