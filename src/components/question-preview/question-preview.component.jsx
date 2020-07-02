import React from "react";
import "./question-preview.styles.scss";
import { connect } from "react-redux";

import { ArrowForward, ArrowBack } from "../icons/arrows.component";
import { CustomButton } from "../custom-button/custom-button.component";
import { CardComponent } from "../card/card.component";

class QuestionPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      showTheAnswer: false,
    };
  }

  totalQuestions = () => {
    return this.props.questions.length - 1; //3
  };

  nextQuestion = () => {
    this.setState((state) => {
      return { count: state.count + 1, showTheAnswer: false };
    });
  };

  prevQuestion = () => {
    this.setState((state) => {
      return { count: state.count - 1, showTheAnswer: false };
    });
  };

  showTheAnswer = () => {
    this.setState({ showTheAnswer: !this.state.showTheAnswer });
  };

  render() {
    const { count } = this.state;
    const { questions } = this.props;
    // console.log(questions);
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
          <CustomButton color="primary">Add to Favorite</CustomButton>
        </div>
        {this.state.showTheAnswer && (
          <div className="quiz-question quiz-answer">
            <CardComponent>
              {questions[count].answer.split("\n").map((item) => (
                <span>
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

const mapStateToProps = (state, ownProps) => {
  const quiz = state.quiz.questions[ownProps.quizId];
  return { questions: quiz.questions };
};

export default connect(mapStateToProps)(QuestionPreview);
