import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Typography,
  Grid,
  Button,
  Select,
  MenuItem,
  Toolbar,
} from "@mui/material";
import { TextInput } from "../sharedComponents/TextInput";
import axiosInstance from "../../utils/axiosInstance";

import { AddOneModal } from "./AddOneModal";
import { ErrorModal } from "../sharedComponents/ErrorModal";

const studentFields = ["username", "email", "phoneNumber", "country", "city"];

export const AddStudentCard = () => {
  const navigate = useNavigate();
  const [addModal, setAddModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [student, setStudent] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    country: "",
    city: "",
    grade: 9,
  });
  const [studentError, setStudentError] = useState({
    username: false,
    email: false,
    phoneNumber: false,
    country: false,
    city: false,
    grade: false,
  });

  const updateStudentData = (e) => {
    setStudent({ ...student, [e.target.id]: e.target.value });
    setStudentError({ ...studentError, [e.target.id]: false });
  };

  const validate = () => {
    let error = false;

    for (let i = 0; i < studentFields.length; i++) {
      if (student[studentFields[i]] == "") {
        setStudentError((prev) => ({ ...prev, [studentFields[i]]: true }));
        error = true;
      }
    }

    return !error;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    axiosInstance
      .post("/school/create_one_student", {
        username: student.username,
        email: student.email,
        phoneNumber: student.phoneNumber,
        country: student.country,
        city: student.city,
        grade: student.grade,
      })
      .then((res) => {
        console.log("Student create succesfully");
        setAddModal(true);
      })
      .catch((error) => {
        console.log(error.response.data);
        setErrorMessage(error.response.data);
        setErrorModal(true);
      });
  };

  return (
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
        Create one student
      </Typography>
      <Box sx={{ my: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <TextInput
              id="username"
              name="Student Name"
              value={student.username}
              error={studentError.username}
              updateFormData={updateStudentData}
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <Toolbar disableGutters>
              <Typography variant="h6" sx={{ mr: 1 }}>
                Grade
              </Typography>
              <Select
                id="grade"
                value={student.grade}
                label="Grade"
                onChange={(e) => {
                  setStudent({ ...student, grade: e.target.value });
                }}
              >
                <MenuItem value={9}>9</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={11}>11</MenuItem>
                <MenuItem value={12}>12</MenuItem>
              </Select>
            </Toolbar>
          </Grid>
          <Grid item xs={12} lg={6}>
            <TextInput
              id="email"
              name="Student Email"
              value={student.email}
              error={studentError.email}
              updateFormData={updateStudentData}
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <TextInput
              id="phoneNumber"
              name="Student Phone Number"
              value={student.phoneNumber}
              error={studentError.phoneNumber}
              updateFormData={updateStudentData}
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <TextInput
              id="country"
              name="Student Country"
              value={student.country}
              error={studentError.country}
              updateFormData={updateStudentData}
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <TextInput
              id="city"
              name="Student City"
              value={student.city}
              error={studentError.city}
              updateFormData={updateStudentData}
            />
          </Grid>
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
        Create Student
      </Button>
      {addModal ? <AddOneModal setModal={setAddModal} /> : null}
      {errorModal ? (
        <ErrorModal setModal={setErrorModal} errorMessage={errorMessage} />
      ) : null}
    </Box>
  );
};
