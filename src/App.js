import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';



import ChooseQuizPage from './pages/choose-quiz/choose-quiz.component';
import HomePage from './pages/home/home-page.component'



function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/quiz' component={ChooseQuizPage} />
      </Switch>

    </div>
  );
}

export default App;
