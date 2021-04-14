import React, { useState } from "react";
import "./sign-in-and-sign-up.styles.scss";
import { signUp, signIn, signInOptions } from "../../data/index";
import Spacer from "../../components/spacer";
import Form from "../../components/form";
import IntroMssg from "./intro-mssg";
import SignInOptions from "./sign-in-options";

import {
  signInWithGoogle,
  signInWithFacebook,
  signInWithGitHub,
} from "../../firebase/firebas.utils";

const onFormSubmit = (e) => {
  e.preventDefault();
  console.log(e);
};

const SignInPage = () => {
  const [isMember, setIsMember] = useState(false);
  const [pageData, updateData] = useState(signUp);

  const changePageData = () => {
    pageData.id === "signUp" ? updateData(signIn) : updateData(signUp);
    setIsMember(!isMember);
  };

  return (
    <section className="sign-in-container">
      <IntroMssg data={pageData} />
      <div className="sign-in-form-container">
        <div className="sign-up-form">
          <Form data={pageData} onSubmit={onFormSubmit} />
          <p className="sign-up-link-sign-in" onClick={changePageData}>
            {pageData.accountExist}
          </p>
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
