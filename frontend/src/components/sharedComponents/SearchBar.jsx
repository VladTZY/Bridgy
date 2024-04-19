import { InputBase, Box, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const SearchBar = () => {
  return (
    <Box
      sx={{
        width: {
          xs: 1,
          md: "38vw",
        },
        border: 1,
        borderColor: "gray",
        borderRadius: 8,
        display: "flex",
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <SearchIcon sx={{ ml: 1, color: "gray" }} />
        <InputBase placeholder="Search here..." sx={{ ml: 1, my: 1 }} />
      </Box>
      <Button
        sx={{
          bgcolor: "blue.light",
          color: "white.main",
          borderRadius: 8,
          px: 3,
        }}
      >
        Search
      </Button>
    </Box>
  );
};
