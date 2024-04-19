import { useState, useEffect } from "react";
import axiosInstance from "../../utils/axiosInstance";

import {
  Box,
  Toolbar,
  Grid,
  Stack,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import { ProgressCard } from "../../components/sharedComponents/ProgressCard";
import { StudentsTable } from "../../components/schoolComponents/StudentsTable";

export const SchoolDashboardPage = () => {
  const [tableData, setTableData] = useState([]);
  const [grade, setGrade] = useState("9");
  const [stats, setStats] = useState({
    numberOfStudents: 0,
    completedStudents: 0,
    totalEconomy: 0,
    totalObjective: 0,
    actualObjective: 0,
  });

  useEffect(() => {
    axiosInstance
      .get(`/school/students?grade=${grade}`)
      .then((res) => {
        setTableData(res.data);
      })
      .catch((error) => console.log(error));
  }, [grade]);

  useEffect(() => {
    axiosInstance
      .get(`/school/stats`)
      .then((res) => {
        setStats(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  if (tableData.length == 0) {
    return (
      <Box sx={{ width: 1, minHeight: "95vh", bgcolor: "pageBackground" }}>
        <Backdrop
          open={true}
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </Box>
    );
  }

  return (
    <Box sx={{ width: 1, minHeight: "95vh", bgcolor: "pageBackground" }}>
      <Toolbar />
      <Box sx={{ m: 4 }}>
        <Grid container direction="row" spacing={3} sx={{ mb: 3 }}>
          <Grid item xs={12} lg={4}>
            <ProgressCard
              title="Students status"
              value={stats.completedStudents + " / " + stats.numberOfStudents}
              percentage={Math.round(
                (stats.completedStudents / stats.numberOfStudents) * 100
              )}
              color="green"
            />
          </Grid>
          <Grid item xs={12} lg={4}>
            <ProgressCard
              title="Objective status"
              value={stats.actualObjective + " / " + stats.totalObjective}
              percentage={Math.round(
                (stats.actualObjective / stats.totalObjective) * 100
              )}
              color="orange"
            />
          </Grid>
          <Grid item xs={12} lg={4}>
            <ProgressCard
              title="Total Economy"
              value={stats.totalEconomy + " $"}
              percentage="100"
              color="lightskyblue"
            />
          </Grid>
        </Grid>
        <Box sx={{ mt: 4 }}>
          <Stack direction="row">
            <Box sx={{ flexGrow: 1 }}></Box>
            <FormControl sx={{ minWidth: 120 }} size="small">
              <InputLabel>Grade</InputLabel>
              <Select
                id="grade"
                value={grade}
                label="Grade"
                onChange={(e) => {
                  setGrade(e.target.value);
                }}
              >
                <MenuItem value={9}>9</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={11}>11</MenuItem>
                <MenuItem value={12}>12</MenuItem>
              </Select>
            </FormControl>
          </Stack>
          <Box sx={{ mt: 3 }}>
            <StudentsTable rows={tableData} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
