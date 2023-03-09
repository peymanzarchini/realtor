import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1636,
    },
  },
  palette: {
    primary: {
      main: "#ae1b20",
    },
    secondary: {
      main: "#154293",
    },
  },
});
