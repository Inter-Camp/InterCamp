import React from "react";
import "./quiz-section.styles.scss";
import { CustomButton } from "../custom-button/custom-button.component";
import { Link } from "react-router-dom";

const QuizSection = ({ imageUrl, linkUrl, title }) => {
  return (
    <div className="section-container">
      <div
        className="section-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>

      <Link className="go-to-quiz" to={linkUrl}>
        <CustomButton color="primary">Take {title} Quiz</CustomButton>
      </Link>
    </div>
  );
};

export default QuizSection;
