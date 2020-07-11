import React from "react";
import "./question-preview.styles.scss";
import { connect } from "react-redux";
import { addFavorite, deleteFavorite } from "../../redux/quiz/quiz.actions";

import { ArrowForward, ArrowBack } from "../icons/arrows.component";
import { CustomButton } from "../custom-button/custom-button.component";
import { CardComponent } from "../card/card.component";

class QuestionPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      showTheAnswer: false,
      favoriteSwitch: true,
    };
  }

  favoriteSwitch = () => {
    this.setState({ favoriteSwitch: false });
  };

  totalQuestions = () => {
    const { questionsObj, quizId } = this.props;
    return questionsObj[quizId].questions.length - 1; //3
  };

  nextQuestion = () => {
    this.setState((state) => {
      return {
        count: state.count + 1,
        showTheAnswer: false,
        favoriteSwitch: true,
      };
    });
  };

  prevQuestion = () => {
    this.setState((state) => {
      return {
        count: state.count - 1,
        showTheAnswer: false,
        favoriteSwitch: true,
      };
    });
  };

  showTheAnswer = () => {
    this.setState({ showTheAnswer: !this.state.showTheAnswer });
  };

  render() {
    const { count } = this.state;
    const {
      // questions,
      currentUser,
      questionsObj,
      quizId,
      addToFav,
      addFavorite,
      deleteFavorite,
    } = this.props;
    // console.log(questions[count].id);
    console.log(questionsObj[quizId].questions);
    const questions = questionsObj[quizId].questions;
    return (
      <div className="quiz-container">
        <h3 className="question-count">
          Question #{count + 1}/{this.totalQuestions() + 1}
        </h3>
        <div className="quiz-question">
          {count > 0 ? (
            <ArrowBack onClick={this.prevQuestion}></ArrowBack>
          ) : (
            <div className="some-space"></div>
          )}

          <CardComponent>{questions[count].question}</CardComponent>

          {count < this.totalQuestions() ? (
            <ArrowForward onClick={this.nextQuestion}></ArrowForward>
          ) : (
            <div className="some-space"></div>
          )}
        </div>
        <div className="quiz-buttons">
          <CustomButton onClick={this.showTheAnswer}>
            {this.state.showTheAnswer ? "hide the answer" : "show the answer"}
          </CustomButton>
          {currentUser && addToFav ? (
            <CustomButton
              color="primary"
              onClick={() => {
                addFavorite(questions[count]);
                this.favoriteSwitch();
              }}
            >
              {this.state.favoriteSwitch ? "Add to Favorite" : "Added"}
            </CustomButton>
          ) : null}
          {currentUser && !addToFav ? (
            <CustomButton
              color="primary"
              onClick={() => {
                deleteFavorite(questions[count]);
                if (count) {
                  this.prevQuestion();
                }
              }}
            >
              Delete Favorite
            </CustomButton>
          ) : null}
        </div>
        {this.state.showTheAnswer && (
          <div className="quiz-question quiz-answer">
            <CardComponent>
              {questions[count].answer.split("\n").map((item, i) => (
                <span key={item + i}>
                  {item}
                  <br />
                </span>
              ))}
            </CardComponent>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
  };
};

const mapDispathToProps = (dispatch) => ({
  addFavorite: (item) => {
    // console.log(item);
    dispatch(addFavorite(item));
  },
  deleteFavorite: (item) => {
    dispatch(deleteFavorite(item));
  },
});
export default connect(mapStateToProps, mapDispathToProps)(QuestionPreview);
