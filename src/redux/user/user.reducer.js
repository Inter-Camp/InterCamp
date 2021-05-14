import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
    currentUser: null,
    isFetching: true,
    errorMsg: ''
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload,
                isFetching: false
            }
        case UserActionTypes.ACCOUNT_EXISTS_ERROR:
            return {
                ...state,
                errorMsg: action.payload
            }
        case UserActionTypes.IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;