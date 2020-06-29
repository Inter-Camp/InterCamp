import { combineReducers } from 'redux';

import quizReducer from './quiz/quiz.reducer';


const rootReducer = combineReducers({
    quiz: quizReducer
})

export default rootReducer;