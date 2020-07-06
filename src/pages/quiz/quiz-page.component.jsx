import React from "react";
import "./quiz-page.styles.scss";
import QuestionPreview from "../../components/question-preview/question-preview.component";

import { BackToAllButton } from '../../components/custom-button/custom-button.component';
import { Link } from "react-router-dom";

const QuizPage = ({ match }) => {
  console.log(match);
  const id = match.params.quizId;
  const addToFav = true;
  return (
    <div className="quiz-page">
      <div className="button-container">
        <Link to={'/quiz'}>
          <BackToAllButton/>
        </Link>
      </div>
      <h1>Welcome to {id.toUpperCase()} Challenge</h1>
      <QuestionPreview quizId={id} addToFav={addToFav}/>
    </div>
  );
};

export default QuizPage;
