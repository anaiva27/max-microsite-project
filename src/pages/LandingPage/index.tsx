import React from "react";
import "./styles.css";
import imageLink from "../../img/secondary-ad.jpg";
import brandLogo from "../../img/artist-name.png";
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const LandingPage = () => {
  return (
    <div className="container-main">
      <div className="header">
        <Header />
      </div>
      <div className="layout-column">
        <div className="form-column">
          <Form />
          <img src={imageLink} className="image-link" />
        </div>
        <div className="hero-column">
          <img src={brandLogo} className="image-brand" />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
