import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import axiosInstance from "../../utils/axiosInstance.js";
import { useSelector } from "react-redux";

import {
  Avatar,
  Box,
  Toolbar,
  Backdrop,
  CircularProgress,
  Card,
  CardMedia,
  Button,
  Typography,
  Stack,
  Grid,
  TextField,
  Modal,
  Select,
  MenuItem,
} from "@mui/material";
import stringAvatar from "../../utils/stringAvatar.js";
import defaultBanner from "../../../assets/Banner.png";
import EditIcon from "@mui/icons-material/Edit";
import LockResetIcon from "@mui/icons-material/LockReset";
import DefaultImage from "../../../assets/defaultMission.png";
import { ProfileLabel } from "../../components/sharedComponents/ProfileLabel.jsx";
import { ChangePasswordModal } from "../../components/sharedComponents/ChangePasswordModal.jsx";
import { EditProfileModal } from "../../components/sharedComponents/EditProfileModal.jsx";
import { StatCard } from "../../components/studentComponents/StatCard.jsx";
import { MissionCard } from "../../components/sharedComponents/MissionCard.jsx";

const NameField = {
  Student: {
    username: "Username",
  },
  School: {
    username: "Name of the school",
  },
  Organiztion: {
    username: "Organization name",
  },
  Administrator: {
    username: "Username",
  },
};

export const ProfilePage = () => {
  const userId = useSelector((state) => state.auth.id);
  let { id } = useParams();
  const [passwordModal, setPasswordModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [lastEvents, setLastEvents] = useState([]);
  const [name, setName] = useState("");

  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/user/profile/${id}`)
      .then((res) => {
        setUserInfo(res.data);
      });
  }, [id]);

  useEffect(() => {
    if (userInfo) {
      setName(NameField[userInfo.role]);

      if (userInfo.role == "Student") {
        axiosInstance
          .get(`/student/finished_events`)
          .then((res) => {
            setLastEvents(res.data);
          })
          .catch((error) => console.log(error));
      }
    }
  }, [userInfo]);

  if (userInfo) {
    return (
      <Box
        sx={{
          width: 1,
          minHeight: "95vh",
          bgcolor: "pageBackground",
        }}
      >
        <Toolbar />
        <Box sx={{ m: 3, bgcolor: "pageBackground" }}>
          <Card
            sx={{
              maxWidth: 1,
              bgcolor: "secondary.main",
              borderRadius: 6,
            }}
          >
            <CardMedia
              sx={{ pb: 2 }}
              component="img"
              image={defaultBanner}
              height="1vh"
            />
            <Box sx={{ m: 1 }}>
              <Toolbar>
                <Toolbar sx={{ flexGrow: 1 }}>
                  <Avatar
                    {...stringAvatar(userInfo.username)}
                    sx={{ width: "100px", height: "100px" }}
                  />
                  <Stack sx={{ p: 4 }}>
                    <Typography variant="h5" fontWeight="bold">
                      {userInfo.username}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="gray"
                      sx={{ pt: 0.5, pl: 0.5 }}
                    >
                      {userInfo.role}
                    </Typography>
                  </Stack>
                </Toolbar>
                {userId == id && (
                  <Button
                    variant="contained"
                    startIcon={<EditIcon />}
                    onClick={(e) => setEditModal(true)}
                    sx={{
                      bgcolor: "blue.light",
                      color: "blue.contrastText",
                      px: 4,
                      py: 2,
                      fontSize: "16px",
                      borderRadius: 8,
                      ":hover": {
                        bgcolor: "blue.main",
                      },
                    }}
                  >
                    Edit Profile
                  </Button>
                )}
                {editModal && (
                  <EditProfileModal
                    userInfo={userInfo}
                    setUserInfo={setUserInfo}
                    setModal={setEditModal}
                  />
                )}
                {userId == id && (
                  <Button
                    variant="contained"
                    startIcon={<LockResetIcon />}
                    onClick={() => setPasswordModal(true)}
                    sx={{
                      bgcolor: "blue.light",
                      color: "blue.contrastText",
                      px: 4,
                      py: 2,
                      ml: 2,
                      fontSize: "16px",
                      borderRadius: 8,
                      ":hover": {
                        bgcolor: "blue.main",
                      },
                    }}
                  >
                    Change Password
                  </Button>
                )}
                {passwordModal && (
                  <ChangePasswordModal setModal={setPasswordModal} />
                )}
              </Toolbar>
            </Box>
          </Card>
          <Box
            sx={{
              py: 2,
              px: 3,
              my: 2,
              bgcolor: "white.main",
              borderRadius: 6,
              boxShadow: 2,
            }}
          >
            <Typography variant="h6" fontWeight="bold" sx={{ pt: 2 }}>
              Account Information
            </Typography>
            <Grid container sx={{ px: 2, pt: 2, pb: 4 }} spacing={3}>
              <Grid item container direction="row" spacing={3}>
                <Grid item xs={12} lg={6}>
                  <ProfileLabel
                    text={name.username}
                    value={userInfo.username}
                    disabled={true}
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <ProfileLabel
                    text={"Email"}
                    value={userInfo.email}
                    disabled={true}
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <ProfileLabel
                    text={"Location"}
                    value={`${userInfo.location.city}, ${userInfo.location.country}`}
                    disabled={true}
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <ProfileLabel
                    text={"Phone Number"}
                    value={userInfo.phoneNumber}
                    disabled={true}
                  />
                </Grid>
              </Grid>
              {userInfo.role == "School" && (
                <Grid item container direction="row" spacing={3}>
                  <Grid item xs={12} lg={6}>
                    <ProfileLabel
                      text={"Objective Type"}
                      value={
                        userInfo.objectiveType == "HOURS"
                          ? "Working Hours"
                          : "Participating Events"
                      }
                      disabled={true}
                    />
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <ProfileLabel
                      text={"Objective"}
                      value={userInfo.objective}
                      disabled={true}
                    />
                  </Grid>
                </Grid>
              )}
              {userInfo.role == "Student" && (
                <Grid item container direction="row" spacing={3} sx={{ my: 1 }}>
                  <Grid item xs={12} lg={4}>
                    <StatCard
                      title="Events completed"
                      total={userInfo.eventsCompleted}
                    />
                  </Grid>
                  <Grid item xs={12} lg={4}>
                    <StatCard
                      title="Economic Value"
                      total={`${userInfo.economicValue} $`}
                    />
                  </Grid>
                  <Grid item xs={12} lg={4}>
                    <StatCard
                      title="Hours Worked"
                      total={userInfo.hoursWorked}
                    />
                  </Grid>
                </Grid>
              )}
              <Grid item xs={12}>
                <ProfileLabel
                  text={"Bio"}
                  rows={5}
                  value={userInfo.bio ? userInfo.bio : "No bio"}
                  disabled={true}
                />
              </Grid>
            </Grid>
            {userInfo.role == "Student" && (
              <Box>
                <Typography variant="h6" fontWeight="bold" sx={{ pt: 2 }}>
                  Last events attended
                </Typography>
                <Grid container direction="row" spacing={2} sx={{ my: 2 }}>
                  {lastEvents.slice(0, 4).map((data) => {
                    return (
                      <Grid item xs={12} md={6} lg={3} key={data.event.id}>
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
                                  data.event.photoUrl
                                }`
                          }
                        />
                      </Grid>
                    );
                  })}
                </Grid>
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
