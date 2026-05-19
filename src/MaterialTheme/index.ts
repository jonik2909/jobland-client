import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: "0px !important",
          paddingRight: "0px !important",
        },
        maxWidthLg: {
          maxWidth: "1300px !important",
        },
      },
    },
  },
});

export default theme;
