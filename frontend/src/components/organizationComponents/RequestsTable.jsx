import {
  TableContainer,
  TableRow,
  TableCell,
  TableBody,
  Table,
  Paper,
  TableHead,
  Typography,
  Box,
  Button,
} from "@mui/material";
import axiosInstance from "../../utils/axiosInstance";
import { Link } from "react-router-dom";

export const RequestsTable = ({
  eventId,
  students,
  setRequestedStudents,
  acceptedStudents,
  setAcceptedStudents,
}) => {
  const acceptStudent = (id, index) => {
    axiosInstance
      .post(
        `/organization/confirm_student?studentId=${id}&eventId=${eventId}`,
        {}
      )
      .then((res) => {
        setAcceptedStudents([...acceptedStudents, students[index]]);
        setRequestedStudents(
          students.filter((student) => student.user.id != id)
        );
      });
  };

  const rejectStudent = (id, index) => {
    axiosInstance
      .post(
        `/organization/reject_student?studentId=${id}&eventId=${eventId}`,
        {}
      )
      .then((res) => {
        setRequestedStudents(
          students.filter((student) => student.user.id != id)
        );
      });
  };

  return (
    <Box>
      <Typography sx={{ textAlign: "left", ml: 2, mb: 1 }} variant="h5">
        Student Requests
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: "blue.light" }}>
            <TableRow>
              <TableCell align="center">
                <Typography variant="h6" color="white.main">
                  Username
                </Typography>
              </TableCell>
              <TableCell align="center">
                {" "}
                <Typography variant="h6" color="white.main">
                  Email
                </Typography>
              </TableCell>
              <TableCell align="center">
                {" "}
                <Typography variant="h6" color="white.main">
                  Phone Number
                </Typography>
              </TableCell>
              <TableCell align="center">
                {" "}
                <Typography variant="h6" color="white.main">
                  Profile
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h6" color="white.main">
                  Accept
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h6" color="white.main">
                  Reject
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student, index) => {
              return (
                <TableRow>
                  <TableCell align="center">
                    <Typography vairant="h7">
                      {student.user.username}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    {" "}
                    <Typography vairant="h7">{student.user.email}</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography vairant="h7">
                      {student.user.phoneNumber}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Link
                      to={`/profile/${student.user.id}`}
                      className="hover:bg-[#2135D9] bg-[#2EA0FB] py-2 px-5 rounded-[50px] text-white"
                    >
                      <Typography variant="h7">View profile</Typography>
                    </Link>
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      onClick={() => acceptStudent(student.user.id, index)}
                      sx={{
                        px: 3,
                        borderRadius: 6,
                        color: "white.main",
                        bgcolor: "green.light",
                        textTransform: "none",
                        ":hover": { bgcolor: "green.main" },
                      }}
                    >
                      <Typography variant="h7"> Accept</Typography>
                    </Button>
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      onClick={() => rejectStudent(student.user.id, index)}
                      sx={{
                        px: 3,
                        borderRadius: 6,
                        color: "white.main",
                        bgcolor: "red.light",
                        textTransform: "none",
                        ":hover": { bgcolor: "red.main" },
                      }}
                    >
                      <Typography variant="h7"> Reject</Typography>
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
