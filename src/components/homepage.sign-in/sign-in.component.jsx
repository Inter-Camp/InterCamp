import React from "react";
import "./sign-in.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { Link } from "react-router-dom";

import { signInWithGoogle } from "../../firebase/firebas.utils";

const SignIn = () => {
  return (
    <div id="sign-in">
      <h2 className="home-best-text">
        For the best experience, please Sign In
      </h2>

      <div className="options-container">
        <div className="sign-in-options">
          <Link to="/quiz">
            <CustomButton color="primary" onClick={signInWithGoogle}>
              Sign in with Google
            </CustomButton>
          </Link>
          <CustomButton>Sign in with Facebook</CustomButton>
          <CustomButton color="primary">Sign in with GitHub</CustomButton>
        </div>
        <div className="continue-options">
          <span>Limited access.</span>
          <div>
            <span> Your favourite questions; No </span>
          </div>
          <span> Create your own quizzes; No </span>

          <Link to="./quiz">
            <CustomButton>CONTINUE AS GUEST</CustomButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
