import { useState, useEffect } from "react";
import axiosInstance from "../../utils/axiosInstance";

import {
  Box,
  Grid,
  Toolbar,
  Typography,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import { BarCard2 } from "../../components/sharedComponents/BarCard2";
import AlarmIcon from "@mui/icons-material/Alarm";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import PendingIcon from "@mui/icons-material/Pending";
import { ProgressCard } from "../../components/sharedComponents/ProgressCard";

export const StudentDashboardPage = () => {
  const [ongoingEvents, setOngoingEvents] = useState([]);
  const [requestedEvents, setRequestedEvents] = useState([]);
  const [acceptedEvents, setAcceptedEvents] = useState([]);
  const [cardsData, setCardsData] = useState(null);

  useEffect(() => {
    axiosInstance
      .get(`/student/accepted_events`)
      .then((res) => {
        setAcceptedEvents(res.data);
      })
      .catch((error) => console.log(error));

    axiosInstance
      .get(`/student/ongoing_events`)
      .then((res) => {
        setOngoingEvents(res.data);
      })
      .catch((error) => console.log(error));

    axiosInstance
      .get(`/student/requested_events`)
      .then((res) => {
        setRequestedEvents(res.data);
      })
      .catch((error) => console.log(error));

    axiosInstance
      .get("/student/card_stats")
      .then((res) => setCardsData(res.data))
      .catch((error) => console.log(error));
  }, []);

  if (cardsData) {
    return (
      <Box sx={{ width: 1, minHeight: "95vh", bgcolor: "pageBackground" }}>
        <Toolbar />
        <Box sx={{ mx: 3, mt: 5 }}>
          <Grid container direction="row" spacing={3} sx={{ mb: 3 }}>
            <Grid item xs={12} lg={4}>
              <ProgressCard
                title="Objective Progress"
                value={`${cardsData.actualObjective} / ${cardsData.objective}`}
                percentage={cardsData.objectivePercentage}
                percentageText={cardsData.objectivePercentage + "%"}
                color="green"
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <ProgressCard
                title="Completed Events"
                value={`${cardsData.eventsCompleted} / ${cardsData.eventsTotal}`}
                percentage={cardsData.eventsPrecentage}
                percentageText={cardsData.eventsPrecentage + "%"}
                color="orange"
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <ProgressCard
                title="Completed hours"
                value={`${cardsData.hoursCompleted} / ${cardsData.hoursTotal}`}
                percentage={cardsData.hoursPrecentage}
                percentageText={cardsData.hoursPrecentage + "%"}
                color="lightskyblue"
              />
            </Grid>
          </Grid>
          <Box>
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
              Ongoing Events
            </Typography>

            {ongoingEvents.length == 0 ? (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6" sx={{ mt: 1 }}>
                  You have no ongoing events
                </Typography>
              </Box>
            ) : (
              <Box sx={{ mx: 1, my: 2 }}>
                {ongoingEvents.slice(0, 3).map((event) => {
                  return (
                    <BarCard2
                      key={event.event.id}
                      id={event.event.id}
                      title={event.event.name}
                      description={event.event.description}
                      location={event.event.location}
                      icon={
                        <AlarmIcon
                          sx={{ color: "blue.main", fontSize: "30px" }}
                        />
                      }
                    />
                  );
                })}
              </Box>
            )}
          </Box>
          <Box sx={{ mt: 4 }}>
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
              Upcoming Events
            </Typography>

            {acceptedEvents.length == 0 ? (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6" sx={{ mt: 1 }}>
                  You have no upcoming events
                </Typography>
              </Box>
            ) : (
              <Box sx={{ mx: 1, my: 2 }}>
                {acceptedEvents.slice(0, 3).map((event) => {
                  return (
                    <BarCard2
                      key={event.event.id}
                      id={event.event.id}
                      title={event.event.name}
                      description={event.event.description}
                      location={event.event.location}
                      icon={
                        <CheckCircleOutlineIcon
                          sx={{ color: "green.light", fontSize: "30px" }}
                        />
                      }
                    />
                  );
                })}
              </Box>
            )}
          </Box>
          <Box sx={{ mt: 4 }}>
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
              Requested Events
            </Typography>

            {requestedEvents.length == 0 ? (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6" sx={{ mt: 1 }}>
                  You didn't request to join any event
                </Typography>
              </Box>
            ) : (
              <Box sx={{ mx: 1, my: 2 }}>
                {requestedEvents.slice(0, 3).map((event) => {
                  return (
                    <BarCard2
                      key={event.event.id}
                      id={event.event.id}
                      title={event.event.name}
                      description={event.event.description}
                      location={event.event.location}
                      icon={
                        <PendingIcon
                          sx={{ color: "orange", fontSize: "30px" }}
                        />
                      }
                    />
                  );
                })}
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    );
  }

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
};
