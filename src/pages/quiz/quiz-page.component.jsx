import React from "react";
import "./quiz-page.styles.scss";
import QuestionPreview from "../../components/question-preview/question-preview.component";
import { connect } from "react-redux";

import { BackToAllButton } from "../../components/custom-button/custom-button.component";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebas.utils";
import { updateQuestions } from "../../redux/quiz/quiz.actions";

class QuizPage extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateQuestions } = this.props;
    const quizRef = firestore.collection("quizzes");
    // whenever it updates it'll update;
    quizRef.onSnapshot(async (snapshot) => {
      console.log(snapshot);
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      // console.log(collectionsMap);
      updateQuestions(collectionsMap);
    });
  }
  render() {
    const { match } = this.props;
    const id = match.params.quizId;
    const addToFav = true;
    return (
      <div className="quiz-page">
        <div className="button-container">
          <BackToAllButton />
        </div>
        <h1>Welcome to {id.toUpperCase()} Challenge</h1>
        <QuestionPreview quizId={id} addToFav={addToFav} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateQuestions: (collectionsMap) =>
    dispatch(updateQuestions(collectionsMap)),
});
export default connect(null, mapDispatchToProps)(QuizPage);
