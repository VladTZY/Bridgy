import axiosInstance from "../../utils/axiosInstance";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";

import {
  Box,
  Button,
  Stack,
  Toolbar,
  Typography,
  IconButton,
  Icon,
  Grid,
  Select,
} from "@mui/material";
import { MissionCard } from "../../components/sharedComponents/MissionCard";
import { BarCard } from "../../components/sharedComponents/BarCard";
import DefaultImage from "../../../assets/defaultMission.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

export const OrganizationDashboardPage = () => {
  const id = useSelector((state) => state.auth.id);
  const [ongoingEvents, setOngoingEvents] = useState([]);
  const [publishedEvents, setPublishedEvents] = useState([]);
  const [ongoingPage, setOngoinPage] = useState(1);
  const [upcomingPage, setUpcomingPage] = useState(1);

  useEffect(() => {
    axiosInstance
      .get(
        `/events/by_admin_and_status?adminId=${id}&status=PUBLISHED&offset=${
          upcomingPage - 1
        }&pageSize=4`
      )
      .then((res) => {
        setPublishedEvents(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [upcomingPage]);

  const handleUpcomingChangePage = (val) => {
    if (val == -1 && upcomingPage + val > 0) setUpcomingPage(upcomingPage - 1);
    if (val == 1 && publishedEvents.length > 4)
      setUpcomingPage(upcomingPage + 1);
  };

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

  return (
    <Box sx={{ width: 1, minHeight: "95vh", bgcolor: "background" }}>
      {/*Lasam spatiu pt navbar*/}
      <Toolbar />
      {/*Butoanele de sus*/}
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
          Upcoming Opportunities
        </Typography>

        <Link to="/organization/post_opportunities">
          <Button
            variant="contained"
            sx={{
              bgcolor: "blue.light",
              color: "blue.contrastText",
              px: 3,
              py: 1,
              fontSize: {
                lg: "16px",
                xl: "21px",
              },
              borderRadius: 6,
              textTransform: "none",
              ":hover": {
                bgcolor: "blue.main",
              },
            }}
          >
            Add new
          </Button>
        </Link>
      </Toolbar>
      {/*Lista de carduri*/}
      <Grid container sx={{ mt: 2, px: 2 }}>
        <Grid item container direction="row" spacing={2}>
          {publishedEvents.slice(0, 4).map((event) => {
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
      <Stack direction="row" sx={{ mx: 2, mt: 1 }}>
        <Box sx={{ flexGrow: 1 }}>
          <IconButton onClick={() => handleUpcomingChangePage(-1)}>
            <ArrowCircleLeftIcon
              fontSize="large"
              sx={{
                color: "blue.light",
                ":hover": { color: "blue.main" },
              }}
            />
          </IconButton>
        </Box>
        <IconButton onClick={() => handleUpcomingChangePage(1)}>
          <ArrowCircleRightIcon
            fontSize="large"
            sx={{ color: "blue.light", ":hover": { color: "blue.main" } }}
          />
        </IconButton>
      </Stack>

      <Box
        sx={{
          my: 2,
          mx: 2,
          bgcolor: "primary.main",
          borderRadius: "16px",
          pb: 2,
        }}
      >
        <Toolbar disableGutters>
          <Typography
            variant="h4"
            fontWeight="700"
            sx={{
              px: 4,
              pt: 2,
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
          <Toolbar>
            <IconButton onClick={() => handleOngoingChangePage(-1)}>
              <ArrowBackIosIcon
                sx={{ color: "blue.light", ":hover": { color: "blue.main" } }}
              />
            </IconButton>
            <IconButton onClick={() => handleOngoingChangePage(1)}>
              <ArrowForwardIosIcon
                sx={{ color: "blue.light", ":hover": { color: "blue.main" } }}
              />
            </IconButton>
          </Toolbar>
        </Toolbar>
        {ongoingEvents.slice(0, 3).map((event) => {
          return (
            <BarCard
              key={event.id}
              id={event.id}
              title={event.name}
              location={event.location}
              description={event.description}
            />
          );
        })}
      </Box>
    </Box>
  );
};
