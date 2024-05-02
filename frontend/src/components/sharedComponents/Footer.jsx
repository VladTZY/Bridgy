import React from "react";
import { Box, Stack, Typography, Toolbar } from "@mui/material";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Link } from "react-router-dom";

function Copyright() {
  return (
    <Box>
      <Typography variant="body2" color="blue.contrastText">
        {"Copyright © "}
        Bridgy, Inc.{new Date().getFullYear()}
        {" | All rights reserved."}
      </Typography>
      <a
        href="https://app.termly.io/policy-viewer/policy.html?policyUUID=53ebf54f-2a61-4776-bc45-e0f2d747252a"
        className="text-white hover:underline"
      >
        Cookie Policy
      </a>
      <span className="text-white">{" | "}</span>
      <a
        href="https://app.termly.io/policy-viewer/policy.html?policyUUID=9348cbf5-fb0f-454d-9f44-598dca025e76"
        className="text-white hover:underline"
      >
        Privacy Policy
      </a>
      <span className="text-white">{" | "}</span>
      <a
        href="https://app.termly.io/policy-viewer/policy.html?policyUUID=f5f9bc32-e9d9-4642-8f2b-938927e83198"
        className="text-white hover:underline"
      >
        Terms of Use
      </a>
    </Box>
  );
}

const Footer = () => {
  return (
    <Toolbar
      sx={{
        bgcolor: "blue.main",
        width: 1,
        height: "5vh",

        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Copyright />
      </Box>
      <Stack direction="row">
        <Facebook sx={{ color: "blue.contrastText", mx: 1 }} />
        <Instagram sx={{ color: "blue.contrastText", mx: 1 }} />
        <Twitter sx={{ color: "blue.contrastText", mx: 1 }} />
      </Stack>
    </Toolbar>
  );
};

export default Footer;
