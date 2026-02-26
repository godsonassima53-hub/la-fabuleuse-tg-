// Script de diagnostic Firebase
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC6D5Xr0x3tKnE8_jwRqnq6sd3yDb3IS7Q",
  authDomain: "la-fabuleuse.firebaseapp.com",
  projectId: "la-fabuleuse",
  messagingSenderId: "394550828848",
  appId: "1:394550828848:web:e3bf818e2e6d96d52832f5"
};

console.log('🔍 Diagnostic Firebase...');
console.log('Configuration:', firebaseConfig);

try {
  // Initialiser Firebase
  const app = initializeApp(firebaseConfig);
  console.log('✅ Firebase initialisé');
  
  // Test Auth
  const auth = getAuth(app);
  console.log('✅ Auth initialisé');
  
  // Test connexion admin
  signInWithEmailAndPassword(auth, 'admin@lafabuleuse.tg', 'Admin123456!')
    .then((userCredential) => {
      console.log('✅ Connexion admin réussie:', userCredential.user.email);
    })
    .catch((error) => {
      console.error('❌ Erreur de connexion:', error.code, error.message);
      
      if (error.code === 'auth/user-not-found') {
        console.log('💡 Solution: Créer l utilisateur admin dans Firebase Console');
      } else if (error.code === 'auth/wrong-password') {
        console.log('💡 Solution: Vérifier le mot de passe de l utilisateur admin');
      } else if (error.code === 'auth/invalid-email') {
        console.log('💡 Solution: Vérifier l email de l utilisateur admin');
      }
    });
  
  // Test Firestore
  const db = getFirestore(app);
  console.log('✅ Firestore initialisé');
  
  // Test lecture collection
  getDocs(collection(db, 'settings'))
    .then((snapshot) => {
      console.log('✅ Firestore accessible, documents trouvés:', snapshot.size);
    })
    .catch((error) => {
      console.error('❌ Erreur Firestore:', error.code, error.message);
      
      if (error.code === 'permission-denied') {
        console.log('💡 Solution: Appliquer les règles de sécurité Firestore');
      } else if (error.code === 'not-found') {
        console.log('💡 Solution: Créer la collection settings dans Firestore');
      }
    });
    
} catch (error) {
  console.error('❌ Erreur critique:', error);
}

console.log('🔍 Fin du diagnostic');
