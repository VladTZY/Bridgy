import axiosInstance from "../../utils/axiosInstance";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

import {
  Box,
  Toolbar,
  Grid,
  Stack,
  IconButton,
  Typography,
} from "@mui/material";
import { MissionCard } from "../../components/sharedComponents/MissionCard";
import DefaultImage from "../../../assets/defaultMission.png";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

export const MissionsPage = () => {
  const id = useSelector((state) => state.auth.id);
  const [ongoingEvents, setOngoingEvents] = useState([]);
  const [finishedEvents, setFinishedEvents] = useState([]);
  const [ongoingPage, setOngoingPage] = useState(1);
  const [finishedPage, setFinishedPage] = useState(1);

  useEffect(() => {
    axiosInstance
      .get(
        `/events/by_admin_and_status?adminId=${id}&status=ONGOING&offset=${
          ongoingPage - 1
        }&pageSize=3`
      )
      .then((res) => {
        setOngoingEvents(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [ongoingPage]);

  const handleOngoingChangePage = (val) => {
    if (val == -1 && ongoingPage + val > 0) setOngoinPage(ongoingPage - 1);
    if (val == 1 && ongoingEvents.length > 3) setOngoinPage(ongoingPage + 1);
  };

  useEffect(() => {
    axiosInstance
      .get(
        `/events/by_admin_and_status?adminId=${id}&status=FINISHED&offset=${
          finishedPage - 1
        }&pageSize=4`
      )
      .then((res) => {
        setFinishedEvents(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [finishedPage]);

  const handleFinishedChangePage = (val) => {
    if (val == -1 && finishedPage + val > 0) setFinishedPage(finishedPage - 1);
    if (val == 1 && finishedEvents.length > 4)
      setFinishedPage(finishedPage + 1);
  };

  return (
    <Box sx={{ width: 1, minHeight: "95vh", bgcolor: "background" }}>
      <Toolbar />
      <Box>
        <Toolbar sx={{ mt: 1 }}>
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
            Ongoing Opportunities
          </Typography>
        </Toolbar>
        <Grid container sx={{ mt: 2, px: 5 }}>
          <Grid item container direction="row" spacing={2}>
            {ongoingEvents.slice(0, 4).map((event) => {
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
        </Grid>
        <Stack direction="row" sx={{ mx: 5, mt: 1 }}>
          <Box sx={{ flexGrow: 1 }}>
            <IconButton onClick={() => handleOngoingChangePage(-1)}>
              <ArrowCircleLeftIcon
                fontSize="large"
                sx={{
                  color: "blue.light",
                  ":hover": { color: "blue.main" },
                }}
              />
            </IconButton>
          </Box>
          <IconButton onClick={() => handleOngoingChangePage(1)}>
            <ArrowCircleRightIcon
              fontSize="large"
              sx={{ color: "blue.light", ":hover": { color: "blue.main" } }}
            />
          </IconButton>
        </Stack>
      </Box>

      <Box>
        <Toolbar sx={{ mt: 1 }}>
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
            Finished Opportunities
          </Typography>
        </Toolbar>
        <Grid container sx={{ mt: 2, px: 5 }}>
          <Grid item container direction="row" spacing={2}>
            {finishedEvents.slice(0, 4).map((event) => {
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
        </Grid>
        <Stack direction="row" sx={{ mx: 5, mt: 1 }}>
          <Box sx={{ flexGrow: 1 }}>
            <IconButton onClick={() => handleFinishedChangePage(-1)}>
              <ArrowCircleLeftIcon
                fontSize="large"
                sx={{
                  color: "blue.light",
                  ":hover": { color: "blue.main" },
                }}
              />
            </IconButton>
          </Box>
          <IconButton onClick={() => handleFinishedChangePage(1)}>
            <ArrowCircleRightIcon
              fontSize="large"
              sx={{ color: "blue.light", ":hover": { color: "blue.main" } }}
            />
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
};
