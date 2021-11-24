import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCnckQzI7WA-y1L_X3sOnmVlOHDfn-uu-U",
    authDomain: "bus-bewertung-9adce.firebaseapp.com",
    projectId: "bus-bewertung-9adce",
    storageBucket: "bus-bewertung-9adce.appspot.com",
    messagingSenderId: "1032282880042",
    appId: "1:1032282880042:web:f5859167beec8412702b53",
    measurementId: "G-QRQ1KYP8VG"
}

firebase.initializeApp(firebaseConfig)

export default firebase;