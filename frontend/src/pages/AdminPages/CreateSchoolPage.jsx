import { useState } from "react";
import axiosInstance from "../../utils/axiosInstance";

import { Box, Toolbar, Typography, Grid, Button } from "@mui/material";
import { TextInput } from "../../components/sharedComponents/TextInput";

const schoolFields = [
  "schoolName",
  "schoolEmail",
  "schoolPhoneNumber",
  "schoolCountry",
  "schoolCity",
  "username",
  "email",
  "phoneNumber",
];

export const CreateSchoolPage = () => {
  const [school, setSchool] = useState({
    schoolName: "",
    schoolEmail: "",
    schoolPhoneNumber: "",
    schoolCountry: "",
    schoolCity: "",
    username: "",
    email: "",
    phoneNumber: "",
  });

  const [schoolError, setSchoolError] = useState({
    schoolName: false,
    schoolEmail: false,
    schoolPhoneNumber: false,
    schoolCountry: false,
    schoolCity: false,
    username: false,
    email: false,
    phoneNumber: false,
  });

  const updateSchool = (e) => {
    setSchool({ ...school, [e.target.id]: e.target.value });
    setSchoolError({ ...schoolError, [e.target.id]: false });
  };

  const validate = () => {
    let error = false;

    for (let i = 0; i < schoolFields.length; i++) {
      if (school[schoolFields[i]] == "") {
        setSchoolError((prev) => ({
          ...prev,
          [schoolFields[i]]: true,
        }));
        error = true;
      }
    }

    return !error;
  };

  const handleSubmit = (e) => {
    if (!validate()) return;

    axiosInstance
      .post(`/admin/create_school`, {
        schoolName: school.schoolName,
        schoolEmail: school.schoolEmail,
        schoolPhoneNumber: school.schoolPhoneNumber,
        schoolCity: school.schoolCity,
        schoolCountry: school.schoolCountry,
        username: school.username,
        email: school.email,
        phoneNumber: school.phoneNumber,
      })
      .then((res) => {
        console.log("success");
        setSchool({
          schoolName: "",
          schoolEmail: "",
          schoolPhoneNumber: "",
          schoolCountry: "",
          schoolCity: "",
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
            Create school
          </Typography>
          <Box sx={{ my: 3 }}>
            <Grid container spacing={3}>
              {schoolFields.map((field) => {
                return (
                  <Grid item xs={12} lg={6} key={field}>
                    <TextInput
                      id={field}
                      name={field}
                      value={school[field]}
                      error={schoolError[field]}
                      updateFormData={updateSchool}
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
            Create school
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
