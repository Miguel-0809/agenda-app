import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBQvJBg9Y4hivm_MVDrTJgEpAGUaMk_qCk",
    authDomain: "agenda-app-98fe6.firebaseapp.com",
    projectId: "agenda-app-98fe6",
    storageBucket: "agenda-app-98fe6.appspot.com",
    messagingSenderId: "687215631803",
    appId: "1:687215631803:web:81d3807407d1a5dd90389e"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);

  export const db= fb.firestore();
  export const auth=fb.auth();