// import firebase from 'firebase/app';
// import 'firebase/messaging';

import { getMessaging } from "@firebase/messaging";
import { initializeApp } from "firebase-admin";

// const firebaseConfig = {
//   apiKey: "AIzaSyAsAJY6FLiEHeU3QnHB5MfXFk4ITkvV4yE",
//   authDomain: "ogate-5bac1.firebaseapp.com",
//   projectId: "ogate-5bac1",
//   storageBucket: "ogate-5bac1.appspot.com",
//   messagingSenderId: "1004275406470",
//   appId: "1:1004275406470:web:eec9bfffe448d173eaa307",
//   measurementId: "G-NQRPRGL6DC"
// };

// firebase.initializeApp(firebaseConfig);


// export const messaging = firebase.messaging();

// firebaseConfig.js

const firebaseConfig = {
    apiKey: "AIzaSyAsAJY6FLiEHeU3QnHB5MfXFk4ITkvV4yE",
    authDomain: "ogate-5bac1.firebaseapp.com",
    projectId: "ogate-5bac1",
    storageBucket: "ogate-5bac1.appspot.com",
    messagingSenderId: "1004275406470",
    appId: "1:1004275406470:web:eec9bfffe448d173eaa307",
    measurementId: "G-NQRPRGL6DC"
};

const app = initializeApp(firebaseConfig)
export const messaging = getMessaging(app)
