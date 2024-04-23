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
  Typography,
} from "@mui/material";
import { SearchBar } from "../../components/sharedComponents/SearchBar";
import { MissionCard } from "../../components/sharedComponents/MissionCard";
import DefaultImage from "../../../assets/defaultMission.png";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const categories = [
  "All categories",
  "No category",
  "Advocay & Human Rights",
  "Animlas",
  "Arts & Culture",
  "Board Development",
  "Children & Youth",
  "Community",
  "Computers & Tehnology",
  "Crisis Support",
  "Disaster Relief",
  "Education & Literacy",
  "Emergency & Safety",
  "Employment",
  "Environment",
  "Faith-Based",
  "Health & Medicine",
  "Homeless & Housing",
  "Hunger",
  "Immigrants & Refugees",
  "International",
  "Justice & Legal",
  "LGBTQ+",
  "Media & Broadcasting",
  "People with Disabilities",
  "Politics",
  "Race & Ethnicity",
  "Seniors",
  "Sports & Recreation",
  "Veterans & Military Families",
  "Women",
];

export const FindOpportunitiesPage = () => {
  const [events, setEvents] = useState([]);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("none");
  const [category, setCategory] = useState("All categories");

  useEffect(() => {
    const encodedCategory = encodeURIComponent(category);

    axiosInstance
      .get(
        `/events/by_status?status=PUBLISHED&offset=${
          page - 1
        }&pageSize=8&category=${encodedCategory}`
      )
      .then((res) => {
        setEvents(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page, category]);

  const handleChangePage = (val) => {
    if (val == -1 && page + val > 0) setPage(page + val);

    if (val == 1 && events.length > 8) setPage(page + val);
  };

  return (
    <Box sx={{ width: 1, minHeight: "95vh", bgcolor: "pageBackground" }}>
      <Toolbar />
      <Box sx={{ mx: 3, mt: 2 }}>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1 }}>
            <SearchBar />
          </Box>
          <Box sx={{ width: { xs: 0, md: "250px" } }}>
            <FormControl
              sx={{
                width: 1,
                display: {
                  xs: "none",
                  md: "flex",
                },
              }}
            >
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories.map((category) => {
                  return (
                    <MenuItem key={category} value={category}>
                      {category}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Box>
        </Toolbar>

        <Box sx={{ mt: 2 }}>
          {events.length > 0 ? (
            <Box>
              <Grid container direction="row" spacing={2}>
                {events.slice(0, 8).map((event) => {
                  return (
                    <Grid item xs={12} md={6} lg={3} key={event.id}>
                      <MissionCard
                        id={event.id}
                        title={event.name}
                        description={event.description}
                        datetime={event.datetime}
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

              <Stack direction="row" sx={{ mx: 1, mt: 1 }}>
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
                    sx={{
                      color: "blue.light",
                      ":hover": { color: "blue.main" },
                    }}
                  />
                </IconButton>
              </Stack>
            </Box>
          ) : (
            <Box>
              <Typography>No events found</Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};
