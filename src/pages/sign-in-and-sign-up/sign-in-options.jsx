import React from "react";
import { signInOptions } from "../../data/index";
import { IButtonPrimary } from "../../components/buttons";

const SignInOptions = ({
  signInWithGoogle,
  signInWithFacebook,
  signInWithGitHub,
}) => {
  return (
    <section className="sign-in-options">
      <div className="sign-in-options-button-container">
        <IButtonPrimary
          iconUrl={signInOptions.google.imageUrl}
          onClick={signInWithGoogle}
        ></IButtonPrimary>
      </div>
      <div className="sign-in-options-button-container">
        <IButtonPrimary
          iconUrl={signInOptions.github.imageUrl}
          onClick={signInWithGitHub}
        ></IButtonPrimary>
      </div>
      <div className="sign-in-options-button-container">
        <IButtonPrimary
          iconUrl={signInOptions.facebook.imageUrl}
          onClick={signInWithFacebook}
        ></IButtonPrimary>
      </div>
    </section>
  );
};
export default SignInOptions;
