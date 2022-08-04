import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, facebookAuthProvider, createUserWithEmailAndPassword} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCu7ovtlbrKMPbGkBKViNyojsuOmGDfYhY",
  authDomain: "crwm-clothing-db-75218.firebaseapp.com",
  projectId: "crwm-clothing-db-75218",
  storageBucket: "crwm-clothing-db-75218.appspot.com",
  messagingSenderId: "612580638912",
  appId: "1:612580638912:web:19f5cbfa3dc07c7976ed25"
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
// const facebookProvider = new facebookAuthProvider();

googleProvider.setCustomParameters({
    prompt:'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup =() => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect =() => signInWithRedirect(auth, googleProvider);

// export const signInWithFacebookPopup =() => signInWithPopup(auth, facebookProvider);
// export const signInWithFacebookRedirect =() => signInWithRedirec(auth, facebookProvider);



export const db = getFirestore(); // db= database

export const createUserDocumentFromAuth = async (
  userAuth, aditionalInformation = {}) => {
  if (!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log (userSnapshot.exists());


    //if user data does not exists
  if (!userSnapshot.exists()) {
    const {displayName, email} = userAuth;
    const createAt = new Date();

    try {
      await setDoc (userDocRef, {
        displayName,
        email,
        createAt,
        ...aditionalInformation,
      });
    } catch (error) {
      console.log ('error creating the user', error.message);
    }

  }

  //if user data existis
  return userDocRef;
  //return userDocRef
};


export const createAuthUserWithEmailAndPassword = async (email, password)=> {

  if (! email || !password)return;

  return await createUserWithEmailAndPassword(auth, email, password);
}