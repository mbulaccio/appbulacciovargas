import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyATEwMSJamvelYHorS0r4PaodD-UHkYY-k",
  authDomain: "react-bistrea.firebaseapp.com",
  projectId: "react-bistrea",
  storageBucket: "react-bistrea.appspot.com",
  messagingSenderId: "1068419250131",
  appId: "1:1068419250131:web:3b0c9e11e253d6efe12126"
};

//Conecta con firebase
const app = initializeApp(firebaseConfig);

//Conecta con firestore
export const firestoreDb = getFirestore(app)
