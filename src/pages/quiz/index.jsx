import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./quiz-page.styles.scss";
import QuestionPreview from "../../components/question-preview/question-preview.component";
import { connect } from "react-redux";
import { fetchQuestionsStartAsync } from "../../redux/quiz/quiz.actions";
import { BackToAllButton } from "../../components/buttons";

const QuizPage = ({ questions, fetchQuestionsStartAsync }) => {
  useEffect(() => {
    fetchQuestionsStartAsync();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { quizId } = useParams();

  return (
    <div className="quiz-page">
      <div className="button-container">
        <BackToAllButton />
      </div>
      <h1>Welcome to {quizId.toUpperCase()} Challenge</h1>
      {questions[quizId] ? (
        <QuestionPreview
          quizId={quizId}
          addToFav={true}
          questionsObj={questions}
        />
      ) : null}
    </div>
  );
};
const mapStateToProps = (state) => {
  return { questions: state.quiz?.questions || {} };
};

const mapDispatchToProps = (dispatch) => ({
  fetchQuestionsStartAsync: () => dispatch(fetchQuestionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuizPage);
