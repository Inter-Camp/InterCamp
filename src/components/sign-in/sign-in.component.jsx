import React from "react";
import "./sign-in.styles.scss";
import {
  CustomButton,
  GitHubSignInButton,
  FBSignInButton,
} from "../custom-button/custom-button.component";
import { Link } from "react-router-dom";
import { BlockIconIcon } from "../icons/block-icon.component";

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

        <h2 className="home-guest-text">
          If you don't want to Sign In, you can continue as a Guest
        </h2>
        <div className="continue-options">
          <div className="limited-container">
            <BlockIconIcon />
            <span className="limited-text">
              {" "}
              Limited access to your favourite questions
            </span>
          </div>
          <div className="limited-container">
            <BlockIconIcon />
            <span className="limited-text">
              {" "}
              No possibility to create your own quizzes
            </span>
          </div>

          <Link className="guest-link" to="./quiz">
            <CustomButton>CONTINUE AS GUEST</CustomButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
