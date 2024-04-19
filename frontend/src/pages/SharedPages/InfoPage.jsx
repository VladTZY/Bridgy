import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import axiosInstance from "../../utils/axiosInstance";
import {
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  Toolbar,
  Grid,
} from "@mui/material";
import { OrganizationFinishedMoreInfo } from "../../components/organizationComponents/OrganizationFinishedMoreInfo";
import { OrganizationPublishedMoreInfo } from "../../components/organizationComponents/OrganizationPublishedMoreInfo";
import { OrganizationOngoingMoreInfo } from "../../components/organizationComponents/OrganizationOngoingMoreInfo";
import { StudentPublishedMoreInfo } from "../../components/studentComponents/StudentPublishedMoreInfo";
import { StudentFinishedMoreInfo } from "../../components/studentComponents/StudentFinishedMoreInfo";
import { StudentOngoingMoreInfo } from "../../components/studentComponents/StudentOngoingMoreInfo";
import { StudentAcceptedMoreInfo } from "../../components/studentComponents/StudentAcceptedMoreInfo";
import { StudentRequestedMoreInfo } from "../../components/studentComponents/StudentRequestedMoreInfo";
import DateRangeIcon from "@mui/icons-material/DateRange";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import GroupIcon from "@mui/icons-material/Group";
import DefaultImage from "../../../Bridgy_Assets/Images/Missions/defaultMission.png";

import { RequestsTable } from "../../components/organizationComponents/RequestsTable";

import datetimeToStr from "../../utils/datetimeToStr";

export const InfoPage = () => {
  let history = useNavigate();
  const role = useSelector((state) => state.auth.role);
  const [isAdmin, setIsAdmin] = useState(false);
  const { id } = useParams();
  const [event, setEvent] = useState({
    name: "",
    description: "",
    hours: null,
    time: new Date(),
    capacity: 0,
    country: "",
    city: "",
    latitude: null,
    longitude: null,
    photoUrl: "",
    location: ("", ""),
    status: "",
  });
  const [locationName, setLocationName] = useState("");

  useEffect(() => {
    if (role == "ORGANIZATION") {
      axiosInstance
        .get(`/organization/check_admin?eventId=${id}`)
        .then((res) => {
          setIsAdmin(res.data.isAdmin);
        })
        .catch((error) => console.log(error));
    }

    axiosInstance
      .get(`/events/id?id=${id}`)
      .then((res) => {
        setEvent(res.data);

        if (res.data.remote) setLocationName("Remote");
        else
          setLocationName(
            res.data.location.country + ", " + res.data.location.city
          );
      })
      .catch((error) => console.log(error));
  }, [id, role]);

  const deleteMission = () => {
    axiosInstance
      .post(`/organization/hide_event?eventId=${id}`, {})
      .then((res) => {
        history(-1);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Box sx={{ width: 1, bgcolor: "background" }}>
      <Toolbar />
      <Card sx={{ m: 4, bgcolor: "white.main", borderRadius: 10 }}>
        <CardMedia
          sx={{ height: 500 }}
          image={
            event.photoUrl == "NO_FILE"
              ? DefaultImage
              : `${import.meta.env.VITE_MISSIONS_BUCKET_URL}${event.photoUrl}`
          }
        />
        <CardContent>
          <Typography variant="h3" component="div" sx={{ textAlign: "center" }}>
            {event.name}
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ textAlign: "center" }}
          >
            {event.description}
          </Typography>
          <Grid item container direction="row" spacing={1} sx={{ mt: 2 }}>
            <Grid item xs={12} lg={6}>
              <Box
                sx={{
                  border: 1,
                  borderColor: "gray",
                  borderRadius: 4,
                  textAlign: "center",
                  p: 1,
                }}
              >
                <DateRangeIcon sx={{ color: "blue.main", mr: 1 }} />
                <Typography variant="h7">
                  {datetimeToStr(event.time)}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Box
                sx={{
                  border: 1,
                  borderColor: "gray",
                  borderRadius: 4,
                  textAlign: "center",
                  p: 1,
                }}
              >
                <LocationOnIcon sx={{ color: "blue.main", mr: 1 }} />
                <Typography variant="h7">{locationName}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Box
                sx={{
                  border: 1,
                  borderColor: "gray",
                  borderRadius: 4,
                  textAlign: "center",
                  p: 1,
                }}
              >
                <AccessTimeIcon sx={{ color: "blue.main", mr: 1 }} />
                <Typography variant="h7">{event.hours} hours</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Box
                sx={{
                  border: 1,
                  borderColor: "gray",
                  borderRadius: 4,
                  textAlign: "center",
                  p: 1,
                }}
              >
                <GroupIcon sx={{ color: "blue.main", mr: 1 }} />
                <Typography variant="h7">{event.capacity} places</Typography>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      {role == "STUDENT" ? (
        event.status == "PUBLISHED" ? (
          <StudentPublishedMoreInfo
            eventId={id}
            placesLeft={event.placesLeft}
          />
        ) : event.status == "STUDENT_FINISHED" ? (
          <StudentFinishedMoreInfo eventId={id} />
        ) : event.status == "STUDENT_ONGOING" ? (
          <StudentOngoingMoreInfo />
        ) : event.status == "STUDENT_ACCEPTED" ? (
          <StudentAcceptedMoreInfo />
        ) : (
          <StudentRequestedMoreInfo />
        )
      ) : isAdmin ? (
        event.status == "PUBLISHED" ? (
          <OrganizationPublishedMoreInfo eventId={id} />
        ) : event.status == "FINISHED" ? (
          <OrganizationFinishedMoreInfo eventId={id} />
        ) : (
          <OrganizationOngoingMoreInfo eventId={id} />
        )
      ) : (
        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h5"
            component="div"
            sx={{ textAlign: "center", mb: 2 }}
          >
            You cannot access this event!
          </Typography>
        </Box>
      )}
    </Box>
  );
};
