import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
    currentUser: null,
    signInProcess: false
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default userReducer;