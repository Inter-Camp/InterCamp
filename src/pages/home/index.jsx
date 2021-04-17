import React from "react";
import "./home-page.styles.scss";
import About from "../../components/about/about.component";
import JoinUs from "../../components/join-us";
import Footer from "../../components/footer/footer.component";

const HomePage = () => {
  return (
    <div className="home-page">
      <About />
      <JoinUs />
      <Footer />
    </div>
  );
};

export default HomePage;
