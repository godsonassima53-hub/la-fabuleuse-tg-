import { initializeApp, getApp, getApps, FirebaseApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";
import { getStorage, FirebaseStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC6D5Xr0x3tKnE8_jwRqnq6sd3yDb3IS7Q",
  authDomain: "la-fabuleuse.firebaseapp.com",
  projectId: "la-fabuleuse",
  storageBucket: "la-fabuleuse.firebasestorage.app",
  messagingSenderId: "394550828848",
  appId: "1:394550828848:web:e3bf818e2e6d96d52832f5",
  measurementId: "G-KXMJKGYFXW"
};

function getFirebaseApp(): FirebaseApp {
  if (getApps().length > 0) return getApp();
  return initializeApp(firebaseConfig);
}

const app = getFirebaseApp();

export const auth: Auth = getAuth(app);
export const db: Firestore = getFirestore(app);
export const storage: FirebaseStorage = getStorage(app);

// Configuration par défaut pour LA FABULEUSE
export const DEFAULT_CONFIG = {
  adminEmail: "admin@lafabuleuse.tg",
  whatsappNumber: "259192719945977"
};


