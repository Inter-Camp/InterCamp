import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import ChooseQuizPage from "./pages/choose-quiz/choose-quiz.component";
import HomePage from "./pages/home/home-page.component";
import QuizPage from "./pages/quiz/quiz-page.component";
import Header from "./components/header/header.component";
import { auth } from "./firebase/firebas.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscibeFromAuth = null;

  componentDidMount() {
    this.unsubscibeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscibeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/quiz" component={ChooseQuizPage} />
          <Route path="/quiz/:quizId" component={QuizPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
