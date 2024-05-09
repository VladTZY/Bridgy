import { Box, Grid, Typography } from "@mui/material";

export const CharityCard = ({ name, type, mission, strategy, banner }) => {
  return (
    <Box sx={{ width: 1, bgcolor: "white.main", borderRadius: "30px" }}>
      <Grid container sx={{ p: 5 }}>
        <Grid
          item
          container
          direction="column"
          lg={6}
          xs={12}
          sx={{ justifyContent: "center" }}
        >
          <Typography variant="h2" fontWeight="bold" textAlign="center">
            {name}
          </Typography>
          <Typography variant="h6" textAlign="center">
            {type}
          </Typography>
        </Grid>
        <Grid item lg={6} xs={12}>
          <img src={banner} style={{ borderRadius: "30px" }} />
        </Grid>
      </Grid>
      <Grid container direction="column" sx={{ p: 5 }}>
        <Grid container direction="column" sx={{ mb: 2 }}>
          <Typography fontWeight="bold" variant="h5">
            Mission
          </Typography>{" "}
          <Typography variant="h5">{mission}</Typography>
        </Grid>
        <Grid container direction="column">
          <Typography fontWeight="bold" variant="h5">
            Strategy
          </Typography>
          <Typography variant="h5">{strategy}</Typography>
        </Grid>
        <Typography></Typography>
      </Grid>
    </Box>
  );
};
