/**
 * Created by alextulenko on 11/10/16.
 */
import { hashHistory } from 'react-router';
import Firebase from 'firebase';

export const AUTH_ERROR = 'AUTH_ERROR';
export const AUTH_USER = 'AUTH_USER';

const config = {
    apiKey: "AIzaSyCMNnrLwBozPpfG8d4YzCi9W334FhcorEg",
    authDomain: "homegrown-65645.firebaseapp.com",
    databaseURL: "https://homegrown-65645.firebaseio.com",
    storageBucket: "homegrown-65645.appspot.com",
    messagingSenderId: "818910687408"
};
Firebase.initializeApp(config);
const database = Firebase.database();

export function signInUser(credentials){
    return function(dispatch) {
        Firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
            .then(response => {
                dispatch(authUser());
                hashHistory.push('/');
            })
            .catch(error => {
                dispatch(authError(error));
            });
    }
};

export function signUpUser(credentials) {
    return function(dispatch) {
        Firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password)
            .then(response => {
                dispatch(authUser());
                hashHistory.push('/');
            })
            .catch(error => {
                console.log(error);
                dispatch(authError(error));
            });
        const userUid = Firebase.auth().currentUser.uid;
        const user = database.ref('/users/'+userUid.toString());
        user.update({
            ["bussinessName"]: credentials.bussinessName,
            ["addressLineOne"]: credentials.addressLineOne,
            ["addressLineTwo"]: credentials.addressLineTwo,
            ["phoneNumber"]: credentials.phoneNumber
            });
    }
};
export function verifyAuth(){
    return function (dispatch) {
        Firebase.auth().onAuthStateChanged(user => {
            if (user) {
                dispatch(authUser());
            } else {
                dispatch(signOutUser());
            }
        });
    }
};

export function signOutUser() {
    Firebase.auth().signOut();
    hashHistory.push('/homePage');
    return {
        type: 'SIGN_OUT_USER'

    }
};
export function authUser() {
    return {
        type: AUTH_USER
    }
};

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    }
};