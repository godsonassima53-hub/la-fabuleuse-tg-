import { initializeApp, getApp, getApps, FirebaseApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDC7vpefbMKCn9Jd3iGYlmo3ovfPISLn8s",
  authDomain: "la-fabuleuse-b2c45.firebaseapp.com",
  projectId: "la-fabuleuse-b2c45",
  storageBucket: "la-fabuleuse-b2c45.firebasestorage.app",
  messagingSenderId: "1070555352916",
  appId: "1:1070555352916:web:d16818f208b040fc8182c1",
  measurementId: "G-V1P0E061ER"
};

function getFirebaseApp(): FirebaseApp {
  if (getApps().length > 0) return getApp();
  return initializeApp(firebaseConfig);
}

const app = getFirebaseApp();

export const auth: Auth = getAuth(app);
export const db: Firestore = getFirestore(app);

// Configuration par défaut pour LA FABULEUSE
export const DEFAULT_CONFIG = {
  adminEmail: "admin@lafabuleuse.tg",
  whatsappNumber: "259192719945977"
};


