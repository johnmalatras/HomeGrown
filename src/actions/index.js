/**
 * Created by alextulenko on 11/10/16.
 */
import { hashHistory } from 'react-router';
import Firebase from 'firebase';

export const AUTH_ERROR = 'AUTH_ERROR';
export const AUTH_USER = 'AUTH_USER';
export const REQUEST_ITEMS = 'REQUEST_ITEMS';
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const ADD_TO_CART = 'ADD_TO_CART';

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

export function requestItems() {
  return function(dispatch) {
    var ref = database.ref("items");
    ref.on("value", function(snapshot) {
      dispatch({
        type: REQUEST_ITEMS,
        payload: snapshot.val()
      });
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
      return {
        type: null
      };
    });
  }
}

export function openModal(item) {
  return {
    type: OPEN_MODAL,
    item
  }
}

export function closeModal() {
  return {
    type: CLOSE_MODAL
  }
}

export function addToCart(cartItem) {
  var cart = cartItem.cartAdd.cart;
  var newCartItem = [cartItem.cartAdd.item, cartItem.cartAdd.quantity];
  cart.push(newCartItem);
  return {
    type: ADD_TO_CART,
    payload: cart
  }
}
