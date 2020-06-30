import React from "react";
import "./our-pros.styles.scss";


const OurProsCard = ({ image, icon, children }) => {
  return (
    <div className="our-pros">
      <div className="our-pros-image-conatiner">
        <img className="our-pros-image" src={image} alt="Our pros images" />
      </div>
      <div className="our-pros-text-container">
        {icon}
        <p>{children}</p>
      </div>
    </div>
  );
};

export default OurProsCard;
