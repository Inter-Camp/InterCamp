import React, { useState, useEffect } from "react";
import "./App.css";
import { Switch, Route, useHistory } from "react-router-dom";

import ChooseQuizPage from "./pages/choose-quiz/choose-quiz.component";
import HomePage from "./pages/home/home-page.component";
import QuizPage from "./pages/quiz/quiz-page.component";
import Header from "./components/header/header.component";
import { auth } from "./firebase/firebas.utils";

function App() {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const unsubscibeFromAuth = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      if(user) {
        history.push('/quiz');
      } else {
        history.push('/');
      }
    });
    return () => {
      unsubscibeFromAuth();
    };
  }, []);
  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/quiz" component={ChooseQuizPage} />
        <Route path="/quiz/:quizId" component={QuizPage} />
      </Switch>
    </div>
  );
}

export default App;
