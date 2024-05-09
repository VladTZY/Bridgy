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
    pageBackground: "#f3f4f6",
    gray: "#bdbdbd",
    green: {
      light: "#3ccf63",
      main: "#008000",
    },
    red: {
      light: "#ef3038",
      main: "#FF0000",
    },
    landing: "#F3F4F6",
    card: "#E5E7EB",
  },
  typography: {
    fontFamily: ["Nunito"],
  },
});

export default theme;
