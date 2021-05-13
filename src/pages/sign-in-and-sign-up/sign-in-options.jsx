import React, { useEffect } from "react";
import { signInOptions } from "../../data/index";
import { IButtonPrimary } from "../../components/buttons";
import { fetchAccountExistsError } from "../../redux/user/user.actions";
import { connect } from "react-redux";

const SignInOptions = ({
  signInWithGoogle,
  signInWithFacebook,
  signInWithGitHub,
  fetchAccountExistsError,
}) => {
  useEffect(() => {
    fetchAccountExistsError();
  });
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

const mapDispatchToProps = (dispatch) => ({
  fetchAccountExistsError: () => dispatch(fetchAccountExistsError()),
});
export default connect(null, mapDispatchToProps)(SignInOptions);
