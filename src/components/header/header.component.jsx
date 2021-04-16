import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { header } from "../../data/index";
import Logo from "../../assets/logo.png";
import { CustomButtonOutlined } from "../buttons";
import { AccountIcon } from "../icons/account-icon.component";
import StarFavorite from "../star-favorite/star-favorite.component";

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <div className="logo-image-container">
          <img className="logo-image" src={Logo} alt="website logo" />
        </div>
        <h3 className="website-name">{header.websiteName}</h3>
      </Link>
      <div className="button-container">
        {currentUser ? (
          <div className="user-fav-container">
            <StarFavorite />
            <Link to="/user">
              <AccountIcon />
            </Link>
          </div>
        ) : (
          <Link to={header.signInLink}>
            <CustomButtonOutlined>{header.signInLabel}</CustomButtonOutlined>
          </Link>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});
export default connect(mapStateToProps)(Header);
