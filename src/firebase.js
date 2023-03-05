import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAYHhibkmxbPF1ineEBVeutpdY14K0PIdQ",
  authDomain: "twitter-clone-6e680.firebaseapp.com",
  projectId: "twitter-clone-6e680",
  storageBucket: "twitter-clone-6e680.appspot.com",
  messagingSenderId: "339986243715",
  appId: "1:339986243715:web:3e48f84a8b7bc60bacfbb6",
  measurementId: "G-P367LQ939D"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  export default db;