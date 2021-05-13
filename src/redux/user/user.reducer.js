import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
    currentUser: null,
    errorMsg: ''
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        case UserActionTypes.ACCOUNT_EXISTS_ERROR:
            return {
                ...state,
                errorMsg: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;