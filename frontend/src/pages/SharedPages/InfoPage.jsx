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
import CategoryIcon from "@mui/icons-material/Category";
import DefaultImage from "../../../Bridgy_Assets/Images/Missions/defaultMission.png";
import Image from "mui-image";

import ReactPlayer from "react-player";

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
    category: "",
    videoUrl: "",
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
        <CardContent>
          <Grid container direction="row" spacing={6}>
            <Grid item xs={12} lg={6} sx={{ height: { xl: false, lg: 300 } }}>
              <Image
                sx={{ borderRadius: 6 }}
                src={
                  event.photoUrl == "NO_FILE"
                    ? DefaultImage
                    : `${import.meta.env.VITE_MISSIONS_BUCKET_URL}${
                        event.photoUrl
                      }`
                }
              ></Image>
            </Grid>
            <Grid
              item
              container
              xs={12}
              lg={6}
              direction="column"
              sx={{ justifyContent: "space-between" }}
            >
              <Grid item>
                <Box
                  sx={{
                    border: 1,
                    borderColor: "gray",
                    borderRadius: 4,
                    p: { lg: 1, xl: 2 },
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: {
                        lg: "26px",
                        xl: "36px",
                      },
                    }}
                  >
                    <CategoryIcon
                      fontSize="large"
                      sx={{ color: "blue.main", mr: 1 }}
                    />
                    {event.category}
                  </Typography>
                </Box>
              </Grid>
              <Grid item>
                <Box
                  sx={{
                    border: 1,
                    borderColor: "gray",
                    borderRadius: 4,
                    p: { lg: 1, xl: 2 },
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: {
                        lg: "26px",
                        xl: "36px",
                      },
                    }}
                  >
                    <DateRangeIcon
                      fontSize="large"
                      sx={{ color: "blue.main", mr: 1 }}
                    />
                    {datetimeToStr(event.datetime)}
                  </Typography>
                </Box>
              </Grid>
              <Grid item>
                <Box
                  sx={{
                    border: 1,
                    borderColor: "gray",
                    borderRadius: 4,
                    p: { lg: 1, xl: 2 },
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: {
                        lg: "26px",
                        xl: "36px",
                      },
                    }}
                  >
                    <LocationOnIcon
                      fontSize="large"
                      sx={{ color: "blue.main", mr: 1 }}
                    />
                    {locationName}
                  </Typography>
                </Box>
              </Grid>
              <Grid item>
                <Box
                  sx={{
                    border: 1,
                    borderColor: "gray",
                    borderRadius: 4,
                    p: { lg: 1, xl: 2 },
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: {
                        lg: "26px",
                        xl: "36px",
                      },
                    }}
                  >
                    <AccessTimeIcon
                      fontSize="large"
                      sx={{ color: "blue.main", mr: 1 }}
                    />
                    {event.hours} hours
                  </Typography>
                </Box>
              </Grid>
              <Grid item>
                <Box
                  sx={{
                    border: 1,
                    borderColor: "gray",
                    borderRadius: 4,
                    p: { lg: 1, xl: 2 },
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: {
                        lg: "26px",
                        xl: "36px",
                      },
                    }}
                  >
                    <GroupIcon
                      fontSize="large"
                      sx={{ color: "blue.main", mr: 1 }}
                    />
                    {event.capacity} openings
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{
              mt: 4,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Grid item>
              <Typography
                sx={{
                  fontSize: {
                    lg: "40px",
                    xl: "60px",
                  },
                }}
              >
                {event.name}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                sx={{
                  fontSize: {
                    lg: "20px",
                    xl: "30px",
                  },
                }}
              >
                Posted by: "organization name"
              </Typography>
            </Grid>
          </Grid>
          <Typography
            color="text.secondary"
            sx={{
              fontSize: {
                lg: "15px",
                xl: "20px",
              },
              mx: 2,
            }}
          >
            {event.description}
          </Typography>
          {event.videoUrl != "NO_VIDEO" && (
            <Box sx={{ m: 2 }}>
              <ReactPlayer
                width="50%"
                playing={false}
                url={event.videoUrl}
                muted={false}
              />
            </Box>
          )}
          {isAdmin && (
            <Grid container sx={{ mt: 2, justifyContent: "end" }}>
              <Button
                onClick={deleteMission}
                sx={{
                  px: { lg: 2, xl: 4 },
                  py: { lg: 1, xl: 2 },
                  bgcolor: "red.light",
                  textTransform: "none",
                  ":hover": { bgcolor: "red.main" },
                  borderRadius: 10,
                }}
              >
                <Typography
                  color="white.main"
                  sx={{ fontSize: { lg: "15px", xl: "25px" } }}
                >
                  Delete event
                </Typography>
              </Button>
            </Grid>
          )}
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
