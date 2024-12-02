import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import 'firebase/compat/auth'


const config = {

    apiKey: "AIzaSyBqeB7NjYIWFPlcdIKVerAOWQdlGNK2KfU",

    authDomain: "crwn-db-18e05.firebaseapp.com",

    projectId: "crwn-db-18e05",

    storageBucket: "crwn-db-18e05.firebasestorage.app",

    messagingSenderId: "732089680780",

    appId: "1:732089680780:web:e79499b2078e646f4a0ca9",

    measurementId: "G-T0SD1ED5VS"

  };

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters({prompt:'select_account'})

export const signInWithGoogle = ()=> auth.signInWithPopup(provider)

export default firebase