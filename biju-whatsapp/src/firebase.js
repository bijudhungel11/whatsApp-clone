import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCa60jmyCzgZ7MMGNKPEAWm0ox7lP5NUT8",
  authDomain: "biju-whats-app-clone.firebaseapp.com",
  databaseURL: "https://biju-whats-app-clone.firebaseio.com",
  projectId: "biju-whats-app-clone",
  storageBucket: "biju-whats-app-clone.appspot.com",
  messagingSenderId: "748189529823",
  appId: "1:748189529823:web:c364165f3f67aeda7e9b6a",
  measurementId: "G-LCF7P8M6P5",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

/* it helps to connect the firebase database and get the data from the database  */
const db = firebaseApp.firestore();

/* for the authentications */
const auth = firebase.auth();
/* for google authnetications  */

const provider = new firebase.auth.GoogleAuthProvider();

/* export explicit and the export implicit */
export default db;
export { auth, provider };
