import React from "react";
import "./about.styles.scss";
import { Link } from "react-router-dom";
import { ourPros, home } from "../../data/index";
import OurProsCard from "../our-pros-card/our-pros.component";
import AboutInfo from "./info";

const About = () => {
  return (
    <>
      <div className="home-container">
        <section className="home-part-one">
          <AboutInfo pageData={home} />
        </section>
      </div>
      <section className="home-part-two">
        <div className="our-pros-container">
          {ourPros.map((item) => (
            <OurProsCard key={item.id} image={item}>
              {item.text}
            </OurProsCard>
          ))}
        </div>
        <Link to={home.quizLink}>
          <h2 className="home-part-two-action">{home.quizLabel}</h2>
        </Link>
      </section>
    </>
  );
};

export default About;
