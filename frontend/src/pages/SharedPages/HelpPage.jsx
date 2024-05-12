import { Box, Toolbar, Typography, Grid, Button } from "@mui/material";
import { NavBar } from "../../components/landingComponents/NavBar";
import { Footer } from "../../components/landingComponents/Footer";
import Logo from "../../../Bridgy_Assets/LOGO BRIDGY/fav icon/SVG (1).svg";
import { InfoCard } from "../../components/landingComponents/InfoCard";
import { Link } from "react-router-dom";

import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";

export const HelpPage = () => {
  return (
    <Box sx={{ width: 1, bgcolor: "white.main" }}>
      <NavBar />
      <Toolbar />
      <Box display="flex" sx={{ width: 1, bgcolor: "white.main" }}>
        <Box sx={{ m: 10 }}>
          <Typography textAlign="center" variant="h3" fontWeight="bold">
            Creating an account
          </Typography>
          <Typography textAlign="center" variant="h4" sx={{ mt: 2, mb: 15 }}>
            It's simple ! While you cannot create your own account on Bridgy for
            security reasons, you only have a few steps to follow and we'll do
            it for you.
          </Typography>
          <Grid container direction="row" spacing={4} sx={{ mb: 10 }}>
            <Grid item xs={12} lg={4}>
              <InfoCard
                title={"STUDENT"}
                text={
                  "Refer us to your school, once they sign up we'll create your account automatically."
                }
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <InfoCard
                title={"CHARITY"}
                text={
                  "Fill out the attached form (Bridgy - Charity Application) and we'll contact you within 24 hours."
                }
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <InfoCard
                title={"SCHOOL"}
                text={
                  "Fill out the attached form (Bridgy - School Application) and we'll contact you within 24 hours."
                }
              />
            </Grid>
          </Grid>
          <Grid container direction="row">
            <Grid item container xs={4} sx={{ justifyContent: "center" }}>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "blue.light",
                  color: "blue.contrastText",
                  px: 6,
                  py: 2,
                  fontSize: "24px",
                  borderRadius: 10,
                  textTransform: "none",
                  ":hover": {
                    bgcolor: "blue.main",
                  },
                }}
              >
                <Link to="https://docs.google.com/forms/d/e/1FAIpQLSdJMVQWrKC9OBs9_Sepyr1CqXM9xfD-s08VWxjlGMK41FzVag/viewform?usp=sf_link">
                  {" "}
                  Bridgy - Charity Application
                </Link>{" "}
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Typography textAlign="center" variant="h3" fontWeight="bold">
                Contact Us!
              </Typography>
              <Typography textAlign="center" variant="h4" sx={{ mt: 2 }}>
                contact@bridgyteam.com
              </Typography>
            </Grid>
            <Grid item container xs={4} sx={{ justifyContent: "center" }}>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "blue.light",
                  color: "blue.contrastText",
                  px: 6,
                  py: 2,
                  fontSize: "24px",
                  borderRadius: 10,
                  textTransform: "none",
                  ":hover": {
                    bgcolor: "blue.main",
                  },
                }}
              >
                <Link to="https://docs.google.com/forms/d/e/1FAIpQLSeVx_46yHysAXcUHRM9DCPGL2TnjxO9xTa4r86rkYuhcxX28w/viewform?usp=sf_link">
                  {" "}
                  Bridgy - School Application
                </Link>{" "}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};
