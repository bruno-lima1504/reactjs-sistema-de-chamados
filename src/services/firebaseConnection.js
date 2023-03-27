// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore';
import  { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyBc4oBgA-EDOt8jH8tvZo-EmXzok7DPj9A",
  authDomain: "sistema-de-chamados-8ff7f.firebaseapp.com",
  projectId: "sistema-de-chamados-8ff7f",
  storageBucket: "sistema-de-chamados-8ff7f.appspot.com",
  messagingSenderId: "379797180378",
  appId: "1:379797180378:web:5f48309af59ed9e2133ae3",
  measurementId: "G-8YY7VLS56V"
};


const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const storage = getStorage(firebaseApp);

export { db, auth, storage };


