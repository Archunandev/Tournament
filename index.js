// Import the Firebase module
import firebase from 'firebase/app';
import 'firebase/auth';

// Initialize Firebase with your project's configuration
const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "AUTH_DOMAIN",
  databaseURL: "DATABASE_URL",
  projectId: "PROJECT_ID",
  storageBucket: "STORAGE_BUCKET",
  messagingSenderId: "MESSAGING_SENDER_ID",
  appId: "APP_ID"
};
firebase.initializeApp(firebaseConfig);

// Get the `auth` object
const auth = firebase.auth();

// Sign in with email and password
async function signIn(email, password) {
  try {
    await auth.signInWithEmailAndPassword(email, password);
    console.log("User signed in");
  } catch (error) {
    console.error(error);
  }
}

// Sign up with email and password
async function signUp(email, password) {
  try {
    await auth.createUserWithEmailAndPassword(email, password);
    console.log("User created");
  } catch (error) {
    console.error(error);
  }
}
