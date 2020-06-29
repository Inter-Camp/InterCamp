import React from "react";
import "./question-preview.styles.scss";
// import QUIZ_DATA from "../../quiz.data";
import { connect } from "react-redux";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

class QuestionPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      quizId: this.props.quizId,
    };
  }

  totalQuestions = () => {
    return this.props.questions.length - 1; //3
  };

  nextQuestion = () => {
    this.setState((state) => {
      return { count: state.count + 1 };
    });
  };

  prevQuestion = () => {
    this.setState((state) => {
      return { count: state.count - 1 };
    });
  };

  render() {
    const { count } = this.state;
    const { questions } = this.props;
    return (
      <div className="quiz-container">
        <h3 className="question-count">Question #{count + 1}</h3>
        <div className="quiz-question">
          {count > 0 ? (
            <ArrowBackIcon
              className="arrow"
              color="primary"
              onClick={this.prevQuestion}
            ></ArrowBackIcon>
          ) : (
            <div className="some-space"></div>
          )}

          <Card className="question-text">
            <CardContent>
              <Typography gutterBottom variant="body1" component="h1" key={25}>
                {questions[count].question}
              </Typography>
            </CardContent>
          </Card>

          {count < this.totalQuestions() ? (
            <ArrowForwardIcon
              className="arrow"
              color="primary"
              onClick={this.nextQuestion}
            ></ArrowForwardIcon>
          ) : (
            <div className="some-space"></div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const propQuiz = ownProps.quizId;
  const quiz = state.quiz.questions[propQuiz];
  return { questions: quiz.questions };
};

export default connect(mapStateToProps)(QuestionPreview);
