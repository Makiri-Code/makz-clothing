import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { 
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBtmmfj3Tj6iGFbRuuyNF4qwBsFW0J781Q",
    authDomain: "makz-clothing-db.firebaseapp.com",
    projectId: "makz-clothing-db",
    storageBucket: "makz-clothing-db.appspot.com",
    messagingSenderId: "948909294074",
    appId: "1:948909294074:web:c6de93650adc5906dbe443"
};
  
  // Initialize Firebase
const firbaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'user', userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);

  console.log(userSnapshot)

  if(!userSnapshot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    } catch (error){
      console.log('error creating user', error.message)
    }
  } 
  return userDocRef
}