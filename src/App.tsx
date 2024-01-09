import * as React from "react";
import { NishyanDashboard } from "./modules";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NishyanDashboard />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
