import firebase from "firebase/compat/app";
const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // ...
};
const fire = firebase.initializeApp(config);


export default fire