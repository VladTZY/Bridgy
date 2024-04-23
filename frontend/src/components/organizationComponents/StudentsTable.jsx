import { Link } from "react-router-dom";
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
} from "@mui/material";

export const StudentsTable = ({ title, students }) => {
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
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
