import React from "react";
import "./question-preview.styles.scss";
import QUIZ_DATA from "../../quiz.data";

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
    };
  }

  totalQuestions = () => {
    return QUIZ_DATA[this.props.quizId].questions.length - 1;
  };

  nextQuestion = () => {
    this.setState({ count: (this.state.count += 1) });
  };

  prevQuestion = () => {
    this.setState({ count: (this.state.count -= 1) });
  };

  render() {
    const { questions, id } = QUIZ_DATA[this.props.quizId];
    const { count } = this.state;
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
              <Typography gutterBottom variant="body1" component="h1" key={id}>
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

export default QuestionPreview;
