import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
      contrastText: "#000",
    },
    blue: {
      light: "#4dabf5",
      main: "#2196f3",
      dark: "#1769aa",
      contrastText: "#fff",
    },
    white: {
      main: "#fff",
      contrastText: "#000",
    },
    background: "#e8e8e8",
  },
});

export default theme;
