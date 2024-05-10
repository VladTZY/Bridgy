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
import { Link } from "react-router-dom";

export const OrganizationsTable = ({ organizations }) => {
  return (
    <Box>
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
        Organizations
      </Typography>
      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table>
          <TableHead sx={{ backgroundColor: "blue.light" }}>
            <TableRow>
              <TableCell align="center">
                <Typography variant="h6" color="white.main">
                  School name
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h6" color="white.main">
                  Administrator Name
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h6" color="white.main">
                  Administrator Email
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h6" color="white.main">
                  Administrator Phone Number
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h6" color="white.main">
                  Profile
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {organizations.map((organization, index) => {
              return (
                <TableRow key={index}>
                  <TableCell align="center">
                    <Typography vairant="h7">{organization.name}</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography vairant="h7">
                      {organization.user.username}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography vairant="h7">
                      {organization.user.email}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography vairant="h7">
                      {organization.user.phoneNumber}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Link
                      to={`/profile/${organization.user.id}`}
                      className="hover:bg-[#2135D9] bg-[#2EA0FB] py-2 px-5 rounded-[50px] text-white"
                    >
                      <Typography variant="h7">View profile</Typography>
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
