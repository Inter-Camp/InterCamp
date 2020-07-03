import React from "react";
import "./quiz-page.styles.scss";
import QuestionPreview from "../../components/question-preview/question-preview.component";

import { ExitIcon } from "../../components/icons/exit-icon.component";
import { Link } from "react-router-dom";

const QuizPage = ({ match }) => {
  // console.log(match);
  const id = match.params.quizId;
  return (
    <div className="quiz-page">
      <div className="button-container">
        <Link to={'/quiz'}>
          <ExitIcon />
        </Link>
      </div>
      <h1>Welcome to {id.toUpperCase()} Challenge</h1>
      <QuestionPreview quizId={id} />
    </div>
  );
};

export default QuizPage;
