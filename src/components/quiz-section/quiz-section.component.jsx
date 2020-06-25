import React from "react";
import "./quiz-section.styles.scss";
import { Button } from "@material-ui/core";

const QuizSection = ({ id, imageUrl }) => {
  return (
    <div className="section-container">
      <div
        className="section-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <Button className="button" variant="outlined" color="primary">Take a Quiz</Button>
    </div>
  );
};

export default QuizSection;
