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
    background: "#e8e8e8",
    gray: "#808080",
    green: "#3ccf63",
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

export default theme;
