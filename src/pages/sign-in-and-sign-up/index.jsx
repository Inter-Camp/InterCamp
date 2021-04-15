import React, { useState } from "react";
import "./sign-in-and-sign-up.styles.scss";
import { signUp, signIn, signInOptions } from "../../data/index";
import Spacer from "../../components/spacer";
import Form from "../../components/form";
import IntroMssg from "./intro-mssg";
import SignInOptions from "./sign-in-options";
import { auth, createUserProfileDocument } from "../../firebase/firebas.utils";

import {
  signInWithGoogle,
  signInWithFacebook,
  signInWithGitHub,
} from "../../firebase/firebas.utils";

const SignInPage = () => {
  const [pageData, updateData] = useState(signUp);
  // eslint-disable-next-line no-unused-vars
  const [values, setValues] = useState({});
  const [errorMssg, setErrorMssg] = useState("");

  const changePageData = () => {
    pageData.id === "signUp" ? updateData(signIn) : updateData(signUp);
  };

  const handleSignIn = async (email, password) => {
    // email & password for sign-in check (email: s.karl@gmail.com password: s.karl@gmail.com)
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setValues({});
    } catch (error) {
      console.log(error.message);
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
      console.log(error);
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

export default SignInPage;
