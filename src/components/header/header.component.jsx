import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";
import Logo from "../../assets/logo.png";
import { Button } from "@material-ui/core";


const Header = () => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <img className="logo-image" src={Logo} alt="website logo" />
        <h3 className="website-name">InterCamp</h3>
      </Link>
      <div className="buttons-container">
        <Link className="option" to="/signin">
          <Button color="primary" variant="outlined">
            SIGN IN
          </Button>
        </Link>
        
      </div>
    </div>
  );
};
export default Header;
