import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./header.styles.scss";
import Logo from "../../assets/logo.png";
import { CustomButtonOutlined } from "../custom-button/custom-button.component";
import { AccountIcon } from "../icons/account-icon.component";
import StarFavorite from "../star-favorite/star-favorite.component";

import { connect } from "react-redux";

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link className="logo-container" to={currentUser ? "/quiz" : "/"}>
        <div className="logo-image-container">
          <img className="logo-image" src={Logo} alt="website logo" />
        </div>
        <h3 className="website-name">InterCamp</h3>
      </Link>
      <div className="button-container">
        {currentUser ? (
          <div className="user-fav-container">
            <StarFavorite />
            <Link to={"/user"}>
              <AccountIcon />
            </Link>
          </div>
        ) : (
          <HashLink to={"/#sign-in"}>
            <CustomButtonOutlined>SIGN IN</CustomButtonOutlined>
          </HashLink>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});
export default connect(mapStateToProps)(Header);
