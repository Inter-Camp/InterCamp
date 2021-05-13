import React, { useState, useEffect } from "react";
import "./sign-in-and-sign-up.styles.scss";
import { signUp, signIn, signInOptions } from "../../data/index";
import Spacer from "../../components/spacer";
import Form from "../../components/form";
import IntroMssg from "./intro-mssg";
import SignInOptions from "./sign-in-options";
import { auth, createUserProfileDocument } from "../../firebase/firebas.utils";
import { connect } from "react-redux";

import {
  signInWithGoogle,
  signInWithFacebook,
  signInWithGitHub,
} from "../../firebase/firebas.utils";

const SignInPage = ({ errorMsg }) => {
  const [pageData, updateData] = useState(signUp);
  // eslint-disable-next-line no-unused-vars
  const [values, setValues] = useState({});
  const [errorMssg, setErrorMssg] = useState("");

  useEffect(() => {
    setErrorMssg(errorMsg);
  }, [errorMsg]);

  const changePageData = () => {
    pageData.id === "signUp" ? updateData(signIn) : updateData(signUp);
  };

  const handleSignIn = async (email, password) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setValues({});
    } catch (error) {
      setErrorMssg(error.message);
    }
  };

  const handleSignUp = async (name, email, password) => {
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { name });
      setValues({});
    } catch (error) {
      setErrorMssg(error.message);
    }
  };

  const passwordCheck = (password) => {
    if (password.length >= 6) {
      return true;
    } else {
      setErrorMssg("Password must be 6 caracters or longer");
      return false;
    }
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    const formValues = Object.fromEntries(new FormData(e.target));
    if (!passwordCheck(formValues.password)) return;
    if (pageData.id === "signUp") {
      handleSignUp(formValues.name, formValues.emailfield, formValues.password);
    } else {
      handleSignIn(formValues.emailfield, formValues.password);
    }
  };

  return (
    <section className="sign-in-container">
      <IntroMssg data={pageData} />
      <div className="sign-in-form-container">
        <div className="sign-up-form">
          <Form data={pageData} onSubmit={onFormSubmit} />
          <p className="sign-up-link-sign-in" onClick={changePageData}>
            {pageData.accountExists}
          </p>
          <h4 className="error-mssg">{errorMssg}</h4>
        </div>
        <Spacer>{signInOptions.optionText}</Spacer>
        <SignInOptions
          signInWithGoogle={signInWithGoogle}
          signInWithFacebook={signInWithFacebook}
          signInWithGitHub={signInWithGitHub}
        />
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  errorMsg: state.user.errorMsg,
});

export default connect(mapStateToProps)(SignInPage);
