import React from "react";
import { Grid, Paper } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import "./styles.css";
import imageAside from "../../img/artist-photography.jpg";
import imageLink from "../../img/secondary-ad.jpg";
import logo from "../../img/logo.png";
import brandLogo from "../../img/artist-name.png";
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

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
        <Box className="container-main">
          <Grid container className="layout-main">
            <Grid item xs={12} sm={2}>
             <Header />
            </Grid>

            <Grid item container xs={12} md={12} >

              <Grid item xs={6} >
                <Grid item xs={12} md={12}>
                  <Form />
                  <img src={imageLink} className="image-link" />
                </Grid>
              </Grid>

              <Grid item xs={6}>
              <img src={imageAside} className="hero-section" />
              </Grid>
              
            </Grid>

            <Grid item xs={12} md={12} className="footer">
              <Footer />
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default LandingPage;
