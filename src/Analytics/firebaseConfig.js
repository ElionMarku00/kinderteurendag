
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCgkDX-IywnE0rcPxHqx8RGUsMFyzEKjTI",
    authDomain: "kinderterugkomdag.firebaseapp.com",
    projectId: "kinderterugkomdag",
    storageBucket: "kinderterugkomdag.appspot.com",
    messagingSenderId: "768748677166",
    appId: "1:768748677166:web:fc360a1a879d73f7e8d7bf",
    measurementId: "G-JJH1Y4N8H1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


    export { analytics, logEvent };