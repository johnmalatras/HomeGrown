/**
 * Created by alextulenko on 11/10/16.
 */
import { browserHistory } from 'react-router';
import Firebase from 'firebase';
import Geofire from 'geofire';
import RSVP from 'rsvp';

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
export const UPDATE_PRICE = 'UPDATE_PRICE';
export const DELETE_ITEM = 'DELETE_ITEM';
export const REQUEST_ITEM_IMAGES = 'REQUEST_ITEM_IMAGES';
export const UPDATE_ACCOUNT_PAGE = 'UPDATE_ACCOUNT_PAGE';
export const UPDATE_USER_INFO = 'UPDATE_USER_INFO';
export const UPDATE_EMAIL_ERROR = 'UPDATE_EMAIL_ERROR';
export const UPDATE_PASSWORD_ERROR = 'UPDATE_PASSWORD_ERROR';
export const UPDATE_PASSWORD_SUCCESSFUL = 'UPDATE_PASSWORD_SUCCESSFUL';
export const RESET_PASSWORD_UPDATE = 'RESET_PASSWORD_UPDATE';
export const UPDATE_AVAILABLE_DATES = 'UPDATE_AVAILABLE_DATES';
export const SET_IMAGES = 'SET_IMAGES';
export const IMAGE_LOADED = 'IMAGE_LOADED';
export const SET_DATE = 'SET_DATE';
export const OPEN_FP_MODAL = 'OPEN_FP_MODAL';
export const CLOSE_FP_MODAL = 'CLOSE_FP_MODAL';
export const FORGOT_PASSWORD = 'FORGOT_PASSWORD';
export const UPDATE_DATE = 'UPDATE_DATE';
export const SWITCH_LOGIN = 'SWITCH_LOGIN';
export const UPDATE_ITEMS = 'UPDATE_ITEMS';

//DEVELOPMENT SERVER
const config = {
    apiKey: "AIzaSyCMNnrLwBozPpfG8d4YzCi9W334FhcorEg",
    authDomain: "homegrown-65645.firebaseapp.com",
    databaseURL: "https://homegrown-65645.firebaseio.com",
    storageBucket: "homegrown-65645.appspot.com",
    messagingSenderId: "818910687408"
};

//PRODUCTION SERVER
/*
const config = {
    apiKey: "AIzaSyCbZEmVcw_tndo2X05rP9wg1fKQDC2KE_s",
    authDomain: "ripenow-bbe84.firebaseapp.com",
    databaseURL: "https://ripenow-bbe84.firebaseio.com",
    storageBucket: "ripenow-bbe84.appspot.com",
    messagingSenderId: "475593459363"
};
*/

Firebase.initializeApp(config);
const database = Firebase.database();
const authData = Firebase.auth();
const storage = Firebase.storage();

// Generate a  Firebase location
var firebaseRef = Firebase.database().ref('geoFire');//.push();
// Create a new GeoFire instance at the  Firebase location
var geoFire = new Geofire(firebaseRef);

var holdData = [];
var firstTime = false;

export function signInUser(credentials){
    return function(dispatch) {
        Firebase.auth().signInWithEmailAndPassword(credentials.email1, credentials.password1)
            .then(response => {
                dispatch(authUser());
                browserHistory.push('/');
            })
            .catch(error => {
                dispatch(authError(error));
            });
    }
};

export function updateCurrentDate() {
    return {
        type: UPDATE_DATE
    }
}
export function updateItems(){
    return {
        type: UPDATE_ITEMS
    }
}
export function setSelectedDate(date, dateMoment, cartIndex) {
    return {
        type: 'SET_DATE',
        date: date,
        dateMoment: dateMoment,
        cartIndex: cartIndex
    }
}

export function signUpUser(credentials) {
    return function(dispatch) {
        authData.createUserWithEmailAndPassword(credentials.email, credentials.password)
            .then(response => {
                dispatch(authUser());
                browserHistory.push('/');
            })
            .catch(error => {
                console.log(error);
                dispatch(authError(error));
            });

        holdData = {
            email:credentials.email,
            phoneNumber: credentials.phoneNumber,
            isRestaurant: credentials.isRestaurant
        };
        firstTime = true;

        fetch('http://104.236.192.230/api/signup', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        }).then(response => {
            response.json().then(data => {
                console.log(data);
            });
        });
    
    }

};
export function verifyAuth(){
    return function (dispatch) {
        Firebase.auth().onAuthStateChanged(user => {
            if(user && firstTime)
            {
                console.log(holdData.isRestaurant);
                const userUid = Firebase.auth().currentUser.uid;
                firstTime = false;
                const user = database.ref('/users/'+userUid.toString());
                var dates = [
                    {key:'monday', value:false},
                    {key:'tuesday', value:false},
                    {key:'wednesday', value:false},
                    {key:'thursday', value:false},
                    {key:'friday', value:false},
                    {key:'saturday', value:false},
                    {key:'sunday', value:false},
                ];
                user.update({
                    ["email"]:holdData.email,
                    ["phoneNumber"]: holdData.phoneNumber,
                    ["isRestaurant"]: holdData.isRestaurant.toString(),
                    ["availableDates"]: dates,
                    ["isAccountFinished"]: false
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
    browserHistory.push('/home');
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
          return {
            type: null
          };
        });
      }
};
export function resetPasswordUpdate()
{
    return {
        type: 'RESET_PASSWORD_UPDATE'
    }

}

export function getItemsInArea(cords,radius)
{
    return function (dispatch) {
        var promise = new RSVP.Promise(function (resolve, reject) {
            console.log("*** Creating GeoQuery ***");
            // Create a GeoQuery centered at fish2
            var geoQuery = geoFire.query({
                center: cords,
                radius: radius
            });
            var keys = [];
            var onKeyEnteredRegistration = geoQuery.on("key_entered", function (key, location) {
                //console.log(key + " entered the query. Hi " + key + "!");
                var value = [key, location];
                console.log((JSON.parse(JSON.stringify(value))));
                //resolve(value);
                keys.push(key);
            })

            var onReadyRegistration = geoQuery.on("ready", function () {
                console.log("*** 'ready' event fired - cancelling query ***");
                geoQuery.cancel();
                resolve((JSON.parse(JSON.stringify(keys))));
            })
        });

        promise.then(function (value) {
            // success
            var items = [];

            for (var i = 0; i < value.length; i++) {
                Firebase.database().ref('/items/' + value[i]).once('value').then(function (snapshot) {
                        items.push(snapshot.val());
                        // x = JSON.parse(JSON.stringify(items));
                        // console.log('x');
                        // console.log(x);
                        dispatch({
                            type: REQUEST_ITEMS,
                            payload: items

                        });
                    }
                )
            }
            // x = JSON.parse(JSON.stringify(items));
            // console.log('x');
            // console.log(x);
            // dispatch({
            //         type: REQUEST_ITEMS,
            //         payload: x
            //
            // });
        })
    }
}
export function updateAvailableDate(day, value, currentAvilDates, user)
{
    const userUid = Firebase.auth().currentUser.uid;

    for(var i = 0; i < 7; i++)
    {
        if(currentAvilDates[i].key == day)
        {
            currentAvilDates[i].value = value;
        }
    }

    const dateRef = database.ref('/users/'+userUid.toString());
    dateRef.update({
        ['availableDates']: currentAvilDates
    });

    if(user.items != undefined)
    {
        var hold = user.items;
        for(var item in hold) {
            hold[item].availableDates = currentAvilDates;
            var itemRef = database.ref('items/'+userUid+'_'+ item);
            itemRef.update({
                ["availableDates"]: currentAvilDates
            });
        }
        var userItemRef = database.ref('users/'+userUid);
        userItemRef.update({
            ["items"]: hold
        });
        return {
            type: UPDATE_AVAILABLE_DATES
        }
    }
}

export function updateUserPassword(Email, newPassword, oldPassword) {
    return function(dispatch) {
        var user = Firebase.auth().currentUser;
        const credential = Firebase.auth.EmailAuthProvider.credential(
            Email,
            oldPassword
        );
        user.reauthenticate(credential).then(function() {
            // User re-authenticated.
            var user = Firebase.auth().currentUser;
            user.updatePassword(newPassword.toString()).then(function() {
                // Update successful.
                dispatch({
                    type: UPDATE_PASSWORD_SUCCESSFUL
                });
            }, function(error) {
                // An error happened.
                dispatch({
                    type: UPDATE_PASSWORD_ERROR,
                    payload: error.message
                });
            });
        }, function(error) {
            // An error happened.
            dispatch({
                type: UPDATE_PASSWORD_ERROR,
                payload: error.message
            });
        });
    }
}

export function updateUserEmail(oldEmail,newEmail,password){
    return function(dispatch) {
        var user = Firebase.auth().currentUser;
        const credential = Firebase.auth.EmailAuthProvider.credential(
            oldEmail,
            password
        );
        user.reauthenticate(credential).then(function() {
            // User re-authenticated.
            var user = Firebase.auth().currentUser;
            user.updateEmail(newEmail.toString()).then(function () {
                // Update successful.
                const userUid = Firebase.auth().currentUser.uid;
                const user = database.ref('/users/' + userUid.toString());
                user.update({
                    ["email"]: newEmail.toString()
                });

                browserHistory.push('/account');
                dispatch({
                    type: UPDATE_USER_INFO
                });
            }, function (error) {
                // An error happened.
                dispatch({
                    type: UPDATE_EMAIL_ERROR,
                    payload: error.message
                });
            });
        }, function(error) {
            // An error happened.
            dispatch({
                type: UPDATE_EMAIL_ERROR,
                payload: error.message
            });
        });



    };
}

export function unlockAccount(){
    const userUid = Firebase.auth().currentUser.uid;
    const user = database.ref('/users/'+userUid.toString());
    user.update({
        ["isAccountFinished"]: true
    });
    return {
        type: UPDATE_USER_INFO
    }

}
export function updateUserSetting(parameter,value){
    const userUid = Firebase.auth().currentUser.uid;
    const user = database.ref('/users/'+userUid.toString());
    user.update({
        [parameter.toString()]: value
    });
    return {
        type: UPDATE_USER_INFO
    }
}

export function updateAccountPage(parameter){
    return {
        type: UPDATE_ACCOUNT_PAGE,
        payload: parameter
    }
}

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    }
};

//Action call to add Item to Market from account page
export function addItem(values, ownerName, businessName, availableDates, email) {
    return function(dispatch) {
        var imageName = values.ProductImage[0].name;
        const userUid = Firebase.auth().currentUser.uid;
        var itemID = userUid.toString() + '_' + values.ProductTitle.toString() + '_' + values.Quality.toString();
        const itemRef = database.ref('/items/'+ itemID);

        var downloadURL;
        const imageRef = storage.ref('image/' + itemID);
        imageRef.put(values.ProductImage[0]).then(function(snapshot) {
            //console.log('Uploaded a blob or file!');
            imageRef.getDownloadURL().then(function(snapshot) {

                itemRef.update({
                    ["title"]:values.ProductTitle,
                    ["seller"]:ownerName,
                    ["businessName"]:businessName,
                    ["quantity"]: values.ProductQuantity,
                    ["metric"]: values.ProductMetric,
                    ["price"]: values.ProductPrice,
                    ["quality"]: values.Quality,
                    ["sellerUID"]: userUid,
                    ["availableDates"]: availableDates,
                    ["downloadURL"]: snapshot,
                    ["sellerEmail"]: email
                });

                var itemID = userUid.toString() + '_' + values.ProductTitle.toString() + '_' + values.Quality.toString();
                //Hardcoded in Raleigh cords, will cahnge eventually
                geoFire.set(itemID, [35.7796,-78.6382]).then(function() {
                    console.log("SET LOCATION");
                }, function(error) {
                    console.log("Error: " + error);
                });

                var itemID = values.ProductTitle.toString() + '_' + values.Quality.toString();
                const userItemRef = database.ref('/users/'+ userUid + '/items/' + itemID);
                userItemRef.update({
                    ["title"]:values.ProductTitle,
                    ["seller"]:ownerName,
                    ["businessName"]:businessName,
                    ["quantity"]: values.ProductQuantity,
                    ["metric"]: values.ProductMetric,
                    ["price"]: values.ProductPrice,
                    ["quality"]: values.Quality,
                    ["sellerUID"]: userUid,
                    ["availableDates"]: availableDates,
                    ["downloadURL"]: snapshot
                });

                browserHistory.push('/account');
            });
        });

    }
}

export function imageLoaded(){
    return {
        type: IMAGE_LOADED
    }
}

export function getImages(items, item) {
    return function(dispatch) {
        var imgRef = storage.ref('image/' + item);
        imgRef.getDownloadURL().then(function (url) {
            // Insert url into an <img> tag to "download"
            items[item].image = url;
            var x =JSON.parse(JSON.stringify(items));
            dispatch({
                type: REQUEST_ITEMS,
                payload: x
            });
        }).catch(function (error) {
            switch (error.code) {
                case 'storage/object_not_found':
                    // File doesn't exist
                    break;

                case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    break;

                case 'storage/canceled':
                    // User canceled the upload
                    break;

                case 'storage/unknown':
                    // Unknown error occurred, inspect the server response
                    break;
            }
        });
    }
}
export function requestItems() {
  return function(dispatch) {
    var ref = database.ref("items");
    ref.on("value", function(snapshot) {
        var hold = snapshot.val();
      dispatch({
         type: REQUEST_ITEMS,
         payload: hold
      });
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
      return {
        type: null
      };
    });
  }
}
export function switchLogin(isSignIn){
    return {
        type:SWITCH_LOGIN,
        payload: isSignIn
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

export function addToCart(cartItem, cartIndex) {
    var cart = cartItem.cartAdd.cart;
    var newCartItem = [cartItem.cartAdd.item, cartItem.cartAdd.quantity];
    cart.push(newCartItem);
    return {
        type: ADD_TO_CART,
        cart: cart,
        cartIndex: cartIndex
    }
}

export function deleteCartItem(cartItem, cartIndex, theCart ) {
    var cart = theCart.cart;
    var item = cartItem.selectedItem;
    var index = cart.indexOf(item);
    if (index > -1) {
        cart.splice(index, 1);
    }
    var holdCart = Array.from(cart);
    return {
        type: REMOVE_FROM_CART,
        payload: holdCart,
        cartIndex: cartIndex
    }
}

export function placeOrder(order,cartIndex,user) {
    const userUid = Firebase.auth().currentUser.uid;
    const timestamp = Date.now();
    const orderNode = database.ref('/active_orders/'+userUid.toString() + '_'+timestamp);

    for (var key in order.order.cart) {
        var item = order.order.cart[key];

        // update quantity
        var currentQuantity = item[0].quantity;
        var boughtQuantity = item[1];
        var newQuantity = currentQuantity - boughtQuantity;
        var itemNode = database.ref('items/'+item[0].key);
        var userItemRef = database.ref('users/'+item[0].sellerUID+'/items/'+item[0].title+'_'+item[0].quality);

        
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
        const buyerActiveNode = database.ref('users/'+userUid.toString()+'/active_orders/'+item[0].sellerUID+'_'+timestamp);
        buyerActiveNode.update({
            ["order"]: order.order.cart,
            ["subtotal"]: order.order.subtotal,
            ["fee"]: order.order.fee,
            ["total"]: order.order.total,
            ["comment"]:order.order.comment,
            ["deliveryTime"]:order.order.deliveryTime,
            ["deliveryDate"]:order.order.deliveryDate
        });

        // add to seller active order
        const sellerActiveNode = database.ref('users/'+item[0].sellerUID+'/active_orders/'+userUid.toString()+'_'+timestamp);
        sellerActiveNode.update({
            ["order"]: order.order.cart,
            ["subtotal"]: order.order.subtotal,
            ["fee"]: order.order.fee,
            ["total"]: order.order.total,
            ["comment"]:order.order.comment,
            ["deliveryTime"]:order.order.deliveryTime,
            ["deliveryDate"]:order.order.deliveryDate
        });
    }

    // add to overall active orders
    orderNode.update({
            ["order"]: order.order.cart,
            ["subtotal"]: order.order.subtotal,
            ["fee"]: order.order.fee,
            ["total"]: order.order.total,
            ["comment"]:order.order.comment,
            ["deliveryTime"]:order.order.deliveryTime,
            ["deliveryDate"]:order.order.deliveryDate
    });

    order.order.user = user;

    console.log(order.order);
    fetch('http://104.236.192.230/api/placeorder', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(order.order),
    }).then(response => {
        response.json().then(data => {
            console.log(data);
        });
    });

    alert("Order Placed! Thank you for your business!");
    return {
        type: PLACE_ORDER,
        payload: [],
        cartIndex:cartIndex
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
      //console.log("The read failed: " + errorObject.code);
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

export function updateAvailableItemDates(user) {
    console.log("HIT UPDATE ITEM");
    const userUid = Firebase.auth().currentUser.uid;

    var hold = user.items;
    for(var h = 0; h < hold.length; h++)
    {
        hold[h].availableDates = user.availableDates;
        var itemRef = database.ref('items/'+userUid+'_'+ hold[h].title +'_'+ hold[h].quality);
        itemRef.update({
            ["availableDates"]: user.availableDates
        });
    }
    var userItemRef = database.ref('users/'+userUid);
    userItemRef.update({
        ["items"]: hold
    });
    return {
        type: UPDATE_QUANTITY
    }
}

export function updateQuantity(newQuantity, item) {
    const userUid = Firebase.auth().currentUser.uid;

    var userItemRef = database.ref('users/'+userUid+'/items/'+item.item.title+'_'+item.item.quality);
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

export function updatePrice(newPrice, item) {
    const userUid = Firebase.auth().currentUser.uid;

    var userItemRef = database.ref('users/'+userUid+'/items/'+item.item.title+'_'+item.item.quality);
    var itemRef = database.ref('items/'+userUid+'_'+item.item.title+'_'+item.item.quality);

    userItemRef.update({
            ["price"]: newPrice
    });

    itemRef.update({
            ["price"]: newPrice
    });

    return {
        type: UPDATE_PRICE
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

export function openForgotPasswordModal() {
    return {
        type: OPEN_FP_MODAL
    }
}

export function closeForgotPasswordModal() {
    return {
        type: CLOSE_FP_MODAL
    }
}

export function forgotPassword(email) {
    authData.sendPasswordResetEmail(email).then(function() {
      alert("Password reset email sent!");
    }, function(error) {
      console.log(error)
    });
    return {
        type: FORGOT_PASSWORD
    }
}