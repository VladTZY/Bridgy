import React from "react";
import { Box, Stack, Typography, Link, Toolbar } from "@mui/material";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

function Copyright() {
  return (
    <Typography variant="body2" color="blue.contrastText">
      {"Copyright © "}
      <Link color="inherit">Bridgy</Link> {new Date().getFullYear()}
      {" | All rights reserved."}
    </Typography>
  );
}

const Footer = () => {
  return (
    <Toolbar
      sx={{
        bgcolor: "blue.main",
        position: "fixed",
        bottom: 0,
        left: 0,
        width: 1,
        height: "5vh",
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
