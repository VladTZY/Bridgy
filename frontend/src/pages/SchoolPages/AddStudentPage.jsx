import { Box, Toolbar, Grid } from "@mui/material";
import { AddStudentCard } from "../../components/schoolComponents/AddStudentCard";
import { AddMultipleStudentsCard } from "../../components/schoolComponents/AddMultipleStudentsCard";

export const AddStudentPage = () => {
  return (
    <Box sx={{ width: 1, minHeight: "95vh", bgcolor: "pageBackground" }}>
      <Toolbar />
      <Box sx={{ m: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <AddStudentCard />
          </Grid>
          <Grid item xs={12} lg={4}>
            <AddMultipleStudentsCard />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
