importScripts("https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging.js");


const firebaseConfig = {
    apiKey: "AIzaSyAsAJY6FLiEHeU3QnHB5MfXFk4ITkvV4yE",
    authDomain: "ogate-5bac1.firebaseapp.com",
    projectId: "ogate-5bac1",
    storageBucket: "ogate-5bac1.appspot.com",
    messagingSenderId: "1004275406470",
    appId: "1:1004275406470:web:eec9bfffe448d173eaa307",
    measurementId: "G-NQRPRGL6DC"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((message) => {
  console.log('Background message:', message);
  // Handle your background message here
});