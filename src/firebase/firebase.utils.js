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
//firebase.database().goOnline();
firebase.firestore().settings({ experimentalAutoDetectLongPolling: true });

export const auth = firebase.auth()
export const firestore = firebase.firestore()

export const  createUserProfileDocument = async (userAuth , additionalData)=>{

    if(!userAuth) 
        return
   
    
   const response =await fetch(`https://crwn-db-18e05-default-rtdb.firebaseio.com/users/${userAuth.uid}.json`)
   const data = await response.json()

   if(!data){
      const {email , displayName} = userAuth
      const createdAt = new Date()
      const touple = {displayName,
        email,
        createdAt
      }
      await fetch(`https://crwn-db-18e05-default-rtdb.firebaseio.com/users/${userAuth.uid}.json`,{
        method : 'POST',
        headers : {
          "Content-type" : "application/json"
        },
        body : JSON.stringify(touple)
      })
      const a = await fetch(`https://crwn-db-18e05-default-rtdb.firebaseio.com/users/${userAuth.uid}.json`)
      const b = await a.json()
      
      return b
   }
   else {
    
      return data
    /*  console.log(b[Object.keys(b)[0]]);*/
      
   }
    
   
   

    
         
    
}




const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters({prompt:'select_account'})

export const signInWithGoogle = ()=> auth.signInWithPopup(provider)

export default firebase



 
    
   // console.log(firestore.doc('users/128fdashadu'));
    
   // firestore
    
