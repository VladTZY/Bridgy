import { Grid, Toolbar, Typography, Link } from "@mui/material";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import Logo from "../../../Bridgy_Assets/LOGO BRIDGY/fav icon/SVG (1).svg";

function SocialMedia() {
  return (
    <Toolbar>
      <Facebook sx={{ color: "white.main", mx: 2 }} />
      <Instagram sx={{ color: "white.main", mx: 2 }} />
      <Twitter sx={{ color: "white.main", mx: 2 }} />
      <YouTube sx={{ color: "white.main", mx: 2 }} />
    </Toolbar>
  );
}

function Copyright() {
  return (
    <Toolbar>
      <Typography variant="h6" color="white.main" fontSize="bold">
        {"Copyright © "}
        Bridgy, Inc.{new Date().getFullYear()}
        {" | All rights reserved."}
      </Typography>
    </Toolbar>
  );
}

function Policy() {
  return (
    <Toolbar sx={{ alignSelf: "center" }}>
      <Link
        href="https://app.termly.io/policy-viewer/policy.html?policyUUID=53ebf54f-2a61-4776-bc45-e0f2d747252a"
        color="white.main"
      >
        <Typography
          color="white.main"
          sx={{ fontSize: { xl: "20px", lg: "17px" } }}
        >
          Cookie Policy
        </Typography>
      </Link>
      <Typography variant="h6" color="white.main" sx={{ mx: "4px" }}>
        |
      </Typography>
      <Link
        href="https://app.termly.io/policy-viewer/policy.html?policyUUID=9348cbf5-fb0f-454d-9f44-598dca025e76"
        color="white.main"
      >
        <Typography
          color="white.main"
          sx={{ fontSize: { xl: "20px", lg: "17px" } }}
        >
          Privacy Policy
        </Typography>
      </Link>
      <Typography variant="h6" color="white.main" sx={{ mx: "4px" }}>
        |
      </Typography>
      <Link
        href="https://app.termly.io/policy-viewer/policy.html?policyUUID=f5f9bc32-e9d9-4642-8f2b-938927e83198"
        color="white.main"
      >
        <Typography
          color="white.main"
          sx={{ fontSize: { xl: "20px", lg: "17px" } }}
        >
          Terms of Use
        </Typography>
      </Link>
    </Toolbar>
  );
}

function Info() {
  return (
    <Toolbar>
      <Grid
        container
        direction="column"
        sx={{ alignItems: "center" }}
        spacing={2}
      >
        <Grid item>
          <img src={Logo} style={{ height: "10vh" }} />
          <Typography variant="h4" fontWeight="bold" color="white.main">
            Bridgy
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6" color="white.main" fontWeight="bold">
            Connecting passion with purpose
          </Typography>
        </Grid>
        <Grid item>
          <Typography color="white.main" textAlign="center">
            5500 S UNIVERSITY AVE
          </Typography>
          <Typography color="white.main" textAlign="center">
            CHICAGO, IL 60637
          </Typography>
        </Grid>
      </Grid>
    </Toolbar>
  );
}

function Menu() {
  return (
    <Toolbar>
      <Grid
        container
        direction="column"
        sx={{ alignItems: "center" }}
        spacing={2}
      >
        <Grid item>
          <Typography
            color="white.main"
            fontSize="bold"
            textAlign="center"
            variant="h6"
          >
            Home
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            color="white.main"
            fontSize="bold"
            textAlign="center"
            variant="h6"
          >
            About Us
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            color="white.main"
            fontSize="bold"
            textAlign="center"
            variant="h6"
          >
            Meet Our Charities
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            color="white.main"
            fontSize="bold"
            textAlign="center"
            variant="h6"
          >
            FAQ
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            color="white.main"
            fontSize="bold"
            textAlign="center"
            variant="h6"
          >
            Contact Us
          </Typography>
        </Grid>
      </Grid>
    </Toolbar>
  );
}

function Details() {
  return (
    <Toolbar>
      <Grid container direction="column" sx={{ alignItems: "center" }}>
        <Grid item>
          <Typography
            variant="h6"
            fontSize="bold"
            color="white.main"
            textAlign="center"
          >
            Want to get involved?
          </Typography>
          <SocialMedia />
        </Grid>
        <Grid item>
          <Copyright />
        </Grid>
        <Grid item>
          <Policy />
        </Grid>
      </Grid>
    </Toolbar>
  );
}

export const Footer = () => {
  return (
    <Toolbar
      sx={{
        bgcolor: "black",
        width: 1,
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Grid container sx={{ m: 5 }}>
        <Grid item xs={4}>
          <Info />
        </Grid>
        <Grid item xs={4}>
          <Menu />
        </Grid>
        <Grid item xs={4}>
          <Details />
        </Grid>
      </Grid>
    </Toolbar>
  );
};
