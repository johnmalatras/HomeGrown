/**
 * Created by John on 10/22/16.
 */
var firebase = require("firebase");
var React = require("react");
var ReactDOM = require("react-dom");

// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
    apiKey: "AIzaSyCMNnrLwBozPpfG8d4YzCi9W334FhcorEg",
    authDomain: "homegrown-65645.firebaseapp.com",
    databaseURL: "https://homegrown-65645.firebaseio.com",
    storageBucket: "homegrown-65645.appspot.com",
    messagingSenderId: "818910687408"
};
firebase.initializeApp(config);

import Login from './components/login.jsx';