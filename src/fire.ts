import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDlIWJv94So5-3yjfSeWm2ixTJly8YwcBs",
    authDomain: "admin-584e7.firebaseapp.com",
    databaseURL: "https://admin-584e7.firebaseio.com",
    projectId: "admin-584e7",
    storageBucket: "admin-584e7.appspot.com",
    messagingSenderId: "962866235388",
    appId: "1:962866235388:web:8d74a3d56c4c42ee"

};

var fire = firebase.initializeApp(firebaseConfig);
export default fire;