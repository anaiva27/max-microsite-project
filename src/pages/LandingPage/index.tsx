import React from "react";
import { Grid, Paper } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import "./styles.css";
import imageAside from '../../img/artist-photography.jpg'
import imageLink from '../../img/secondary-ad.jpg'
import logo from '../../img/logo.png'
import brandLogo from '../../img/artist-name.png'
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";

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
        <Box  className = "container-main">
          <Grid container className="layout-main">
            <Grid item xs={12} sm={2}>
            <img src={logo} className="image-logo" />
            </Grid>
            {/* <Grid item xs={0} md={10}>
            </Grid> */}

            <Grid item container xs={12} md={12}>
            <Grid item xs={6}>
              <Grid item xs={12} md={12}>
               <Form />
              </Grid>
              <Grid item xs={12} md={12}>
              <img src={imageLink} className="image-link" />
              </Grid>
              </Grid>
              <Grid item xs={6}>
            <Grid item xs={12} md={12} className="aside" style={{ height: "100%" }}>
                  <img src={brandLogo} className="image-link" />
            </Grid>
            </Grid>
            </Grid>

            <Grid item xs={12} md={12}>
              <Footer />
            </Grid>
          </Grid>
          </Box>
      </ThemeProvider>
    </>
  );
};

export default LandingPage;
