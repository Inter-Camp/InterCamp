import React from "react";
import "./about.styles.scss";
import Image from "../../assets/home.people.jpg";
import ImageTwo from "../../assets/home.people.copy.jpg";
import ImageThree from "../../assets/home.programmer.jpg";

import { CustomButton } from "../custom-button/custom-button.component";

import OurProsCard from "../our-pros-card/our-pros.component";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import StarsIcon from "@material-ui/icons/Stars";
import DateRangeIcon from "@material-ui/icons/DateRange";

const About = () => {
  return (
    <div className="home-container">
      <div className="home-part-one">
        <div className="home-image-container">
        </div>
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
        <OurProsCard
          image={Image}
          icon={<AddCircleOutlineIcon color="primary" fontSize="large" />}
        >
          Create your own quizzes
        </OurProsCard>
        <OurProsCard
          image={ImageThree}
          icon={<StarsIcon color="secondary" fontSize="large" />}
        >
          Get back to your favorite questions
        </OurProsCard>
        <OurProsCard
          image={ImageTwo}
          icon={<DateRangeIcon color="primary" fontSize="large" />}
        >
          Be prepared
        </OurProsCard>
      </div>
    </div>
  );
};

export default About;
