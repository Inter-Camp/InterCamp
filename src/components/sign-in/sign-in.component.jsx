import React from "react";
import "./sign-in.styles.scss";
import {
  CustomButton,
  GitHubSignInButton,
  FBSignInButton,
} from "../custom-button/custom-button.component";
import { Link } from "react-router-dom";

import {
  signInWithGoogle,
  signInWithFacebook,
  signInWithGitHub,
} from "../../firebase/firebas.utils";

const SignIn = () => {
  return (
    <div id="sign-in">
      <h2 className="home-best-text">
        For the best experience, please Sign In
      </h2>

      <div className="options-container">
        <div className="sign-in-options">
          <CustomButton color="primary" onClick={signInWithGoogle}>
            Sign in with Google
          </CustomButton>
          <GitHubSignInButton onClick={signInWithGitHub} />
          <FBSignInButton onClick={signInWithFacebook} />
        </div>
        
        <div className="continue-options">
          <span>Limited access.</span>
          <div>
            <span> Your favourite questions; No </span>
          </div>
          <span> Create your own quizzes; No </span>

          <Link className="guest-link" to="./quiz">
            <CustomButton>CONTINUE AS GUEST</CustomButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
