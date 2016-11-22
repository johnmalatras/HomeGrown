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
export const OPEN_AO_MODAL = 'OPEN_AO_MODAL';
export const CLOSE_AO_MODAL = 'CLOSE_AO_MODAL';
export const OPEN_CL_MODAL = 'OPEN_CL_MODAL';
export const CLOSE_CL_MODAL = 'CLOSE_CL_MODAL';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const PLACE_ORDER = 'PLACE_ORDER';
export const ADD_ITEM = 'ADD_ITEM';
export const REQUEST_ACTIVE_ORDERS = 'REQUEST_ACTIVE_ORDERS';
export const REQUEST_CURRENT_LISTINGS = 'REQUEST_CURRENT_LISTINGS';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
export const DELETE_ITEM = 'DELETE_ITEM';

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

        console.log(credentials.isResturant);
        holdData = {
            ownerName:credentials.ownerName,
            bussinessName: credentials.bussinessName,
            address: credentials.address,
            city: credentials.city,
            state: credentials.state,
            phoneNumber: credentials.phoneNumber,
            isResturant: credentials.isResturant
        };
        firstTime = true;

    }
};
export function verifyAuth(){
    return function (dispatch) {
        Firebase.auth().onAuthStateChanged(user => {
            if(user && firstTime)
            {
                const userUid = Firebase.auth().currentUser.uid;
                firstTime = false;
                const user = database.ref('/users/'+userUid.toString());
                user.update({
                    ["ownerName"]:holdData.ownerName,
                    ["bussinessName"]: holdData.bussinessName,
                    ["address"]: holdData.address,
                    ["city"]: holdData.city,
                    ["state"]: holdData.state,
                    ["phoneNumber"]: holdData.phoneNumber,
                    ["isRestaurant"]: holdData.isResturant
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
    return function(dispatch) {
        const userUid = Firebase.auth().currentUser.uid;
        var ref = database.ref('/users/'+userUid.toString());
        ref.on("value", function(snapshot) {
          dispatch({
            type: AUTH_USER,
            payload: snapshot.val()
          });
        }, function (errorObject) {
          console.log("The read failed: " + errorObject.code);
          return {
            type: null
          };
        });
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
    var holdCart = Array.from(cart);
    return {
        type: REMOVE_FROM_CART,
        payload: holdCart
    }
}

export function placeOrder(order) {

    const userUid = Firebase.auth().currentUser.uid;
    const orderNode = database.ref('/active_orders/'+userUid.toString() + '_'+Date.now());
    const userActiveNode = database.ref('users/'+userUid.toString()+'/active_orders/'+Date.now());

    for (var key in order.order.cart) {
        var item = order.order.cart[key];

        // update quantity
        var currentQuantity = item[0].quantity;
        var boughtQuantity = item[1];
        var newQuantity = currentQuantity - boughtQuantity;
        var itemNode = database.ref('items/'+item[0].key);
        var userItemRef = database.ref('users/'+userUid+'/items/'+item[0].title+'_'+item[0].quality);

        
        if (newQuantity == 0) {
            itemNode.remove();
        } else {
            itemNode.update({
                ["quantity"]: newQuantity
            });
        }

        userItemRef.update({
            ["quantity"]: newQuantity
        });

        // add to buyer active order
        const buyerActiveNode = database.ref('users/'+userUid.toString()+'/active_orders/'+item[0].selleruid+'_'+Date.now());
        buyerActiveNode.update({
            ["order"]: order.order.cart,
            ["subtotal"]: order.order.subtotal,
            ["fee"]: order.order.fee,
            ["total"]: order.order.total
        });

        // add to seller active order
        const sellerActiveNode = database.ref('users/'+item[0].selleruid+'/active_orders/'+userUid.toString()+'_'+Date.now());
        sellerActiveNode.update({
            ["order"]: order.order.cart,
            ["subtotal"]: order.order.subtotal,
            ["fee"]: order.order.fee,
            ["total"]: order.order.total
        });
    }

    // add to overall active orders
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


export function requestActiveOrders() {
  return function(dispatch) {

    const userUid = Firebase.auth().currentUser.uid;
    var ref = database.ref('users/'+userUid+'/active_orders');
    ref.on("value", function(snapshot) {
      dispatch({
        type: REQUEST_ACTIVE_ORDERS,
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

export function openActiveOrderModal(item) {
  return {
    type: OPEN_AO_MODAL,
    item
  }
}

export function closeActiveOrderModal() {
  return {
    type: CLOSE_AO_MODAL
  }
}

export function requestCurrentListings() {
  return function(dispatch) {

    const userUid = Firebase.auth().currentUser.uid;
    var ref = database.ref('users/'+userUid+'/items');
    ref.on("value", function(snapshot) {
      dispatch({
        type: REQUEST_CURRENT_LISTINGS,
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

export function openCLModal(item) {
  return {
    type: OPEN_CL_MODAL,
    item
  }
}

export function closeCLModal() {
  return {
    type: CLOSE_CL_MODAL
  }
}

export function updateQuantity(newQuantity, item) {
    const userUid = Firebase.auth().currentUser.uid;

    var userItemRef = database.ref('users/'+userUid+'/items/'+item.item.key);
    var itemRef = database.ref('items/'+userUid+'_'+item.item.title+'_'+item.item.quality);

    userItemRef.update({
            ["quantity"]: newQuantity
    });

    itemRef.update({
            ["quantity"]: newQuantity
    });

    return {
        type: UPDATE_QUANTITY
    }
}

export function deleteItem(item) {
    const userUid = Firebase.auth().currentUser.uid;

    var userItemRef = database.ref('users/'+userUid+'/items/'+item.selectedItem.key);
    var itemRef = database.ref('items/'+userUid+'_'+item.selectedItem.title+'_'+item.selectedItem.quality);

    userItemRef.remove();
    itemRef.remove();
    return {
        type: DELETE_ITEM
    }
}