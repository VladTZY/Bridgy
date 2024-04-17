import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";
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
import LogoutIcon from "@mui/icons-material/Logout";

import stringAvatar from "../../utils/stringAvatar.js";

function ResponsiveAppBar() {
  const name = useSelector((state) => state.auth.username);
  const dispatch = useDispatch();

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        bgcolor: "secondary.main",
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
                fontWeight: "700",
                letterSpacing: ".1rem",
                color: "inherit",
                fontSize: "24px",
              }}
            >
              Bridgy
            </Typography>
          </Toolbar>

          <Toolbar disableGutters sx={{ mr: 2 }}>
            <Avatar {...stringAvatar(name)} />
            <Badge
              onClick={() => dispatch(logout())}
              color="primary"
              sx={{ ml: 2 }}
            >
              <LogoutIcon
                sx={{
                  cursor: "pointer",
                  ":hover": {
                    color: "blue.main",
                  },
                }}
              />
            </Badge>
          </Toolbar>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
