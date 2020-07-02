import React from "react";
import "./home-page.styles.scss";
import About from "../../components/about/about.component";
import SignIn from "../../components/sign-in/sign-in.component";

const HomePage = () => {
  return (
    <div>
      <About />
      <SignIn />
    </div>
  );
};

export default HomePage;
