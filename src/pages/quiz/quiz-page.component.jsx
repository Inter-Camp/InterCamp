import React from "react";
import "./quiz-page.styles.scss";
import QuestionPreview from "../../components/question-preview/question-preview.component";
import { connect } from "react-redux";

import { BackToAllButton } from "../../components/custom-button/custom-button.component";

const QuizPage = ({ match, questions }) => {
  console.log(match);
  const id = match.params.quizId;
  console.log(questions);
  // const { questions } = this.props;
  return (
    <div className="quiz-page">
      <div className="button-container">
        <BackToAllButton />
      </div>
      <h1>Welcome to {id.toUpperCase()} Challenge</h1>
      <QuestionPreview quizId={id} addToFav={true} questionsObj={questions} />
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state.quiz.questions);
  return { questions: state.quiz.questions };
};

export default connect(mapStateToProps)(QuizPage);
