/*eslint no-undef: */
/*eslint no-unused-vars: */
import { getFirestore, collection, doc, getDoc, setDoc } from 'firebase/firestore';
import { initializeApp } from "firebase/app";

// ---------------------------------- Google Authentication ----------------------------------
import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    signInWithRedirect,
    signInWithPopup,
    signOut,
    onAuthStateChanged
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
// ---------------------------------- Google Authentication ----------------------------------


export const db = getFirestore();
export const auth = getAuth();
export const signInWithGooglePopUp = () => { return signInWithPopup(auth, provider); }
export const signInWithGoogleRedirect = () => { return signInWithRedirect(auth, provider); }
export const createAuthUserFromEmailAndPassword = async (email, password) => {
    if (!email || !password) throw new Error('Email or Password is null');
    return await createUserWithEmailAndPassword(auth, email, password);

}
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
