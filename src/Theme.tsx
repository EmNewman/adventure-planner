import { ThemeOptions, createTheme } from "@mui/material/styles";

export const themeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#b39ddb",
    },
    secondary: {
      main: "#9c27b0",
    },
    background: {
      default: "#00100a",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#003E24",
        },
      },
    },
  },
};

export const theme = createTheme(themeOptions);
