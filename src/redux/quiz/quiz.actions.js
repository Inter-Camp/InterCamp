import QuizActionTypes from './quiz.types';

export const addFavorite = (item) => ({
    type: QuizActionTypes.ADD_FAVORITE,
    payload: item
});

export const deleteFavorite = (item) => ({
    type: QuizActionTypes.DELETE_FAVORITE,
    payload: item
})