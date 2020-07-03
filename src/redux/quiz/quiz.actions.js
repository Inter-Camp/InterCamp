import QuizActionTypes from './quiz.types';

export const addFavorite = (item) => ({
    type: QuizActionTypes.ADD_FAVORITE,
    payload: item
});