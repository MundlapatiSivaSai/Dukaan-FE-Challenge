import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: [
      "Inter",
      "system - ui",
      "Avenir",
      "Helvetica",
      "Arial",
      "sans - serif",
    ].join(","),
  },
  palette: {
    text: {
      primary: "#FFF",
    },
    background: {
      default: "#FAFAFA",
    },
  },
});
