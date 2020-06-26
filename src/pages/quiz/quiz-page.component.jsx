import React from "react";
import "./quiz-page.styles.scss";
import QuestionPreview from '../../components/question-preview/question-preview.component';

const QuizPage = ({ match }) => {
  console.log(match);
  const id = match.params.quizId;
  return (
    <div className="quiz-page">
      <h1>Welcome to {id.toUpperCase()} Challenge</h1>
      <QuestionPreview quizId={id}/>
    </div>
  );
};

export default QuizPage;
