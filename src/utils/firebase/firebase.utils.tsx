/**
 * @file firebase.utils.js
 * @description Utility functions for interacting with Firebase.
 * @created Fri Dec 08 2023
 * @copyright Copyright (c) 2023 dannyarnold.com
 * @license MIT License
 * @author Danny Arnold
**/

import { getFirestore, doc, query, getDoc, setDoc, collection, writeBatch, getDocs } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    signInWithRedirect,
    signInWithPopup,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged   
} from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBrxMC-_B-jhrDeSSWMX4HChSRkT8DbStA",
    authDomain: "crwndb-bdda6.firebaseapp.com",
    projectId: "crwndb-bdda6",
    storageBucket: "crwndb-bdda6.appspot.com",
    messagingSenderId: "963003893980",
    appId: "1:963003893980:web:697e99d1d7e7e7325d8c19"
};
initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

//------------------------------------------------------------------------------ Exports

 type additionalData = {
    displayName: string,
    email: string,
    createdAt: Date
 }

 type DocumentReference = {
    id: string,
    path: string,
    parent: any,
    firestore: any
 }
/**
 * Firebase database instance.
 * @type {Firestore}
 */
export const db = getFirestore();
/**
 * Gets the document reference for the specified collection and document id.
 * @param {string} collectionKey - The key of the collection.
 * @param {string} docId - The id of the document.
 * @returns {DocumentReference} - The document reference.
 */
export const getDocumentRef = (collectionKey: string , docId : string) => doc(db, collectionKey, docId);
/**
 * Gets the document snapshot for the specified collection and document id.
 * @param {string} collectionKey - The key of the collection.
 * @param {string} docId - The id of the document.
 * @returns {Promise<DocumentSnapshot>} - The document snapshot.
 */
export const getDocumentSnapshot = async (collectionKey: string, docId : string) => {
    const docRef = getDocumentRef(collectionKey, docId);
    return await getDoc(docRef);
}

/**
 * Adds a collection of documents to Firestore database.
 * 
 * @param {string} collectionKey - The key of the collection to add documents to.
 * @param {Array<Object>} objectsToAdd - An array of objects to add as documents.
 * @returns {Promise<void>} - A promise that resolves when the documents are successfully added.
 */
export const addCollectionAndDocuments = async (collectionKey: string, objectsToAdd: Array<any>) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);
    objectsToAdd.forEach(obj => {
        const newDocRef = doc(collectionRef, obj.title.toLowerCase());
        batch.set(newDocRef, obj);
    });
    return await batch.commit();
}

/**
 * Retrieves categories and documents from Firestore.
 * @returns {Promise<Object>} A promise that resolves to an object containing categories and their associated documents.
 */
export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(docSnapshot => docSnapshot.data());
}
    
export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(auth, userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject);
    });
}

/**
 * The authentication object for Firebase.
 * @type {Object}
 */
export const auth = getAuth();
/**
 * Sign in with Google using a pop-up window.
 * @returns {Promise<void>} A promise that resolves when the sign-in process is complete.
 */
export const signInWithGooglePopUp = () => { 
    return signInWithPopup(auth, provider); 
    }
/**
 * Sign in with Google using redirect.
 * @returns {Promise<void>} A promise that resolves when the sign-in process is complete.
 */
export const signInWithGoogleRedirect = () => {
     return signInWithRedirect(auth, provider); 
    }
/**
 * Sign in with email and password.
 * @param {string} email - The user's email.
 * @param {string} password - The user's password.
 * @returns {Promise} - A promise that resolves with the user's authentication information.
 * @throws {Error} - If email or password is null.
 */
export const signInWithEmailAndPasswordAuth = (email: string , password: string ) => {
    //throw new Error('Error signing in');
    if ( !email || !password ) throw new Error('Email or Password is null');
    return signInWithEmailAndPassword(auth, email, password);
}
/**
 * Creates a new user with the provided email and password.
 * @param {string} email - The user's email.
 * @param {string} password - The user's password.
 * @returns {Promise} - A promise that resolves with the created user.
 * @throws {Error} - If email or password is null.
 */
export const createAuthUserFromEmailAndPassword = async (email: string, password: string) => {
    if (!email || !password) throw new Error('Email or Password is null');
    return await createUserWithEmailAndPassword(auth, email, password);
}
/**
 * Creates a user document in Firestore from Google authentication data.
 * @param {Object} userAuth - The user authentication data.
 * @param {Object} additionalData - Additional information to be included in the user document.
 * @returns {Promise<DocumentReference>} - The reference to the created user document.
 * @throws {Error} - If userAuth is null or if there is an error creating the user document.
 */
export const createUserDocumentFromAuth = async (userAuth : any, additionalData = {}) => {
    if (!userAuth) throw new Error('UserAuth is null');
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error: any) {
            throw new Error('Error creating user', error.message);
        }
    }
    return userSnapshot;
};
/**
 * Signs the user out.
 * @returns {Promise<void>} A promise that resolves when the user is signed out.
 */
 export const signUserOut = async () => {
    //throw new Error('Error signing out');
    await signOut(auth);
}
/**
 * Registers an authentication state change listener.
 * @param {function} callback - The callback function to be called when the authentication state changes.
 * @throws {Error} If the callback is null.
 * @returns {function} The unsubscribe function to stop listening for authentication state changes.
 */
export const onAuthStateChangedListener = (callback: () => void) => {
    if (!callback) throw new Error('Callback is null');
    return onAuthStateChanged(auth, callback);
};