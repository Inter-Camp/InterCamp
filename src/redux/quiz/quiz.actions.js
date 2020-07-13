import QuizActionTypes from './quiz.types';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebas.utils'

export const addFavorite = (item) => ({
    type: QuizActionTypes.ADD_FAVORITE,
    payload: item
});

export const deleteFavorite = (item) => ({
    type: QuizActionTypes.DELETE_FAVORITE,
    payload: item
});

export const fetchQuestionsStart = () => ({
    type: QuizActionTypes.FETCH_QUESTIONS_START
});

export const fetchQuestionsSuccess = collectionsMap => ({
    type: QuizActionTypes.FETCH_QUESTIONS_SUCCESS,
    payload: collectionsMap
});

export const fetchQuestionsFailure = errorMessage => ({
    type: QuizActionTypes.FETCH_QUESTIONS_FAILURE,
    payload: errorMessage
})

export const fetchQuestionsStartAsync = () => {
    return dispatch => {
        const quizRef = firestore.collection("quizzes");
        dispatch(fetchQuestionsStart());
        // whenever it updates it'll update;
        quizRef.get()
            .then((snapshot) => {
                // console.log(snapshot);
                const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
                dispatch(fetchQuestionsSuccess(collectionsMap));
                // console.log(collectionsMap);
            })
            .catch(error => dispatch(fetchQuestionsFailure(error.message)));
    }
}

