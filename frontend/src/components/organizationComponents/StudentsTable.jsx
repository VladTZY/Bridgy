import { Link } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
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

export const StudentsTable = ({
  eventId,
  title,
  students,
  setAcceptedStudents,
  withKick,
}) => {
  const kickStudent = (id) => {
    axiosInstance
      .post(`/organization/kick_student?studentId=${id}&eventId=${eventId}`, {})
      .then((res) => {
        setAcceptedStudents(
          students.filter((student) => student.user.id != id)
        );
      });
  };

  return (
    <Box>
      <Typography sx={{ textAlign: "left", ml: 2, mb: 1 }} variant="h5">
        {title}
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
              {withKick && (
                <TableCell align="center">
                  {" "}
                  <Typography variant="h6" color="white.main">
                    Kick
                  </Typography>
                </TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student) => {
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
                      className="hover:bg-[#2135D9] bg-[#2EA0FB] py-2 px-5 rounded-[50px] text-white text-l"
                    >
                      View profile
                    </Link>
                  </TableCell>
                  {withKick && (
                    <TableCell align="center">
                      <Button
                        onClick={() => kickStudent(student.user.id)}
                        sx={{
                          px: 3,
                          borderRadius: 6,
                          color: "white.main",
                          bgcolor: "red.light",
                          textTransform: "none",
                          ":hover": { bgcolor: "red.main" },
                        }}
                      >
                        <Typography variant="h7"> Kick</Typography>
                      </Button>
                    </TableCell>
                  )}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
