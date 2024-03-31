import * as React from "react";
import { useSelector } from "react-redux";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Badge,
  Avatar,
  SvgIcon,
} from "@mui/material";
import BridgyLogo from "../../../assets/logo.svg?react";
import NotificationsIcon from "@mui/icons-material/Notifications";

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

function ResponsiveAppBar() {
  const name = useSelector((state) => state.auth.username);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Container maxWidth="4xl" disableGutters>
        <Toolbar disableGutters>
          <Toolbar sx={{ flexGrow: 1, pl: 0 }} disableGutters>
            <SvgIcon
              component={BridgyLogo}
              viewBox="0 0 513.5 513.5"
              sx={{ display: "flex", mr: 1, height: 50, width: 50 }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: "bold",
                letterSpacing: ".1rem",
                color: "inherit",
              }}
            >
              Bridgy
            </Typography>
          </Toolbar>

          <Toolbar disableGutters sx={{ mr: 2 }}>
            <Badge
              color="primary"
              sx={{ display: { xs: "none", md: "flex" }, mr: 2 }}
            >
              <NotificationsIcon />
            </Badge>
          </Toolbar>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
