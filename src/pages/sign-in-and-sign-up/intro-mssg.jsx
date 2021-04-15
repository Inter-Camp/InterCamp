import React from "react";
import "./sign-in-and-sign-up.styles.scss";

const IntroMssg = ({ data }) => {
  return (
    <div className="sign-in-intro">
      <h2 className="title">{data.title}</h2>
      <p className="subtitle">{data.subtitle}</p>
      <div className="sign-in-image-container">
        <img className="sign-in-image" src={data.imgUrl} alt={data.imgAlt} />
      </div>
    </div>
  );
};

export default IntroMssg;
