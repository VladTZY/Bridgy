import { Box, Toolbar, Typography, Grid, CssBaseline } from "@mui/material";
import { NavBar } from "../../components/landingComponents/NavBar";
import { Footer } from "../../components/landingComponents/Footer";
import { CharityCard } from "../../components/landingComponents/CharityCard";
import Logo from "../../../Bridgy_Assets/LOGO BRIDGY/fav icon/SVG (1).svg";
import PolyannaBanner from "../../../Bridgy_Assets/Charities/Pollyanna/Pollyanna Logo - Final 2 copy 2.jpg";

const charities = [
  {
    name: "Pollyanna",
    type: "New York not-for-profit corporation",
    url: "https://pollyannainc.org/",
    title1: "Mission",
    desc1:
      "Pollyanna advances systemic change by developing stronger communities.",
    title2: "Strategy",
    desc2:
      "Pollyanna works with academic and other institutions to achieve their diversity, equity and inclusion goals. Through its unique conference models, discussion platforms, and racial literacy curricula, Pollyanna increases cultural competence.",
    banner: PolyannaBanner,
  },
];

export const MeetOurCharitiesPage = () => {
  return (
    <Box sx={{ width: 1, bgcolor: "landing" }}>
      <NavBar />
      <Toolbar />
      <Box display="flex" sx={{ width: 1, bgcolor: "landing" }}>
        <Box sx={{ m: 10 }}>
          {/*<Grid
          container
          direction="row"
          sx={{ alignItems: "center", justifyContent: "center" }}
        >
          <img src={Logo} width="300vw" className="center" />
          <Typography fontSize="150px" fontWeight="bold" textAlign="center">
            Bridgy
          </Typography>
  </Grid>*/}
          <Typography textAlign="center" variant="h3" fontWeight="bold">
            Meet Our Charities
          </Typography>
          <Typography textAlign="center" variant="h4" sx={{ mt: 2, mb: 20 }}>
            Find more about the charities that have connected with Bridgy
          </Typography>
          {charities.map((charity) => {
            return (
              <CharityCard
                name={charity.name}
                type={charity.type}
                url={charity.url}
                title1={charity.title1}
                desc1={charity.desc1}
                title2={charity.title2}
                desc2={charity.desc2}
                banner={charity.banner}
              />
            );
          })}
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};
