import React from "react";
import { Button } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";
import "./buttons.styles.scss";

export const ButtonPrimary = ({ children, onClick, type }) => {
  return (
    <button className="button-primary" onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export const IButtonPrimary = ({ iconUrl, iconAlt, onClick }) => {
  return (
    <button className="i-button-primary" onClick={onClick}>
      <div className="i-button-icon-container">
        <img className="i-button-icon" src={iconUrl} alt={iconAlt} />
      </div>
    </button>
  );
};

export const CustomButton = ({ children, onClick, color, type }) => {
  return (
    <Button
      className="custom-button"
      variant="contained"
      color={color}
      onClick={onClick}
      type={type}
    >
      {children}
    </Button>
  );
};

export const BackToAllButton = ({ onClick }) => {
  return (
    <Link className="link-to-all" to={"/quiz"}>
      <Button
        className="back-to-all-button"
        color="primary"
        onClick={onClick}
        endIcon={<ExitToAppIcon />}
      >
        All Quizzes
      </Button>
    </Link>
  );
};

export const CustomButtonOutlined = ({ children, onClick }) => {
  return (
    <Button color="primary" variant="outlined" onClick={onClick}>
      {children}
    </Button>
  );
};

export const GitHubSignInButton = ({ onClick }) => {
  return (
    <Button
      variant="contained"
      color="default"
      onClick={onClick}
      startIcon={<GitHubIcon />}
    >
      Sign in with GitHub
    </Button>
  );
};

export const FBSignInButton = ({ onClick }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={onClick}
      startIcon={<FacebookIcon fontSize="large" />}
    >
      Sign in with Facebook
    </Button>
  );
};
