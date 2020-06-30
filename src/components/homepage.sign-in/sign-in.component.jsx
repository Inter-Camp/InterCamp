import React from "react";
import "./sign-in.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div>
      <h2 className="home-best-text">
        For the best experience, please Sign In
      </h2>

      <div className="options-container">
        <div className="sign-in-options">
          <CustomButton color="primary">Sign in with Google</CustomButton>
          <CustomButton>Sign in with Facebook</CustomButton>
          <CustomButton color="primary">Sign in with Google</CustomButton>
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
