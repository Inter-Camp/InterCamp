import QUIZ_DATA from './quiz.data';

const INITIAL_STATE = {
    questions: QUIZ_DATA
}

const quizReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default: return state
    }
};

export default quizReducer;