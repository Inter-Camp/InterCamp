import React from "react";
import "./quiz-page.styles.scss";

const QuizPage = ({ match }) => {
  console.log(match);
  return (
    <div className="quiz-page">
      <h1>Welcome to {match.params.quizId.toUpperCase()} Challenge</h1>
      <p>Question #1</p>
      <div className="quiz-question">
        <div className="arrow">&#9665;</div>
        <div className="question-text">
          <p>A Question</p>
        </div>
        <div className="arrow">&#9655;</div>
      </div>
    </div>
  );
};

export default QuizPage;
