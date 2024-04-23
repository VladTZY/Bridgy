import axios from "axios";
import {
  Modal,
  Box,
  Typography,
  Divider,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white.main",
  borderRadius: 6,
  boxShadow: 24,
  p: 4,
};

export const EditProfileModal = ({ userInfo, setUserInfo, setModal }) => {
  const onClickHandler = () => {
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
    setModal(false);
  };

  return (
    <Modal
      open={true}
      onClose={() => setModal(false)}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{ ...style, width: 800 }}>
        <Typography fontWeight="bold" variant="h5">
          Edit Profile
        </Typography>
        <Divider color="black" sx={{ mt: 2 }} />
        <TextField
          id="outlined-basic"
          label="Phone Number"
          variant="outlined"
          color="blue"
          value={userInfo.phoneNumber}
          onChange={(e) =>
            setUserInfo({
              ...userInfo,
              phoneNumber: e.target.value,
            })
          }
          sx={{
            mt: 2,
            width: 1,
            input: {
              color: "black",
              fontWeight: 400,
            },
          }}
        ></TextField>
        {userInfo.role == "SCHOOL" && (
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel color="blue">Objective Type</InputLabel>
            <Select
              label="Objective Type"
              value={userInfo.objectiveType}
              onChange={(e) =>
                setUserInfo({
                  ...userInfo,
                  objectiveType: e.target.value,
                })
              }
              color="blue"
              sx={{
                input: {
                  color: "black",
                  fontWeight: 650,
                },
              }}
            >
              <MenuItem value={"EVENT"}>Participating Events</MenuItem>
              <MenuItem value={"HOURS"}>Working Hours</MenuItem>
            </Select>
          </FormControl>
        )}
        {userInfo.role == "SCHOOL" && (
          <TextField
            id="outlined-basic"
            label="Objective"
            variant="outlined"
            color="blue"
            value={userInfo.objective}
            onChange={(e) =>
              setUserInfo({
                ...userInfo,
                objective: e.target.value,
              })
            }
            sx={{
              mt: 2,
              width: 1,
              input: {
                color: "black",
                fontWeight: 350,
              },
            }}
          ></TextField>
        )}
        <TextField
          id="outlined-basic"
          label="Bio"
          variant="outlined"
          color="blue"
          value={userInfo.bio}
          multiline
          rows={5}
          onChange={(e) =>
            setUserInfo({
              ...userInfo,
              bio: e.target.value,
            })
          }
          sx={{
            mt: 2,
            width: 1,
            input: {
              color: "black",
              fontWeight: 650,
            },
          }}
        ></TextField>
        <Button
          onClick={onClickHandler}
          variant="contained"
          sx={{
            bgcolor: "blue.light",
            color: "blue.contrastText",
            px: 4,
            py: 2,
            mt: 2,
            width: 1,
            fontSize: "16px",
            borderRadius: 8,
            ":hover": {
              bgcolor: "blue.main",
            },
          }}
        >
          Save Changes
        </Button>
      </Box>
    </Modal>
  );
};
