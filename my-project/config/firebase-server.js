import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDISJTEzAB9ktdEY7h_FwLcEhPFepiA-2Y",
  authDomain: "movieai-35c0c.firebaseapp.com",
  projectId: "movieai-35c0c",
  storageBucket: "movieai-35c0c.appspot.com",
  messagingSenderId: "234799305254",
  appId: "1:234799305254:web:7e56cc7e38306e7f9f0ce7",
  measurementId: "G-7EHTE5WJDS",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Get the authentication instance

export default auth;

// export default { firebase, auth };
