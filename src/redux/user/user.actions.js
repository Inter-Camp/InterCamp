import { UserActionTypes } from './user.types';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user,
});

export const accountExistsError = error => ({
    type: UserActionTypes.ACCOUNT_EXISTS_ERROR,
    payload: error
})

export const fetchAccountExistsError = () => {
    return dispatch => {
        firebase.auth()
            .getRedirectResult()
            .then((result) => {
                if (result.credential) {
                    /** @type {firebase.auth.OAuthCredential} */
                    // var credential = result.credential;
                    // This gives you an Access Token. You can use it to access the GitHub API.
                    // var token = credential.accessToken;
                }
            }).catch((error) => {
                var email = error.email
                firebase.auth().fetchSignInMethodsForEmail(email).then(function (methods) {
                    const currProvider = methods[0];
                    dispatch(accountExistsError(`There is alredy a user: ${email}, registered with ${currProvider}`))
                });
            });
    }
}