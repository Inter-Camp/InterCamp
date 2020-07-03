import QUIZ_DATA from './quiz.data';
import QuizActionTypes from './quiz.types'
import { addItemToFavourite } from './quiz.utils';

const INITIAL_STATE = {
    questions: QUIZ_DATA
}

const quizReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case QuizActionTypes.ADD_FAVORITE:
            return {
                questions: {
                    ...state.questions,
                    favorite: addItemToFavourite(state.questions.favorite, action.payload),
                }
            }
        default: return state
    }
};

export default quizReducer;