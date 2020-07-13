import QUIZ_DATA from './quiz.data';
import QuizActionTypes from './quiz.types'
import { addItemToFavourite, deleteItemFromFavorite } from './quiz.utils';

const INITIAL_STATE = {
    questions: null,
    isFetching: false,
    errorMessage: undefined
}

const quizReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case QuizActionTypes.FETCH_QUESTIONS_START:
            return {
                ...state,
                isFetching: true
            }
        case QuizActionTypes.FETCH_QUESTIONS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                questions: action.payload
            }
        case QuizActionTypes.FETCH_QUESTIONS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
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