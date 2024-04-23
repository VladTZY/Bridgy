import axiosInstance from "../../utils/axiosInstance";
import { useState, useEffect } from "react";

import {
  Box,
  Toolbar,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Grid,
} from "@mui/material";
import { SearchBar } from "../../components/sharedComponents/SearchBar";
import { MissionCard } from "../../components/sharedComponents/MissionCard";
import { FeedbackCard } from "../../components/studentComponents/FeedbackCard";
import DefaultImage from "../../../assets/defaultMission.png";

export const MyExperiencesPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axiosInstance
      .get(`/student/finished_events`)
      .then((res) => {
        setEvents(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Box sx={{ width: 1, minHeight: "95vh", bgcolor: "pageBackground" }}>
      <Toolbar />
      <Box sx={{ mx: 3, mt: 1, mb: 2 }}>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1 }}>
            <SearchBar />
          </Box>
          <Box sx={{ width: { xs: 0, md: "150px" } }}>
            <FormControl
              sx={{
                width: 1,
                display: {
                  xs: "none",
                  md: "flex",
                },
              }}
            >
              <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Sort by"
              >
                <MenuItem value="no sort">No sort</MenuItem>
                <MenuItem value="earliest">Earliest</MenuItem>
                <MenuItem value="latest">Latest</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Toolbar>

        <Grid container sx={{ mt: 2 }}>
          {events.map((data, index) => {
            if (index % 2 == 0) {
              return (
                <Grid
                  item
                  container
                  direction="row"
                  spacing={2}
                  key={index}
                  sx={{ mb: 3 }}
                >
                  <Grid item xs={12} md={3}>
                    <MissionCard
                      id={data.event.id}
                      title={data.event.name}
                      description={data.event.description}
                      datetime={data.event.datetime}
                      location={data.event.location}
                      duration={data.event.hours}
                      event_type={"opportunity"}
                      photoUrl={
                        data.event.photoUrl == "NO_FILE"
                          ? DefaultImage
                          : `${import.meta.env.VITE_MISSIONS_BUCKET_URL}${
                              event.photoUrl
                            }`
                      }
                    />
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <FeedbackCard
                      id={data.event.id}
                      title={data.event.name}
                      feedback={data.feedback}
                    />
                  </Grid>
                </Grid>
              );
            }

            return (
              <Grid item container direction="row" spacing={2} key={index}>
                <Grid item xs={12} md={9}>
                  <FeedbackCard
                    id={data.event.id}
                    title={data.event.name}
                    feedback={data.feedback}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <MissionCard
                    id={data.event.id}
                    title={data.event.name}
                    description={data.event.description}
                    time={data.event.time}
                    location={data.event.location}
                    duration={data.event.hours}
                    event_type={"opportunity"}
                    photoUrl={
                      data.event.photoUrl == "NO_FILE"
                        ? DefaultImage
                        : `${import.meta.env.VITE_MISSIONS_BUCKET_URL}${
                            data.event.photoUrl
                          }`
                    }
                  />
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};
