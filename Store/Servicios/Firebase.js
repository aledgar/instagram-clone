import * as firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAqdFl4MfzqhmJJienhQyZ9KA7CA1-oXuc",
    authDomain: "clone-instagram-8cc15.firebaseapp.com",
    databaseURL: "https://clone-instagram-8cc15.firebaseio.com",
    projectId: "clone-instagram-8cc15",
    storageBucket: "clone-instagram-8cc15.appspot.com",
    messagingSenderId: "518897418080"
};
firebase.initializeApp(config);

// const auth = firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error){
//     var errorCode = error.code;
//     var errorMessage = error.message;
// })

export const autentication = firebase.auth();
export const dataBase = firebase.database();
