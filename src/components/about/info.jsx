import React from "react";
import { Link } from "react-router-dom";
import { ButtonPrimary } from "../buttons";

const AboutInfo = ({ pageData }) => {
  return (
    <>
      <div className="home-image-container"></div>
      <div className="home-intro">
        <h1 className="title">{pageData.title}</h1>
        <h3 className="subtitle">{pageData.subtitle1}</h3>
        <div className="about-button-container">
          <Link to={pageData.signInLink}>
            <ButtonPrimary color="primary">
              {pageData.signInLabel}
            </ButtonPrimary>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AboutInfo;
