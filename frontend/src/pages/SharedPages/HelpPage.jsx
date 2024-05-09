import { Box, Toolbar, Typography, Grid, Link } from "@mui/material";
import { NavBar } from "../../components/landingComponents/NavBar";
import Logo from "../../../Bridgy_Assets/LOGO BRIDGY/fav icon/SVG (1).svg";
import { InfoCard } from "../../components/landingComponents/InfoCard";

import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";

export const HelpPage = () => {
  return (
    <Box sx={{ width: 1, bgcolor: "landing" }}>
      <NavBar />
      <Toolbar />
      <Box display="flex" sx={{ width: 1, bgcolor: "landing" }}>
        <Box sx={{ m: 10 }}>
          <Typography textAlign="center" variant="h3" fontWeight="bold">
            Creating an account
          </Typography>
          <Typography textAlign="center" variant="h4" sx={{ mt: 2, mb: 15 }}>
            It's simple ! While you cannot create your own account on Bridgy for
            security reasons, you only have a few steps to follow and we'll do
            it for you.
          </Typography>
          <Grid container direction="row" spacing={4} sx={{ mb: 15 }}>
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
          <Typography textAlign="center" variant="h3" fontWeight="bold">
            Contact Us!
          </Typography>
          <Typography textAlign="center" variant="h4" sx={{ mt: 2 }}>
            contact@bridgyteam.com
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};