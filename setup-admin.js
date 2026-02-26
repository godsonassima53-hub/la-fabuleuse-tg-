// Script d'installation automatique pour LA FABULEUSE
// Exécutez ce script avec: node setup-admin.js

const fs = require('fs');
const path = require('path');

console.log('🎯 Configuration automatique LA FABULEUSE');
console.log('=====================================');

// 1. Créer le fichier .env.local avec les clés Firebase
const envContent = `# Configuration Firebase pour LA FABULEUSE
VITE_FIREBASE_API_KEY=AIzaSyC6D5Xr0x3tKnE8_jwRqnq6sd3yDb3IS7Q
VITE_FIREBASE_AUTH_DOMAIN=la-fabuleuse.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=la-fabuleuse
VITE_FIREBASE_STORAGE_BUCKET=la-fabuleuse.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=394550828848
VITE_FIREBASE_APP_ID=1:394550828848:web:e3bf818e2e6d96d52832f5
`;

try {
  fs.writeFileSync('.env.local', envContent);
  console.log('✅ Fichier .env.local créé');
} catch (error) {
  console.log('⚠️  .env.local existe déjà');
}

// 2. Instructions pour Firebase Console
console.log('\n📋 Étapes manuelles requises :');
console.log('1. Allez sur https://console.firebase.google.com');
console.log('2. Connectez-vous et sélectionnez le projet "la-fabuleuse"');
console.log('3. Dans Authentication → Ajoutez l\'utilisateur: admin@lafabuleuse.tg');
console.log('4. Dans Firestore → Créez la collection "settings" avec le document "general"');
console.log('5. Ajoutez les champs: whatsappNumber: "259192719945977"');

// 3. Vérifier les dépendances
console.log('\n🔧 Vérification des dépendances...');
try {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  const requiredDeps = ['react', 'firebase', 'lucide-react', 'motion', 'react-hot-toast'];
  
  requiredDeps.forEach(dep => {
    if (packageJson.dependencies[dep]) {
      console.log(`✅ ${dep} installé`);
    } else {
      console.log(`❌ ${dep} manquant`);
    }
  });
} catch (error) {
  console.log('❌ Erreur lecture package.json');
}

console.log('\n🚀 Pour démarrer le projet:');
console.log('npm install');
console.log('npm run dev');
console.log('\n📱 Accès admin: http://localhost:3000/admin');
console.log('🔑 Email: admin@lafabuleuse.tg');
console.log('📞 WhatsApp: https://wa.me/c/259192719945977');

console.log('\n🎉 Configuration terminée !');
