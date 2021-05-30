import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCg_MYhCqpaM7rmP643UMQnPmjzeuk8tOY",
    authDomain: "taxi-express-b9a63.firebaseapp.com",
    databaseURL: "https://project-id.firebaseio.com",
    storageBucket: "taxi-express-b9a63.appspot.com",
    messagingSenderId: "131947937100",
    appId: "1:131947937100:web:1723e4e39d8deaf11ae3e9",
    measurementId: "G-LQRGNPE9Y2"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();