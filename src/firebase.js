import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDFECsTXmX2PeUfuXOuE9D0lkpErrZqSHc",
    authDomain: "firechat-e816e.firebaseapp.com",
    projectId: "firechat-e816e",
    storageBucket: "firechat-e816e.appspot.com",
    messagingSenderId: "811357485484",
    appId: "1:811357485484:web:eea5cf29ae66f23e4a2209",
    measurementId: "G-FLPV9VX4LJ"
})

const db = firebaseApp.firestone()

const auth = firebase.auth()

export { db, auth }