import axiosInstance from "../../utils/axiosInstance";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

import { Box, Button, Toolbar, Typography } from "@mui/material";
import { MissionCard } from "../../components/sharedComponents/MissionCard";

export const OrganizationDashboardPage = () => {
  const id = useSelector((state) => state.auth.id);
  const organizationId = useSelector((state) => state.auth.institutionId);
  const [ongoingEvents, setOngoingEvents] = useState([]);
  const [publishedEvents, setPublishedEvents] = useState([]);
  const [finishedEvents, setFinishedEvents] = useState([]);
  const [ongoingPage, setOngoinPage] = useState(1);
  const [upcomingPage, setUpcomingPage] = useState(1);
  const [finishedPage, setFinishedPage] = useState(1);

  useEffect(() => {
    axiosInstance
      .get(
        `/events/by_admin_and_status?adminId=${id}&status=ONGOING&offset=${
          ongoingPage - 1
        }&pageSize=4`
      )
      .then((res) => {
        setOngoingEvents(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [organizationId, ongoingPage]);

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
  }, [organizationId, upcomingPage]);

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
  }, [organizationId, finishedPage]);

  const handleOngoingChangePage = (val) => {
    if (val == -1 && ongoingPage + val > 0) setOngoinPage(ongoingPage - 1);
    if (val == 1 && ongoingEvents.length > 4) setOngoinPage(ongoingPage + 1);
  };

  const handleUpcomingChangePage = (val) => {
    if (val == -1 && upcomingPage + val > 0) setUpcomingPage(upcomingPage - 1);
    if (val == 1 && publishedEvents.length > 4)
      setUpcomingPage(upcomingPage + 1);
  };

  const handleFinishedChangePage = (val) => {
    if (val == -1 && finishedPage + val > 0) setFinishedPage(finishedPage - 1);
    if (val == 1 && finishedEvents.length > 4)
      setFinishedPage(finishedPage + 1);
  };

  return (
    <Box sx={{ width: 1 }}>
      {/*Lasam spatiu pt navbar*/}
      <Toolbar />
      {/*Butoanele de sus*/}
      <Toolbar sx={{ mt: 4 }}>
        <Typography variant="h4" fontWeight="550" sx={{ flexGrow: 1 }}>
          Ongoing Events
        </Typography>
        <Button
          variant="contained"
          sx={{ bgcolor: "blue.light", color: "blue.contrastText" }}
        >
          Add new
        </Button>
      </Toolbar>
      {/*Lista de carduri*/}
      <Toolbar sx={{ mt: 4 }}>
        <MissionCard />
        <MissionCard />
        <MissionCard />
        <MissionCard />
      </Toolbar>
    </Box>
  );
};
