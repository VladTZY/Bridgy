import {
  Button,
  AppBar,
  Container,
  Toolbar,
  Typography,
  Link,
} from "@mui/material";
import Logo from "../../../Bridgy_Assets/LOGO BRIDGY/fav icon/SVG (1).svg";
import { useNavigate, useLocation } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollHome = () => {
    if (location.pathname != "/") navigate("/");
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollAbout = () => {
    if (location.pathname != "/") navigate("/");
    else window.scrollTo({ top: 3800, behavior: "smooth" });
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        bgcolor: "landing",
      }}
    >
      <Container maxWidth="4xl" disableGutters>
        <Toolbar disableGutters>
          <Toolbar sx={{ flexGrow: 1, pl: { xl: 20, lg: 10 } }} disableGutters>
            <img height="100%" src={Logo} />
            <Typography
              noWrap
              component="a"
              sx={{
                display: { xs: "none", md: "flex" },
                fontWeight: "bold",
                color: "inherit",
                fontSize: "40px",
              }}
            >
              Bridgy
            </Typography>
          </Toolbar>
          <Toolbar disableGutters>
            <Button
              onClick={scrollHome}
              sx={{
                textTransform: "none",
                color: "inherit",
                mr: 4,
                ":hover": {
                  textDecoration: "underline",
                  textDecorationColor: "blue.main",
                  textDecorationThickness: ".2rem",
                  color: "blue.main",
                  bgcolor: "inherit",
                },
              }}
            >
              <Typography
                fontWeight="medium"
                sx={{ fontSize: { xl: "23px", lg: "18px" } }}
              >
                Home
              </Typography>
            </Button>
            <Button
              onClick={scrollAbout}
              sx={{
                textTransform: "none",
                color: "inherit",
                mr: 4,
                ":hover": {
                  textDecoration: "underline",
                  textDecorationColor: "blue.main",
                  textDecorationThickness: ".2rem",
                  color: "blue.main",
                  bgcolor: "inherit",
                },
              }}
            >
              <Typography
                fontWeight="medium"
                sx={{ fontSize: { xl: "23px", lg: "18px" } }}
              >
                About Us
              </Typography>
            </Button>
            <Link
              href="/meet_our_charities"
              sx={{
                textTransform: "none",
                textDecoration: "none",
                color: "inherit",
                mr: 4,
                ":hover": {
                  textDecoration: "underline",
                  textDecorationColor: "blue.main",
                  textDecorationThickness: ".2rem",
                  color: "blue.main",
                },
              }}
            >
              <Typography
                fontWeight="medium"
                sx={{ fontSize: { xl: "23px", lg: "18px" } }}
              >
                Meet Our Charities
              </Typography>
            </Link>
            <Button
              sx={{
                textTransform: "none",
                color: "inherit",
                mr: 4,
                ":hover": {
                  textDecoration: "underline",
                  textDecorationColor: "blue.main",
                  textDecorationThickness: ".2rem",
                  color: "blue.main",
                  bgcolor: "inherit",
                },
              }}
            >
              <Typography
                fontWeight="medium"
                sx={{ fontSize: { xl: "23px", lg: "18px" } }}
              >
                FAQ
              </Typography>
            </Button>
            <Link
              href="/help"
              sx={{
                textTransform: "none",
                textDecoration: "none",
                color: "inherit",
                mr: 4,
                ":hover": {
                  textDecoration: "underline",
                  textDecorationColor: "blue.main",
                  textDecorationThickness: ".2rem",
                  color: "blue.main",
                  bgcolor: "inherit",
                },
              }}
            >
              <Typography
                fontWeight="medium"
                sx={{ fontSize: { xl: "23px", lg: "18px" } }}
              >
                Contact Us
              </Typography>
            </Link>
            {location.pathname != "/login" && (
              <Button
                onClick={handleLogin}
                variant="contained"
                sx={{
                  mr: 4,
                  bgcolor: "blue.light",
                  color: "blue.contrastText",
                  px: 4,
                  fontSize: "18px",
                  borderRadius: 6,
                  textTransform: "none",
                  ":hover": {
                    bgcolor: "blue.main",
                  },
                }}
              >
                Login
              </Button>
            )}
          </Toolbar>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
