export const REQUEST_ITEMS = 'REQUEST_ITEMS';
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const ADD_TO_CART = 'ADD_TO_CART';

var firebase = require('firebase');

var config = {
    apiKey: "AIzaSyCMNnrLwBozPpfG8d4YzCi9W334FhcorEg",
    authDomain: "homegrown-65645.firebaseapp.com",
    databaseURL: "https://homegrown-65645.firebaseio.com",
    storageBucket: "homegrown-65645.appspot.com",
    messagingSenderId: "818910687408"
};

firebase.initializeApp(config);
var db = firebase.database();

export function requestItems() {
  return function(dispatch) {
    var ref = db.ref("items");
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