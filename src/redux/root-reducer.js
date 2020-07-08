import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import quizReducer from './quiz/quiz.reducer';
import userReducer from './user/user.reducer';

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["quiz"]
}

const rootReducer = combineReducers({
    quiz: quizReducer,
    user: userReducer
})

export default persistReducer(persistConfig, rootReducer);