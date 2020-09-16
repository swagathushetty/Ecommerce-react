import firebase from 'firebase/app'
require('firebase/auth')
require("firebase/firestore");




const config = {
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
export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)


  const snapShot = await userRef.get()

  //if user doesnt exist in DB then add to DB
  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef

  // console.log(firestore.doc('users/12312asdas'))
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey)
  const batch = firestore.batch() //group req together
  console.log(collectionRef)
  console.log(objectsToAdd)
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, obj)
  })

  await batch.commit()
}

export const convertCollectionSnapShotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data()


    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })

  return transformedCollection.reduce((accumulator, collection) => {
    //eg- hats = hats collection
    accumulator[collection.title.toLowerCase()] = collection
    return accumulator
  }, {})

}