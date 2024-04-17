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
  Modal,
  Select,
  MenuItem,
} from "@mui/material";
import stringAvatar from "../../utils/stringAvatar.js";
import defaultBanner from "../../../assets/Banner.png";
import EditIcon from "@mui/icons-material/Edit";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import LockResetIcon from "@mui/icons-material/LockReset";
import { ProfileLabel } from "../../components/sharedComponents/ProfileLabel.jsx";
import { ChangePasswordModal } from "../../components/sharedComponents/ChangePasswordModal.jsx";

const ButtonSwitch = {
  true: {
    startIcon: EditIcon,
    text: "Edit Profile",
  },
  false: {
    startIcon: SaveAltIcon,
    text: "Save Profile",
  },
};

const NameField = {
  STUDENT: {
    username: "Username",
  },
  SCHOOL: {
    username: "Name of the school",
  },
  ORGANIZATION: {
    username: "Organization name",
  },
};

const AdditionalInformation = {
  STUDENT: {
    label1: "Full Name",
    label2: "School Name",
  },
  SCHOOL: {
    label1: "Objective Type",
    label2: "Objective",
  },
};

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
    console.log(userInfo.phoneNumber);
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

  const button = ButtonSwitch[isDisabled];
  const name = NameField[userInfo.role];

  if (userInfo.email) {
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
                    startIcon={<button.startIcon />}
                    onClick={onClickHandler}
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
                    {button.text}
                  </Button>
                )}
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
                    setValue={setUserInfo}
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
                    disabled={isDisabled}
                    setValue={(e) =>
                      setUserInfo({
                        ...userInfo,
                        phoneNumber: e.target.value,
                      })
                    }
                  />
                </Grid>
              </Grid>
              {userInfo.role == "SCHOOL" && (
                <Grid item container direction="row" spacing={3}>
                  <Grid item xs={12} lg={6}>
                    <Stack direction="column">
                      <Typography variant="h8" fontWeight="bold" color="gray">
                        Objective Type
                      </Typography>
                      <Select
                        inputProps={{ readOnly: isDisabled }}
                        value={userInfo.objectiveType}
                        onChange={(e) =>
                          setUserInfo({
                            ...userInfo,
                            objectiveType: e.target.value,
                          })
                        }
                        color="secondary"
                        sx={{
                          mt: 0.5,
                          input: {
                            color: "black",
                            fontWeight: 650,
                          },
                        }}
                        MenuProps={{
                          children: { bgcolor: "white.main" },
                        }}
                      >
                        <MenuItem value={"EVENT"}>
                          Participating Events
                        </MenuItem>
                        <MenuItem value={"HOURS"}>Working Hours</MenuItem>
                      </Select>
                    </Stack>
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <ProfileLabel
                      text={"Objective"}
                      value={userInfo.objective}
                      disabled={isDisabled}
                      setValue={(e) =>
                        setUserInfo({
                          ...userInfo,
                          objective: e.target.value,
                        })
                      }
                    />
                  </Grid>
                </Grid>
              )}
              <Grid item xs={12}>
                <ProfileLabel
                  text={"Bio"}
                  rows={5}
                  value={userInfo.bio ? userInfo.bio : "No bio"}
                  disabled={isDisabled}
                  setValue={(e) =>
                    setUserInfo({
                      ...userInfo,
                      bio: e.target.value,
                    })
                  }
                />
              </Grid>
            </Grid>
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
