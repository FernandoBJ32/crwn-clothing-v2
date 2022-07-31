import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
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

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt:'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup =() => signInWithPopup(auth, provider);

export const db = getFirestore(); // db= database

export const createUserDocumentFromAuth = async (userAuth) => {
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
        createAt
      });
    } catch (error) {
      console.log ('error creating the user', error.message);
    }

  }

  //if user data existis
  return userDocRef;
  //return userDocRef
};