import { combineReducers } from 'redux';

import quizReducer from './quiz/quiz.reducer';
import userReducer from './user/user.reducer';


const rootReducer = combineReducers({
    quiz: quizReducer,
    user: userReducer
})

export default rootReducer;