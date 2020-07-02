import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";
import Logo from "../../assets/logo.png";
import { CustomButtonOutlined } from "../custom-button/custom-button.component";

import { auth } from "../../firebase/firebas.utils";

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link className="logo-container" to={currentUser ? "/quiz" : "./"}>
        <div className="logo-image-container">
          <img className="logo-image" src={Logo} alt="website logo" />
        </div>
        <h3 className="website-name">InterCamp</h3>
      </Link>
      <div className="button-container">
        {currentUser ? (
            <CustomButtonOutlined onClick={() => {
              auth
              .signOut();
            }}>
              SIGN OUT
            </CustomButtonOutlined>
        ) : (
          <a href="#sign-in">
            <CustomButtonOutlined>SIGN IN</CustomButtonOutlined>
          </a>
        )}
      </div>
    </div>
  );
};
export default Header;
