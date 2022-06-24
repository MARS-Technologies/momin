import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCoDsk9j_vrIaUU-ft6hSvDPe9SBDTSLcA",
  authDomain: "momin-315d2.firebaseapp.com",
  projectId: "momin-315d2",
  storageBucket: "momin-315d2.appspot.com",
  messagingSenderId: "49009041629",
  appId: "1:49009041629:web:53b13a2adf5d69737e7b34"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }