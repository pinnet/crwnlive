/*
 * firebase.utils.js
 * Created on Fri Dec 08 2023
 *
 * Copyright (c) 2023 dannyarnold.com
 * Author: Danny Arnold
 */

/*eslint no-unused-vars: */

import { getFirestore, collection, doc, getDoc, setDoc } from 'firebase/firestore';
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
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

/**
 * Firebase database instance.
 * @type {Firestore}
 */
export const db = getFirestore();
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
export const signInWithEmailAndPasswordAuth = (email, password) => {
    if (!email || !password) throw new Error('Email or Password is null');
    return signInWithEmailAndPassword(auth, email, password);
}
/**
 * Creates a new user with the provided email and password.
 * @param {string} email - The user's email.
 * @param {string} password - The user's password.
 * @returns {Promise} - A promise that resolves with the created user.
 * @throws {Error} - If email or password is null.
 */
export const createAuthUserFromEmailAndPassword = async (email, password) => {
    if (!email || !password) throw new Error('Email or Password is null');
    return await createUserWithEmailAndPassword(auth, email, password);
}
/**
 * Creates a user document in Firestore from Google authentication data.
 * @param {Object} userAuth - The user authentication data.
 * @param {Object} extraInfo - Additional information to be included in the user document.
 * @returns {Promise<DocumentReference>} - The reference to the created user document.
 * @throws {Error} - If userAuth is null or if there is an error creating the user document.
 */
export const createUserDocumentFromGoogleAuth = async (userAuth, extraInfo) => {
    if (!userAuth) throw new Error('UserAuth is null');
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapShot = await getDoc(userDocRef);
    if (!userSnapShot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...extraInfo
            });
        } catch (error) {
            throw new Error('Error creating user', error.message);
        }
    }
    return userDocRef;
}

/**
 * Signs the user out.
 * @returns {Promise<void>} A promise that resolves when the user is signed out.
 */
 export const signUserOut = async () => await signOut(auth);

/**
 * Registers an authentication state change listener.
 * @param {function} callback - The callback function to be called when the authentication state changes.
 * @throws {Error} If the callback is null.
 * @returns {function} The unsubscribe function to stop listening for authentication state changes.
 */
export const onAuthStateChangedListener = (callback) => {
    if (!callback) throw new Error('Callback is null');
    return onAuthStateChanged(auth, callback);
};