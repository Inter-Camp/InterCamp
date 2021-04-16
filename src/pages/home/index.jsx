import React from "react";
import "./home-page.styles.scss";
import About from "../../components/about/about.component";
import JoinUs from "../../components/join-us";

const HomePage = () => {
  return (
    <div className="home-page">
      <About />
      <JoinUs />
    </div>
  );
};

export default HomePage;
