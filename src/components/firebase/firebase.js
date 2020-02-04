import firebase from 'firebase/app'
import 'firebase/firestore'


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDsxPUy-0nr7NuS5J0w6b-XcF7a-y4mcQU",
    authDomain: "react-webpage-b6ce7.firebaseapp.com",
    databaseURL: "https://react-webpage-b6ce7.firebaseio.com",
    projectId: "react-webpage-b6ce7",
    storageBucket: "react-webpage-b6ce7.appspot.com",
    messagingSenderId: "1023465168963",
    appId: "1:1023465168963:web:7046cff1328b51354374f6",
    measurementId: "G-BMB94DY7CC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();

export default firebase