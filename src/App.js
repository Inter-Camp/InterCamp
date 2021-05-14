import React, { useEffect } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { setCurrentUser, isFetching } from './redux/user/user.actions';
import ChooseQuizPage from "./pages/choose-quiz";
import HomePage from "./pages/home";
import QuizPage from "./pages/quiz";
import Header from "./components/header/header.component";
import UserPage from './pages/user';
import FavoritePage from './pages/favorite';
import SignUpPage from './pages/sign-in-and-sign-up';
import { auth, createUserProfileDocument } from "./firebase/firebas.utils";
import ScrollToTop from './components/scroll-to-top';

function App(props) {
  // const history = useHistory();
  useEffect(() => {
    const unsubscibeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // check if there is a user
      props.isFetching(true)
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        // subsrcibe to changes
        userRef.onSnapshot(snapShot => {
          props.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        });
      } else {
        props.setCurrentUser(null)
      }
    });
    return () => {
      unsubscibeFromAuth();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='App'>
      <Header />
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/quiz" component={ChooseQuizPage} />
        <Route path="/quiz/:quizId" component={QuizPage} />
        <Route path="/user" render={() => !props.currentUser ? (<Redirect to='/' />) : (<UserPage />)} />
        <Route path="/favorite" component={FavoritePage} />
        <Route path='/signin' render={() => props.currentUser ? (<Redirect to='/quiz' />) : (<SignUpPage />)} />
      </Switch>
    </div>
  );
}

const mapStateToProps = state => {
  return { currentUser: state.user.currentUser }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  isFetching: payload => dispatch(isFetching(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
