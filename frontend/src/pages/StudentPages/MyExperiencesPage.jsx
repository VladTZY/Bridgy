import axiosInstance from "../../utils/axiosInstance";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import {
  Box,
  Toolbar,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Grid,
  ButtonGroup,
  Button,
} from "@mui/material";
import { SearchBar } from "../../components/sharedComponents/SearchBar";
import { MissionCard } from "../../components/sharedComponents/MissionCard";
import { FeedbackCard } from "../../components/studentComponents/FeedbackCard";
import { BackdropPage } from "../../components/sharedComponents/BackdropPage";
import DefaultImage from "../../../assets/defaultMission.png";

const buttonStyles = {
  true: {
    width: "100px",
    bgcolor: "blue.light",
    color: "blue.contrastText",
  },
  false: {
    width: "100px",
  },
};

export const MyExperiencesPage = () => {
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);
  const [eventType, setEventType] = useState("PERSONAL_EVENT");
  const [eventAlias, setEventAlias] = useState("personalEvent");
  const userId = useSelector((state) => state.auth.id);

  useEffect(() => {
    axiosInstance
      .get(`/student/finished_events?userId=${userId}&eventType=${eventType}`)
      .then((res) => {
        setEvents(res.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [eventType]);

  if (!events || loading) return <BackdropPage />;

  return (
    <Box sx={{ width: 1, minHeight: "95vh", bgcolor: "pageBackground" }}>
      <Toolbar />
      <Box sx={{ mx: 3, mt: 2, mb: 2 }}>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1 }}>
            <SearchBar />
          </Box>
          <Box sx={{ display: "flex" }}>
            <ButtonGroup>
              <Button
                sx={buttonStyles[eventType == "ORGANIZATION_EVENT"]}
                onClick={() => {
                  setLoading(true);
                  setEventAlias("event");
                  setEventType("ORGANIZATION_EVENT");
                }}
              >
                Public
              </Button>
              <Button
                sx={buttonStyles[eventType == "PERSONAL_EVENT"]}
                onClick={() => {
                  setLoading(true);
                  setEventAlias("personalEvent");
                  setEventType("PERSONAL_EVENT");
                }}
              >
                Personal
              </Button>
            </ButtonGroup>
            <FormControl
              sx={{
                width: "150px",
                ml: 3,
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
                      id={data[eventAlias].id}
                      title={data[eventAlias].name}
                      description={data[eventAlias].description}
                      datetime={data[eventAlias].datetime}
                      location={data[eventAlias].location}
                      duration={data[eventAlias].hours}
                      event_type={"opportunity"}
                      photoUrl={
                        data[eventAlias].photoUrl == "NO_FILE" ||
                        !data[eventAlias].photoUrl
                          ? DefaultImage
                          : `${import.meta.env.VITE_MISSIONS_BUCKET_URL}${
                              data[eventAlias].photoUrl
                            }`
                      }
                    />
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <FeedbackCard
                      id={data.id}
                      title={`Feedback - ${data[eventAlias].name}`}
                      feedback={data.feedback}
                    />
                  </Grid>
                </Grid>
              );
            }

            return (
              <Grid
                item
                container
                direction="row"
                spacing={2}
                key={index}
                sx={{ mb: 3 }}
              >
                <Grid item xs={12} md={9}>
                  <FeedbackCard
                    id={data.id}
                    title={`Feedback - ${data[eventAlias].name}`}
                    feedback={data.feedback}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <MissionCard
                    id={data[eventAlias].id}
                    title={data[eventAlias].name}
                    description={data[eventAlias].description}
                    datetime={data[eventAlias].datetime}
                    location={data[eventAlias].location}
                    duration={data[eventAlias].hours}
                    event_type={"opportunity"}
                    photoUrl={
                      data[eventAlias].photoUrl == "NO_FILE" ||
                      !data[eventAlias].photoUrl
                        ? DefaultImage
                        : `${import.meta.env.VITE_MISSIONS_BUCKET_URL}${
                            data[eventAlias].photoUrl
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
