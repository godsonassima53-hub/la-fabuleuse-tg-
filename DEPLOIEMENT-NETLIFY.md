# 🚀 DÉPLOIEMENT NETLIFY - LA FABULEUSE

## ✅ Projet poussé sur GitHub !

Votre projet est maintenant sur : https://github.com/godsonassima53-hub/la-fabuleuse-tg-

## 🌐 Déploiement Netlify

### Option 1: Drag & Drop (Le plus simple)
1. **Allez sur** : https://app.netlify.com/drop
2. **Glissez-déposez** le dossier `dist`
3. **Patientez** quelques secondes
4. **Votre site sera en ligne !**

### Option 2: Connect GitHub (Recommandé)
1. **Allez sur** : https://app.netlify.com
2. **Connectez-vous** avec GitHub
3. **"Add new site"** → "Import an existing project"
4. **Sélectionnez** : `la-fabuleuse-tg-`
5. **Configurez** :
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18
6. **"Deploy site"**

## 🔧 Variables d'Environnement Netlify

Dans Netlify → Site settings → Environment variables, ajoutez :

```
VITE_FIREBASE_API_KEY=AIzaSyC6D5Xr0x3tKnE8_jwRqnq6sd3yDb3IS7Q
VITE_FIREBASE_AUTH_DOMAIN=la-fabuleuse.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=la-fabuleuse
VITE_FIREBASE_STORAGE_BUCKET=la-fabuleuse.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=394550828848
VITE_FIREBASE_APP_ID=1:394550828848:web:e3bf818e2e6d96d52832f5
```

## 🎯 URLs Finales

Une fois déployé, votre site sera accessible à :
- **Site public** : https://la-fabuleuse-tg-.netlify.app
- **Admin** : https://la-fabuleuse-tg-.netlify.app/admin
- **WhatsApp** : https://wa.me/259192719945977

## 🔐 Configuration Firebase (une seule fois)

N'oubliez pas de configurer Firebase Console :
1. **Authentication** → Ajouter admin@lafabuleuse.tg
2. **Firestore** → Collection settings → Document general
3. **Storage** → Activer

## 🎉 Mission Accomplie !

Votre site LA FABULEUSE sera :
- ✅ **En ligne et accessible mondialement**
- ✅ **100% fonctionnel**
- ✅ **Professionnel et moderne**
- ✅ **Prêt pour vos clients**

---

**🚀 Votre site est maintenant prêt à être déployé sur Netlify !**
