import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4dabf5",
      contrastText: "#000",
    },
    secondary: {
      main: "#fff",
      contrastText: "#000",
    },
    blue: {
      transparent: "#bfdbfe",
      light: "#4dabf5",
      main: "#2135D9",
      dark: "#1769aa",
      contrastText: "#fff",
    },
    white: {
      main: "#fff",
      contrastText: "#000",
    },
    background: "#f3f4f6",
    gray: "#8d8d8d",
    green: "#3ccf63",
    red: "#FF0000",
  },
  typography: {
    fontFamily: ["Nunito"],
  },
});

export default theme;
