import React from "react";
import "./quiz-page.styles.scss";
import QuestionPreview from "../../components/question-preview/question-preview.component";
import { connect } from "react-redux";
import { fetchQuestionsStartAsync } from "../../redux/quiz/quiz.actions";
import { BackToAllButton } from "../../components/custom-button/custom-button.component";

class QuizPage extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { fetchQuestionsStartAsync } = this.props;
    fetchQuestionsStartAsync();
  }

  render() {
    const { match, questions } = this.props;
    const id = match.params.quizId;
    return (
      <div className="quiz-page">
        <div className="button-container">
          <BackToAllButton />
        </div>
        <h1>Welcome to {id.toUpperCase()} Challenge</h1>
        <QuestionPreview quizId={id} addToFav={true} questionsObj={questions} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { questions: state.quiz?.questions || [] };
};

const mapDispatchToProps = (dispatch) => ({
  fetchQuestionsStartAsync: () => dispatch(fetchQuestionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuizPage);
