import { useState, useEffect } from "react";
import axiosInstance from "../../utils/axiosInstance";

import {
  Box,
  Toolbar,
  Grid,
  Stack,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
} from "@mui/material";
import { ProgressCard } from "../../components/sharedComponents/ProgressCard";
import { StudentsTable } from "../../components/schoolComponents/StudentsTable";
import { ObjectiveDash } from "../../components/schoolComponents/ObjectiveDash";

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

  return (
    <Box sx={{ width: 1, minHeight: "95vh", bgcolor: "pageBackground" }}>
      <Toolbar />
      <Box sx={{ m: 4 }}>
        <Grid container direction="row" spacing={3} sx={{ mb: 3 }}>
          <Grid item xs={12} lg={4}>
            <ProgressCard
              title="Class Progress"
              value={stats.completedStudents + " / " + stats.numberOfStudents}
              percentage={Math.round(
                (stats.completedStudents / stats.numberOfStudents) * 100
              )}
              percentageText={
                Math.round(
                  (stats.completedStudents / stats.numberOfStudents) * 100
                ) + "%"
              }
              color="green"
            />
          </Grid>
          <Grid item xs={12} lg={4}>
            <ProgressCard
              title="Objective Progress"
              value={stats.actualObjective + " / " + stats.totalObjective}
              percentage={Math.round(
                (stats.actualObjective / stats.totalObjective) * 100
              )}
              percentageText={
                Math.round(
                  (stats.actualObjective / stats.totalObjective) * 100
                ) + "%"
              }
              color="orange"
            />
          </Grid>
          <Grid item xs={12} lg={4}>
            <ProgressCard
              title="Economic Impact"
              value={stats.totalEconomy + " $"}
              percentage="100"
              percentageText={stats.totalEconomy + "$"}
              color="lightskyblue"
            />
          </Grid>
        </Grid>
        <Box sx={{ mt: 4 }}>
          <ObjectiveDash />
        </Box>
        <Box sx={{ mt: 4 }}>
          <Stack direction="row">
            <Typography
              variant="h4"
              fontWeight="700"
              sx={{
                flexGrow: 1,
                fontSize: {
                  xs: "22px",
                  lg: "26px",
                  xl: "30px",
                },
              }}
            >
              Students
            </Typography>
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
