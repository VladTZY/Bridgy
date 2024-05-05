import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Paper,
} from "@mui/material";
import { visuallyHidden } from "@mui/utils";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "username",
    profile: false,
    disablePadding: true,
    label: "Student Name",
  },
  {
    id: "email",
    profile: false,
    disablePadding: false,
    label: "Email",
  },
  {
    id: "phoneNumber",
    profile: false,
    disablePadding: false,
    label: "Phone Number",
  },
  {
    id: "objectiveProgress",
    profile: false,
    disablePadding: false,
    label: "Objective",
  },
  {
    id: "profile",
    profile: true,
    disablePadding: false,
    label: "Profile",
  },
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead sx={{ bgcolor: "blue.light" }}>
      <TableRow>
        <TableCell padding="checkbox"></TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.profile ? "center" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{ color: "blue.contrastText", fontSize: "18px" }}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
              sx={{
                color: "blue.contrastText",
                "&.MuiTableSortLabel-root": {
                  color: "white.main",
                },
                "&.MuiTableSortLabel-root:hover": {
                  color: "white.main",
                },
                "&.Mui-active": {
                  color: "white.main",
                },
                "& .MuiTableSortLabel-icon": {
                  color: "white !important",
                },
              }}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export function StudentsTable({ rows }) {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("name");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage, rows]
  );

  return (
    <Box sx={{ width: "100%" }}>
      <Paper
        sx={{ width: "100%", mb: 2, bgcolor: "white.main", borderRadius: 4 }}
      >
        <TableContainer sx={{ borderRadius: 4, bgcolor: "white.main" }}>
          <Table
            sx={{ minWidth: 750, bgcolor: "white.main" }}
            aria-labelledby="studentsTable"
            size="medium"
          >
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.id}
                    sx={{ cursor: "pointer" }}
                  >
                    <TableCell padding="checkbox"></TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                      sx={{ fontSize: "16px" }}
                    >
                      {row.username}
                    </TableCell>
                    <TableCell align="left" sx={{ fontSize: "16px" }}>
                      {row.email}
                    </TableCell>
                    <TableCell align="left" sx={{ fontSize: "16px" }}>
                      {row.phoneNumber}
                    </TableCell>
                    <TableCell align="left" sx={{ fontSize: "16px" }}>
                      {row.objectiveProgress}
                    </TableCell>
                    <TableCell align="center" sx={{ fontSize: "16px" }}>
                      <Link to={`/profile/${row.id}`}>
                        <Button
                          variant="contained"
                          sx={{
                            bgcolor: "blue.light",
                            color: "blue.contrastText",
                            borderRadius: 8,
                            textTransform: "none",
                            ":hover": {
                              bgcolor: "blue.main",
                            },
                          }}
                        >
                          View profile
                        </Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          sx={{ bgcolor: "white.main", borderRadius: 4 }}
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
