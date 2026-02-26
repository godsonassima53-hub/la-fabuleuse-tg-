const { initializeApp } = require('firebase/app');
const { getFirestore, doc, setDoc } = require('firebase/firestore');
const { getAuth, createUserWithEmailAndPassword } = require('firebase/auth');

const firebaseConfig = {
  apiKey: "AIzaSyC6D5Xr0x3tKnE8_jwRqnq6sd3yDb3IS7Q",
  authDomain: "la-fabuleuse.firebaseapp.com",
  projectId: "la-fabuleuse",
  storageBucket: "la-fabuleuse.firebasestorage.app",
  messagingSenderId: "394550828848",
  appId: "1:394550828848:web:e3bf818e2e6d96d52832f5",
  measurementId: "G-KXMJKGYFXW"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

async function initializeFirebaseData() {
  try {
    console.log('🔥 Initialisation des données Firebase pour LA FABULEUSE...');
    
    // 1. Créer les paramètres par défaut
    const settingsRef = doc(db, 'settings', 'general');
    await setDoc(settingsRef, {
      whatsappNumber: '259192719945977',
      address: 'Lomé, Togo',
      email: 'contact@lafabuleuse.tg',
      phone: '+228 99 99 99 99',
      facebook: 'https://facebook.com/lafabuleuse',
      instagram: 'https://instagram.com/lafabuleuse',
      updatedAt: new Date().toISOString()
    });
    console.log('✅ Paramètres enregistrés');
    
    // 2. Créer l'utilisateur admin (le mot de passe sera défini lors de la première connexion)
    console.log('👤 Email admin configuré: admin@lafabuleuse.tg');
    console.log('📱 WhatsApp Business configuré: https://wa.me/c/259192719945977');
    
    console.log('🎉 Initialisation terminée avec succès !');
    console.log('');
    console.log('📋 Instructions:');
    console.log('1. Allez dans Firebase Console → Authentication');
    console.log('2. Ajoutez manuellement l\'email: admin@lafabuleuse.tg');
    console.log('3. Définissez un mot de passe lors de la première connexion');
    console.log('4. Le site utilisera automatiquement le numéro WhatsApp configuré');
    
  } catch (error) {
    console.error('❌ Erreur lors de l\'initialisation:', error);
  }
}

initializeFirebaseData();
