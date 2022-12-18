import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDQ9EvhP7IOdW6QoiqSj0jpnfPiY2Ysoiw",
    authDomain: "tpgrupo9react.netlify.app",
    projectId: "tpgrupo9",
    storageBucket: "tpgrupo9.appspot.com",
    messagingSenderId: "1082044343072",
    appId: "1:1082044343072:web:b8abb401bb7e3368c1ad45"
  };

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export { firebase };