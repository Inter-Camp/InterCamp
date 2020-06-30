import React from "react";
import "./sign-in.styles.scss";
import CustomButton from "../custom-button/custom-button.component";

const SignIn = () => {
  return (
    <div>
      <h2 className="home-best-text">
        For the best experience, please Sign In
      </h2>

      <div className="options-container">
        <div className="sign-in-options">
          <CustomButton color="primary">Sign in with Google</CustomButton>
          <CustomButton color="primary">Sign in with Google</CustomButton>
          <CustomButton color="primary">Sign in with Google</CustomButton>
        </div>
        <div className="continue-options">
          <span>Limited access.</span>
          <div>
            <span> Your favourite questions; No </span>
          </div>
          <span> Create your own quizzes; No </span>

          <CustomButton>CONTINUE AS GUEST</CustomButton>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
