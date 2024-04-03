import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
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
} from "@mui/material";
import stringAvatar from "../../utils/stringAvatar.js";
import defaultBanner from "../../../assets/Banner.png";
import EditIcon from "@mui/icons-material/Edit";
import { ProfileLabel } from "../../components/sharedComponents/ProfileLabel.jsx";

export const ProfilePage = () => {
  const userId = useSelector((state) => state.auth.id);
  let { id } = useParams();
  const [isDisabled, setIsDisabled] = useState(true);
  const [passwordModal, setPasswordModal] = useState(false);

  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    role: "",
    bio: "",
    location: {
      country: "",
      city: "",
    },
    schoolName: "",
    objective: null,
    objectiveType: null,
  });

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/user/profile/${id}`)
      .then((res) => {
        setUserInfo(res.data);
      });
  }, [id]);

  const onClickHandler = () => {
    if (!isDisabled) {
      let payload = { bio: userInfo.bio, phoneNumber: userInfo.phoneNumber };

      if (userInfo.role == "SCHOOL") {
        payload.objective = userInfo.objective;
        payload.objectiveType = userInfo.objectiveType;
      }

      axios
        .put(`${import.meta.env.VITE_API_URL}/user/update_profile`, payload, {
          withCredentials: true,
        })
        .then((res) => {
          setUserInfo({
            ...userInfo,
            bio: res.data.bio,
            phoneNumber: res.data.phoneNumber,
          });
        });
    }
    setIsDisabled(!isDisabled);
  };

  if (userInfo.email) {
    return (
      <Box
        sx={{
          width: 1,
          minHeight: "95vh",
          bgcolor: "background",
        }}
      >
        <Toolbar />
        <Box sx={{ m: 4, bgcolor: "white.main", borderRadius: 2 }}>
          <Card
            sx={{
              maxWidth: 1,
              bgcolor: "primary.main",
              borderRadius: 2,
            }}
          >
            <CardMedia
              sx={{ pb: 2 }}
              component="img"
              image={defaultBanner}
              height="1vh"
            />
            <Box>
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
                    Edit profile
                  </Button>
                )}
              </Toolbar>
            </Box>
          </Card>
          <Box sx={{ my: 2, mx: 3 }}>
            <Typography variant="h6" fontWeight="bold" sx={{ pt: 2 }}>
              Account Information
            </Typography>
            <Grid container sx={{ px: 2, pt: 2, pb: 4 }} spacing={3}>
              <Grid item container direction="row" spacing={3}>
                <Grid item xs={12} lg={6}>
                  <ProfileLabel text={"Username"} value={userInfo.username} />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <ProfileLabel text={"Email"} value={userInfo.email} />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <ProfileLabel
                    text={"Location"}
                    value={`${userInfo.location.city}, ${userInfo.location.country}`}
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <ProfileLabel
                    text={"Phone Number"}
                    value={userInfo.phoneNumber}
                  />
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <ProfileLabel
                  text={"Bio"}
                  value={userInfo.bio ? userInfo.bio : "No bio"}
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={{ width: 1, minHeight: "95vh", bgcolor: "background" }}>
      <Backdrop
        open={true}
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Box>
  );
};