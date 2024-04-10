import axiosInstance from "../../utils/axiosInstance";
import { useEffect, useState } from "react";

import {
  Box,
  Toolbar,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Grid,
  Stack,
  IconButton,
} from "@mui/material";
import { SearchBar } from "../../components/sharedComponents/SearchBar";
import { MissionCard } from "../../components/sharedComponents/MissionCard";
import DefaultImage from "../../../assets/defaultMission.png";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

export const FindOpportunitiesPage = () => {
  const [events, setEvents] = useState([]);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("none");

  useEffect(() => {
    axiosInstance
      .get(`/events/by_status?status=PUBLISHED&offset=${page - 1}&pageSize=8`)
      .then((res) => {
        setEvents(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);

  const handleChangePage = (val) => {
    if (val == -1 && page + val > 0) setPage(page + val);

    if (val == 1 && events.length > 8) setPage(page + val);
  };

  return (
    <Box sx={{ width: 1, minHeight: "95vh", bgcolor: "background" }}>
      <Toolbar />
      <Box sx={{ mx: 3, mt: 1 }}>
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
                sx={{ color: "blue.main" }}
              >
                <MenuItem value="no sort">No sort</MenuItem>
                <MenuItem value="earliest">Earliest</MenuItem>
                <MenuItem value="latest">Latest</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Toolbar>

        <Box sx={{ mt: 2 }}>
          <Grid container direction="row" spacing={2}>
            {events.slice(0, 8).map((event) => {
              return (
                <Grid item xs={12} md={6} lg={3} key={event.id}>
                  <MissionCard
                    id={event.id}
                    title={event.name}
                    description={event.description}
                    time={event.time}
                    location={event.location}
                    duration={event.hours}
                    event_type={"opportunity"}
                    photoUrl={
                      event.photoUrl == "NO_FILE"
                        ? DefaultImage
                        : `${import.meta.env.VITE_MISSIONS_BUCKET_URL}${
                            event.photoUrl
                          }`
                    }
                  />
                </Grid>
              );
            })}
          </Grid>

          <Stack direction="row" sx={{ mx: 2, mt: 1 }}>
            <Box sx={{ flexGrow: 1 }}>
              <IconButton onClick={() => handleChangePage(-1)}>
                <ArrowCircleLeftIcon
                  fontSize="large"
                  sx={{
                    color: "blue.light",
                    ":hover": { color: "blue.main" },
                  }}
                />
              </IconButton>
            </Box>
            <IconButton onClick={() => handleChangePage(1)}>
              <ArrowCircleRightIcon
                fontSize="large"
                sx={{ color: "blue.light", ":hover": { color: "blue.main" } }}
              />
            </IconButton>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};
