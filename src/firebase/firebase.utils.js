import firebase from 'firebase/app' 
require('firebase/auth')
require("firebase/firestore");




const config={
    apiKey: "AIzaSyDRocYdxeQvCHy9RHl8o1JA1ILDFKXabaQ",
    authDomain: "ecommerce-react-db-b5018.firebaseapp.com",
    databaseURL: "https://ecommerce-react-db-b5018.firebaseio.com",
    projectId: "ecommerce-react-db-b5018",
    storageBucket: "ecommerce-react-db-b5018.appspot.com",
    messagingSenderId: "186841910900",
    appId: "1:186841910900:web:181745f3b295faa7704b21"
  };


  firebase.initializeApp(config)

  //google auth
  export const auth=firebase.auth()
  export const firestore=firebase.firestore()

  const provider=new firebase.auth.GoogleAuthProvider()

  provider.setCustomParameters({prompt:'select_account'})

  export const signInWithGoogle=()=> auth.signInWithPopup(provider)

