import React from "react";
import { Grid, Paper } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 376,
      sm: 768,
      md: 1024,
      lg: 1440,
      xl: 1920,
    },
  },
});

const LandingPage = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          display="flex"
          justify-content="center"
          width="80vw"
          fontSize="64px"
          margin="0 auto"
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={2}>
              <Paper>LOGO</Paper>
            </Grid>
            <Grid item xs={0} md={10}>
              <Paper>Header</Paper>
            </Grid>
            <Grid item xs={12} md={7}>
              <Grid item xs={12} md={7}>
                <Paper>FORM</Paper>
              </Grid>
              <Grid item xs={12} md={7}>
                <Paper>FORM</Paper>
              </Grid>
            </Grid>
            <Grid item xs={12} md={5}>
              <Paper>PIC</Paper>
            </Grid>
            <Grid item xs={12} md={12}>
              <Paper>FOOTER</Paper>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default LandingPage;
