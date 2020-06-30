import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import ChooseQuizPage from './pages/choose-quiz/choose-quiz.component';
import HomePage from './pages/home/home-page.component';
import QuizPage from './pages/quiz/quiz-page.component';
import Header from './components/header/header.component';


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/quiz' component={ChooseQuizPage} />
        <Route path='/quiz/:quizId' component={QuizPage}/>
      </Switch>

    </div>
  );
}

export default App;
