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
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const PLACE_ORDER = 'PLACE_ORDER';
export const ADD_ITEM = 'ADD_ITEM';
export const OPEN_MODAL_ACCOUNT = 'OPEN_MODAL_ACCOUNT';
export const CLOSE_MODAL_ACCOUNT = 'CLOSE_MODAL_ACCOUNT';

//Added by Seth
export const UPDATE_INFO = 'UPDATE_INFO';
export const UPDATE = 'UPDATE';
export const OPEN_EDIT_MODAL = 'OPEN_EDIT_MODAL';

const config = {
    apiKey: "AIzaSyCMNnrLwBozPpfG8d4YzCi9W334FhcorEg",
    authDomain: "homegrown-65645.firebaseapp.com",
    databaseURL: "https://homegrown-65645.firebaseio.com",
    storageBucket: "homegrown-65645.appspot.com",
    messagingSenderId: "818910687408"
};
Firebase.initializeApp(config);
const database = Firebase.database();
const authData = Firebase.auth();

var holdData = [];
var firstTime = false;

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
        authData.createUserWithEmailAndPassword(credentials.email, credentials.password)
            .then(response => {
                dispatch(authUser());
                hashHistory.push('/');
            })
            .catch(error => {
                console.log(error);
                dispatch(authError(error));
            });
        //const userUid = Firebase.auth().currentUser.uid;
        //
        // console.log("HIT");
        // console.log(authData.currentUser);
        //const user = database.ref('/users/'+userUid.toString());
        //database.ref.childByAppendingPath("users").childByAppendingPath(authData.uid).setValue(newUser)
        // holdData = [{
        //     ["ownerName"]:credentials.ownerName,
        //     ["bussinessName"]: credentials.bussinessName,
        //     ["address"]: credentials.address,
        //     ["city"]: credentials.city,
        //     ["state"]: credentials.state,
        //     ["phoneNumber"]: credentials.phoneNumber
        // }];

        holdData = {
            ownerName:credentials.ownerName,
            bussinessName: credentials.bussinessName,
            address: credentials.address,
            city: credentials.city,
            state: credentials.state,
            phoneNumber: credentials.phoneNumber
        };
        firstTime = true;
        // user.update({
        //     ["ownerName"]:credentials.ownerName,
        //     ["bussinessName"]: credentials.bussinessName,
        //     ["address"]: credentials.address,
        //     ["city"]: credentials.city,
        //     ["state"]: credentials.state,
        //     ["phoneNumber"]: credentials.phoneNumber
        // });
    }
};
export function verifyAuth(){
    return function (dispatch) {
        Firebase.auth().onAuthStateChanged(user => {
            if(user &&firstTime)
            {
                firstTime = false;
                const userUid = Firebase.auth().currentUser.uid;
                const user = database.ref('/users/'+userUid.toString());
                user.update({
                    ["ownerName"]:holdData.ownerName,
                    ["bussinessName"]: holdData.bussinessName,
                    ["address"]: holdData.address,
                    ["city"]: holdData.city,
                    ["state"]: holdData.state,
                    ["phoneNumber"]: holdData.phoneNumber
                });
            }
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

//Action call to add Itemto Market from account page
export function addItem(values) {
    return {
        type: ADD_ITEM
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

export function deleteCartItem(cartItem, theCart) {
    var cart = theCart.cart;
    var item = cartItem.selectedItem;
    var index = cart.indexOf(item);
    if (index > -1) {
        cart.splice(index, 1);
    }
    return {
        type: REMOVE_FROM_CART,
        payload: cart
    }
}

export function placeOrder(order) {
    const userUid = Firebase.auth().currentUser.uid;
    const orderNode = database.ref('/active_orders/'+userUid.toString());
    console.log(order);

    orderNode.update({
            ["order"]: order.order.cart,
            ["subtotal"]: order.order.subtotal,
            ["fee"]: order.order.fee,
            ["total"]: order.order.total
    });

    return {
        type: PLACE_ORDER,
        payload: []
    }
}

export function openModalAccount(item) {
    return {
        type: OPEN_MODAL_ACCOUNT
    }
}

export function closeModalAccount() {
    return {
        type: CLOSE_MODAL_ACCOUNT
    }
}

//Added by Seth
export function updateInfo() {
    return {
        type: UPDATE
    }
}

export function submitUpdateModal(value) {
    //console.log(value);
    return {
        type: UPDATE
    }
}

export function openEditModal() {
    return {
        type: OPEN_EDIT_MODAL
    }
}