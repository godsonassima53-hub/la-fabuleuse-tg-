import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, collection, addDoc } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

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

async function configureFirebase() {
  try {
    console.log('🔥 Configuration automatique Firebase LA FABULEUSE...');
    console.log('📱 WhatsApp: 259192719945977');
    console.log('👤 Admin: admin@lafabuleuse.tg');
    
    // 1. Créer les paramètres par défaut
    console.log('📋 Création des paramètres...');
    await setDoc(doc(db, 'settings', 'general'), {
      whatsappNumber: '259192719945977',
      address: 'Lomé, Togo',
      email: 'contact@lafabuleuse.tg',
      phone: '+228 99 99 99 99',
      facebook: 'https://facebook.com/lafabuleuse',
      instagram: 'https://instagram.com/lafabuleuse',
      updatedAt: new Date().toISOString()
    });
    console.log('✅ Paramètres créés avec succès !');
    
    // 2. Créer l'utilisateur admin
    console.log('👤 Création utilisateur admin...');
    try {
      await createUserWithEmailAndPassword(auth, 'admin@lafabuleuse.tg', 'Admin123456!');
      console.log('✅ Utilisateur admin créé: admin@lafabuleuse.tg / Admin123456!');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        console.log('✅ Utilisateur admin existe déjà');
      } else {
        console.log('⚠️ Erreur création utilisateur:', error.message);
      }
    }
    
    // 3. Ajouter des exemples de menu
    console.log('🍽️ Création menu exemples...');
    const menuItems = [
      {
        name: "Burger Royal",
        description: "Boucherie premium avec fromage fondant et sauce maison",
        price: 8500,
        category: "restaurant",
        image: "https://images.unsplash.com/photo-1568901346375-23c9150f3319?auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "Cocktail Tropical",
        description: "Mélange exotique de fruits tropicaux avec rhum blanc",
        price: 3500,
        category: "bar",
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "Café Expresso",
        description: "Café artisanal torréfié localement",
        price: 1500,
        category: "café",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "Salade César",
        description: "Laitue fraîche, poulet grillé, parmesan et sauce césar",
        price: 4500,
        category: "restaurant",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "Mojito Classique",
        description: "Menthe fraîche, citron vert, sucre de canne et rhum blanc",
        price: 3000,
        category: "bar",
        image: "https://images.unsplash.com/photo-1546171757-215cb96c0c32?auto=format&fit=crop&w=500&q=80"
      },
      {
        name: "Cappuccino",
        description: "Espresso italien avec lait mousseux et cacao",
        price: 2000,
        category: "café",
        image: "https://images.unsplash.com/photo-1572442388298-5ccb5f5ff3e2?auto=format&fit=crop&w=500&q=80"
      }
    ];
    
    for (const item of menuItems) {
      await addDoc(collection(db, 'menu'), item);
    }
    console.log('✅ Menu exemples créé avec succès !');
    
    console.log('\n🎉 CONFIGURATION TERMINÉE AVEC SUCCÈS !');
    console.log('=====================================');
    console.log('📱 WhatsApp Business: https://wa.me/c/259192719945977');
    console.log('🔑 Admin: admin@lafabuleuse.tg / Admin123456!');
    console.log('🌐 Site: http://localhost:3000');
    console.log('🔐 Admin: http://localhost:3000/admin');
    console.log('\n✅ Votre site LA FABULEUSE est maintenant 100% configuré !');
    
  } catch (error) {
    console.error('❌ Erreur de configuration:', error);
    console.log('\n📋 Solution manuelle:');
    console.log('1. Allez dans Firebase Console → Firestore Database');
    console.log('2. Collection: settings → Document: general');
    console.log('3. Ajoutez les champs manuellement');
    console.log('4. Dans Authentication → Ajoutez admin@lafabuleuse.tg');
  }
}

configureFirebase();
