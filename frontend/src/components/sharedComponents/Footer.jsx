import React from "react";
import { Box, Stack, Typography, Toolbar, Link, Grid } from "@mui/material";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

function Copyright() {
  return (
    <Toolbar>
      <Typography variant="body2" color="blue.contrastText">
        {"Copyright © "}
        Bridgy, Inc.{new Date().getFullYear()}
        {" | All rights reserved."}
      </Typography>
    </Toolbar>
  );
}

function Policy() {
  return (
    <Toolbar disableGutters>
      <Link
        href="https://app.termly.io/policy-viewer/policy.html?policyUUID=53ebf54f-2a61-4776-bc45-e0f2d747252a"
        className="text-white hover:underline"
      >
        <Typography variant="body2" color="blue.contrastText">
          Cookie Policy
        </Typography>
      </Link>
      <Typography variant="body2" color="blue.contrastText" sx={{ mx: "4px" }}>
        |
      </Typography>
      <Link
        href="https://app.termly.io/policy-viewer/policy.html?policyUUID=9348cbf5-fb0f-454d-9f44-598dca025e76"
        className="text-white hover:underline"
      >
        <Typography variant="body2" color="blue.contrastText">
          Privacy Policy
        </Typography>
      </Link>
      <Typography variant="body2" color="blue.contrastText" sx={{ mx: "4px" }}>
        |
      </Typography>
      <Link
        href="https://app.termly.io/policy-viewer/policy.html?policyUUID=f5f9bc32-e9d9-4642-8f2b-938927e83198"
        className="text-white hover:underline"
      >
        <Typography variant="body2" color="blue.contrastText">
          Terms of Use
        </Typography>
      </Link>
    </Toolbar>
  );
}

function SocialMedia() {
  return (
    <Toolbar>
      <Facebook sx={{ color: "blue.contrastText", mx: 1 }} />
      <Instagram sx={{ color: "blue.contrastText", mx: 1 }} />
      <Twitter sx={{ color: "blue.contrastText", mx: 1 }} />
    </Toolbar>
  );
}

const Footer = () => {
  return (
    <Toolbar
      sx={{
        bgcolor: "blue.main",
        width: 1,
        maxHeight: "2vh",

        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Grid container disableGutters>
        <Grid item xs={4}>
          <Copyright />
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{
              flexGrow: 1,
              width: 1,
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Policy />
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{
              display: "flex",
              alignContent: "right",
              justifyContent: "right",
            }}
          >
            <SocialMedia />
          </Box>
        </Grid>
      </Grid>
    </Toolbar>
  );
};

export default Footer;
