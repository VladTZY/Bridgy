import { useState } from "react";
import axiosInstance from "../../utils/axiosInstance";

import { Box, Toolbar, Typography, Grid, Button } from "@mui/material";
import { TextInput } from "../../components/sharedComponents/TextInput";

const organizationFields = [
  "organizationName",
  "organizationEmail",
  "organizationPhoneNumber",
  "organizationCountry",
  "organizationCity",
  "username",
  "email",
  "phoneNumber",
];

export const CreateOrganizationPage = () => {
  const [organization, setOrganization] = useState({
    organizationName: "",
    organizationEmail: "",
    organizationPhoneNumber: "",
    organizationCountry: "",
    organizationCity: "",
    username: "",
    email: "",
    phoneNumber: "",
  });

  const [organizationError, setOrganizationError] = useState({
    organizationName: false,
    organizationEmail: false,
    organizationPhoneNumber: false,
    organizationCountry: false,
    organizationCity: false,
    username: false,
    email: false,
    phoneNumber: false,
  });

  const updateOrganization = (e) => {
    setOrganization({ ...organization, [e.target.id]: e.target.value });
    setOrganizationError({ ...organizationError, [e.target.id]: false });
  };

  const validate = () => {
    let error = false;

    for (let i = 0; i < organizationFields.length; i++) {
      if (organization[organizationFields[i]] == "") {
        setOrganizationError((prev) => ({
          ...prev,
          [organizationFields[i]]: true,
        }));
        error = true;
      }
    }

    return !error;
  };

  const handleSubmit = (e) => {
    if (!validate()) return;

    axiosInstance
      .post(`/admin/create_organization`, {
        organizationName: organization.organizationName,
        organizationEmail: organization.organizationEmail,
        organizationPhoneNumber: organization.organizationPhoneNumber,
        organizationCity: organization.organizationCity,
        organizationCountry: organization.organizationCountry,
        username: organization.username,
        email: organization.email,
        phoneNumber: organization.phoneNumber,
      })
      .then((res) => {
        console.log("success");
        setOrganization({
          organizationName: "",
          organizationEmail: "",
          organizationPhoneNumber: "",
          organizationCountry: "",
          organizationCity: "",
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
            Create organization
          </Typography>
          <Box sx={{ my: 3 }}>
            <Grid container spacing={3}>
              {organizationFields.map((field) => {
                return (
                  <Grid item xs={12} lg={6} key={field}>
                    <TextInput
                      id={field}
                      name={field}
                      value={organization[field]}
                      error={organizationError[field]}
                      updateFormData={updateOrganization}
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
            Create organization
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
