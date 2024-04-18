import { useState } from "react";
import axiosInstance from "../../utils/axiosInstance";

import { Box, Toolbar, Typography, Grid, Button } from "@mui/material";
import { TextInput } from "../../components/sharedComponents/TextInput";

const adminFields = ["username", "email", "phoneNumber"];

export const CreateAdminPage = () => {
  const [admin, setAdmin] = useState({
    username: "",
    email: "",
    phoneNumber: "",
  });
  const [adminError, setAdminError] = useState({
    username: false,
    email: false,
    phoneNumber: false,
  });

  const updateAdmin = (e) => {
    setAdmin({ ...admin, [e.target.id]: e.target.value });
    setAdminError({ ...adminError, [e.target.id]: false });
  };

  const validate = () => {
    let error = false;

    for (let i = 0; i < adminFields.length; i++) {
      if (admin[adminFields[i]] == "") {
        setAdminError((prev) => ({
          ...prev,
          [adminFields[i]]: true,
        }));
        error = true;
      }
    }

    return !error;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    axiosInstance
      .post(`/super_admin/create_admin`, {
        username: admin.username,
        email: admin.email,
        phoneNumber: admin.phoneNumber,
      })
      .then((res) => {
        console.log("success");
        setAdmin({
          username: "",
          email: "",
          phoneNumber: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box sx={{ width: 1, minHeight: "95vh", bgcolor: "pageBackground" }}>
      <Toolbar />
      <Box sx={{ m: 4 }}>
        <Box sx={{ p: 2, bgcolor: "white.main", borderRadius: 5 }}>
          <Typography
            variant="h4"
            fontWeight="700"
            sx={{
              fontSize: {
                xs: "22px",
                lg: "26px",
                xl: "30px",
              },
            }}
          >
            Create Admin
          </Typography>
          <Box sx={{ my: 3 }}>
            <Grid container spacing={3}>
              {adminFields.map((field) => {
                return (
                  <Grid item xs={12} key={field}>
                    <TextInput
                      id={field}
                      name={field}
                      value={admin[field]}
                      error={adminError[field]}
                      updateFormData={updateAdmin}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Box>

          <Button
            variant="contained"
            sx={{
              bgcolor: "blue.light",
              color: "blue.contrastText",
              px: 4,
              py: 2,
              fontSize: "18px",
              borderRadius: 8,
              textTransform: "none",
              ":hover": {
                bgcolor: "blue.main",
              },
            }}
            onClick={handleSubmit}
          >
            Create Admin
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
