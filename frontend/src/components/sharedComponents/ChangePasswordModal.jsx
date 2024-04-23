import { useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import {
  Modal,
  Box,
  Typography,
  Divider,
  TextField,
  Button,
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

export const ChangePasswordModal = ({ setModal }) => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const changePassword = () => {
    if (newPassword != confirmPassword) {
      console.log("Passwords don t match");
      setModal(false);
      return;
    }

    axiosInstance
      .put(`/user/change_password`, {
        password,
        newPassword,
      })
      .catch((err) => console.log(err));
    setModal(false);
  };

  return (
    <Modal
      open={true}
      onClose={() => setModal(false)}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{ ...style, width: 400 }}>
        <Typography fontWeight="bold" variant="h5">
          Change Password
        </Typography>
        <Divider color="black" sx={{ mt: 2 }} />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          color="blue"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            mt: 2,
            width: 1,
            input: {
              color: "black",
              fontWeight: 650,
            },
          }}
        ></TextField>
        <TextField
          id="outlined-basic"
          label="New Password"
          variant="outlined"
          color="blue"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          sx={{
            mt: 2,
            width: 1,
            input: {
              color: "black",
              fontWeight: 650,
            },
          }}
        ></TextField>
        <TextField
          id="outlined-basic"
          label="Confirm New Password"
          variant="outlined"
          color="blue"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
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
          onClick={() => changePassword()}
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
          Save Change
        </Button>
      </Box>
    </Modal>
  );
};
