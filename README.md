# 🍽️ LA FABULEUSE - Bar Restaurant Café

Site web professionnel moderne pour bar-restaurant-café avec système de commande WhatsApp.

## ✨ Fonctionnalités

- 🍽️ Menu dynamique avec catégories (Bar/Restaurant/Café)
- 🛒 Panier intelligent avec gestion des quantités
- 📱 Commande automatique via WhatsApp Business
- 🔐 Espace admin sécurisé pour gérer le menu
- 📱 Design 100% responsive
- 🎨 Interface moderne avec animations fluides

## 🚀 Démarrage Rapide

### Installation
```bash
npm install
```

### Démarrage
```bash
npm run dev
```

### Build
```bash
npm run build
```

## 🔧 Configuration Firebase

1. Créez un projet Firebase
2. Activez Authentication (Email/Mot de passe)
3. Configurez Firestore Database
4. Activez Storage
5. Ajoutez les variables d'environnement

### Variables d'environnement
```env
VITE_FIREBASE_API_KEY=votre_api_key
VITE_FIREBASE_AUTH_DOMAIN=votre_domaine
VITE_FIREBASE_PROJECT_ID=votre_projet_id
VITE_FIREBASE_STORAGE_BUCKET=votre_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=votre_sender_id
VITE_FIREBASE_APP_ID=votre_app_id
```

## 📱 Accès

- **Site** : http://localhost:3000
- **Admin** : http://localhost:3000/admin
- **WhatsApp** : https://wa.me/259192719945977

## 👤 Administration

- **Email** : admin@lafabuleuse.tg
- **Mot de passe** : À configurer dans Firebase

## 🎨 Technologies

- **Frontend** : React 19 + TypeScript
- **Styling** : Tailwind CSS
- **Backend** : Firebase (Auth/Firestore/Storage)
- **Build** : Vite
- **Animations** : Motion/React

## 📄 Structure

```
src/
├── components/     # Composants React
├── context/       # Context API (panier)
├── lib/           # Configuration Firebase
├── pages/         # Pages (Home, Admin, Login)
└── types.ts       # Types TypeScript
```

## 🌐 Déploiement

### Netlify
1. Build le projet : `npm run build`
2. Uploadez le dossier `dist` sur Netlify
3. Configurez les variables d'environnement

### Vercel
1. Connectez votre dépôt GitHub
2. Configurez les variables d'environnement
3. Déployez automatiquement

---

🎉 **Créé avec ❤️ pour LA FABULEUSE**
