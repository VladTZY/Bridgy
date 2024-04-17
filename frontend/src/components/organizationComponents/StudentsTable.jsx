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
          <TableHead sx={{ backgroundColor: "blue.main" }}>
            <TableRow>
              <TableCell>
                <Typography variant="h6" color="white.main">
                  Username
                </Typography>
              </TableCell>
              <TableCell align="right">
                {" "}
                <Typography variant="h6" color="white.main">
                  Email
                </Typography>
              </TableCell>
              <TableCell align="right">
                {" "}
                <Typography variant="h6" color="white.main">
                  Phone Number
                </Typography>
              </TableCell>
              <TableCell align="right">
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
                  <TableCell align="right">{student.user.username}</TableCell>
                  <TableCell align="right">{student.user.email}</TableCell>
                  <TableCell align="right">
                    {student.user.phoneNumber}
                  </TableCell>
                  <TableCell align="right">
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
