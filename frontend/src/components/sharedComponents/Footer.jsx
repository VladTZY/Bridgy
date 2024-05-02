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
      <Link to="/privacy_policy" className="text-white hover:underline">
        Our Privacy Policy
      </Link>
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
