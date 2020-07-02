import React, { useState, useEffect } from "react";
import "./App.css";
import { Switch, Route, useHistory } from "react-router-dom";

import ChooseQuizPage from "./pages/choose-quiz/choose-quiz.component";
import HomePage from "./pages/home/home-page.component";
import QuizPage from "./pages/quiz/quiz-page.component";
import Header from "./components/header/header.component";
import { auth, createUserProfileDocument } from "./firebase/firebas.utils";

function App() {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState(null);
  // console.log(currentUser);
  useEffect(() => {
    const unsubscibeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // check if there is a user
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        // subsrcibe to changes
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        });
        history.push('/quiz');
      } else {
        setCurrentUser({ userAuth })
        history.push('/');
      }
    });
    return () => {
      unsubscibeFromAuth();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
