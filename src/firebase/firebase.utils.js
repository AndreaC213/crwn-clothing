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

// take the object from auth library and store into firestore
// calling API request by using async
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShop = await userRef.get();
    
    // Using Doc. snapShot to get the users exist
    // get the displayName, email from userAuth
    // store them into firestore
    if (!snapShop.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        // doing async request for firebase
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }
        catch(error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
};

// function we can use to make new collections and documents we want
// by passing the collectionKey into firebase, 
// it will give us back a ref object
// import to where we have access to the SHOP_DATA
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        };
    });
    
    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;