import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
      contrastText: "#000",
    },
    secondary: {
      main: "#000",
      contrastText: "#fff",
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
    gray: "#808080",
    green: "#3ccf63",
  },
  typography: {
    fontFamily: ["Nunito"],
  },
});

export default theme;
