import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBrWWVFSvTnK2goyC477Dz-SQhuT-2Gk8I",
  authDomain: "auth-cc203.firebaseapp.com",
  databaseURL: "https://auth-cc203.firebaseio.com",
  projectId: "auth-cc203",
  storageBucket: "auth-cc203.appspot.com",
  messagingSenderId: "983053435531",
  appId: "1:983053435531:web:045b993aa2ef6e599f4a8e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.firestore();
export default firebase;