import React from "react";
import Home from "./pages/Home";
import "./App.css";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./Theme";
import { CssBaseline } from "@mui/material";
import Header from "./components/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Home />
      {/* <Configure /> */}
    </ThemeProvider>
  );
}

export default App;
