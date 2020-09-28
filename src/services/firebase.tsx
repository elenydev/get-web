import * as firebase from 'firebase';
import "firebase/auth";
import 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyBgEArZopmpiWb2tyj3HomTv0A04ht0L0w",
    authDomain: "get-we.firebaseapp.com",
    databaseURL: "https://get-we.firebaseio.com",
    projectId: "get-we",
    storageBucket: "get-we.appspot.com",
    messagingSenderId: "1052723965068",
    appId: "1:1052723965068:web:69c70f02c053ce76af9fa9",
    measurementId: "G-S1G5FKH6LT"
};
firebase.initializeApp(firebaseConfig);

const fbProvider = new firebase.auth.FacebookAuthProvider();
const ghProvider = new firebase.auth.GithubAuthProvider();
export const fbAuth = () =>{
    return firebase.auth().signInWithPopup(fbProvider)
}
export const gitAuth = () =>{
    return firebase.auth().signInWithPopup(ghProvider)
}

export const db=firebase.firestore();
export const auth = firebase.auth;