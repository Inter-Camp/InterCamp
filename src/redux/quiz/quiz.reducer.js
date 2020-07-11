import QUIZ_DATA from './quiz.data';
import QuizActionTypes from './quiz.types'
import { addItemToFavourite, deleteItemFromFavorite } from './quiz.utils';

const INITIAL_STATE = {
    questions: QUIZ_DATA
}

const quizReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case QuizActionTypes.UPDATE_QUESTIONS:
            return {
                ...state,
                questions: action.payload
            }
        case QuizActionTypes.ADD_FAVORITE:
            return {
                questions: {
                    ...state.questions,
                    favorite: addItemToFavourite(state.questions.favorite, action.payload),
                }
            }
        case QuizActionTypes.DELETE_FAVORITE:
            return {
                questions: {
                    ...state.questions,
                    favorite: deleteItemFromFavorite(state.questions.favorite, action.payload)
                }
            }
        default: return state
    }
};

export default quizReducer;