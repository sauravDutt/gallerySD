
import * as firebase from'firebase/app';
import 'firebase/storage';
import 'firebase/firestore'

// Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBhxMhwMzCK1eRt94s9bmW9Xb6A5VwqPi4",
    authDomain: "sauravdutt-picturebook.firebaseapp.com",
    databaseURL: "https://sauravdutt-picturebook.firebaseio.com",
    projectId: "sauravdutt-picturebook",
    storageBucket: "sauravdutt-picturebook.appspot.com",
    messagingSenderId: "683868468261",
    appId: "1:683868468261:web:1a76bede49a104b3da7bcc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timeStamp};