import React from "react";
import "./favorite-page.styles.scss";
import QuestionPreview from "../../components/question-preview/question-preview.component";
import { connect } from "react-redux";
import { BackToAllButton } from "../../components/custom-button/custom-button.component";
import { FilledStarIcon } from "../../components/icons/favorite-icons.component";

const FavoritePage = ({ favQuestions, questions }) => {
  const id = "favorite";
  const addToFav = false;
  return (
    <div className="favorite-container">
      <div className="back-to-all-container">
        <BackToAllButton />
      </div>
      <div className="fav-questions-text">
        <FilledStarIcon />
        <h1>Favorite questions</h1>
        <FilledStarIcon />
      </div>
      {favQuestions.questions.length ? (
        <QuestionPreview quizId={id} addToFav={addToFav} questionsObj={questions} />
      ) : (
        <p>No Favorite Questions Yet</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    favQuestions: state.quiz.questions.favorite,
    questions: state.quiz.questions,
  };
};

export default connect(mapStateToProps)(FavoritePage);
