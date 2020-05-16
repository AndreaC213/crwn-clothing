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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;