import React from "react";
import "./quiz-section.styles.scss";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const QuizSection = ({ id, imageUrl, linkUrl }) => {
  return (
    <div className="section-container">
      <div
        className="section-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>

      <Link className="go-to-quiz" to={linkUrl}>
        <Button className="button" variant="outlined" color="primary">
          Take a Quiz
        </Button>
      </Link>
    </div>
  );
};

export default QuizSection;
