import React from "react";
import "./index.styles.scss";
import { Link } from "react-router-dom";
import { home } from "../../data/index";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import { ButtonPrimary } from "../buttons";
import { TitleLinkPrimary } from "../title/index";

const JoinUs = () => {
  return (
    <div id="join-us">
      <div className="options-container">
        <section className="continue-options">
          {home.joinUsLables.map((item) => {
            return (
              <div className="limited-container" key={item.id}>
                <AssignmentTurnedInIcon color="primary" fontSize="large" />
                <span className="limited-text">{item.text}</span>
              </div>
            );
          })}
        </section>
        <section className="check-our-quizzes">
          <TitleLinkPrimary
            linkUrl={home.signInLink}
            text={home.signInLabel2}
          />
          <Link to={home.signInLink}>
            <ButtonPrimary>{home.signInLabel}</ButtonPrimary>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default JoinUs;
