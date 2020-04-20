import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDYue3sX-Hwh_KAflcA_lQXb-4BB-6hGqQ",
    authDomain: "crwn-db-bd24a.firebaseapp.com",
    databaseURL: "https://crwn-db-bd24a.firebaseio.com",
    projectId: "crwn-db-bd24a",
    storageBucket: "crwn-db-bd24a.appspot.com",
    messagingSenderId: "643428400634",
    appId: "1:643428400634:web:58d643cb3450ba5695f843",
    measurementId: "G-5DNF412HXM"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;