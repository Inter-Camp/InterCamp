import React from "react";
import { Button } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";

export const CustomButton = ({ children, onClick, color }) => {
  return (
    <Button
      className="custom-button"
      variant="contained"
      color={color}
      onClick={onClick}
    >
      {children}
    </Button>
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
