import React from "react";
import "./about.styles.scss";
import { ourPros } from "../../data/index";

import { CustomButton } from "../custom-button/custom-button.component";
import OurProsCard from "../our-pros-card/our-pros.component";

const About = () => {
  return (
    <div className="home-container">
      <div className="home-part-one">
        <div className="home-image-container"></div>
        <div className="home-intro">
          <h1>Interview Preparation made easy</h1>
          <h3>HTML, CSS, JavaScript, React</h3>
          <p>
            Most common interview theory questions. Check yourself and prepare
            for upcomming interviews
          </p>
          <div className="sign-in-container">
            <a href="#sign-in">
              <CustomButton color="primary">Get Started</CustomButton>
            </a>
          </div>
        </div>
      </div>

      <div className="home-part-two">
        {ourPros.map((item) => (
          <OurProsCard key={item.id} image={item}>
            {item.text}
          </OurProsCard>
        ))}
      </div>
    </div>
  );
};

export default About;
