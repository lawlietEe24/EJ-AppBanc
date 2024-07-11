import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDr1Y9DfVuKeN2pCfhZraNq7mFiBJGeO0Y",
  authDomain: "banco-b34d1.firebaseapp.com",
  databaseURL: "https://banco-b34d1-default-rtdb.firebaseio.com",
  projectId: "banco-b34d1",
  storageBucket: "banco-b34d1.appspot.com",
  messagingSenderId: "152146915783",
  appId: "1:152146915783:web:f7e482fa49ac4ab985e9e2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app); // Obtén la instancia de Firestore

export { firebaseConfig, app, auth, firestore };
