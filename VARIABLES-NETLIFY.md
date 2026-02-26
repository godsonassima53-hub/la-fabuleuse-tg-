# 🔧 VARIABLES D'ENVIRONNEMENT NETLIFY - MISE À JOUR

## ✅ NOUVELLES VARIABLES FIREBASE

Copiez-collez ces variables dans Netlify → Site settings → Environment variables :

```
VITE_FIREBASE_API_KEY=AIzaSyDC7vpefbMKCn9Jd3iGYlmo3ovfPISLn8s
VITE_FIREBASE_AUTH_DOMAIN=la-fabuleuse-b2c45.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=la-fabuleuse-b2c45
VITE_FIREBASE_STORAGE_BUCKET=la-fabuleuse-b2c45.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=1070555352916
VITE_FIREBASE_APP_ID=1:1070555352916:web:d16818f208b040fc8182c1
VITE_FIREBASE_MEASUREMENT_ID=G-V1P0E061ER
```

## 🔧 ÉTAPES NETLIFY

### 1. Mettre à jour les variables
1. **Allez sur** : https://app.netlify.com
2. **Votre site** → Site settings → Environment variables
3. **Supprimez** les anciennes variables
4. **Ajoutez** les nouvelles variables ci-dessus
5. **Cliquez sur** "Save"

### 2. Redéployer
1. **Déclenchez** un nouveau déploiement
2. **Attendez** la fin du déploiement
3. **Testez** la connexion

## 🔐 CONFIGURATION FIREBASE CONSOLE

### 1. Utilisateur admin
1. **Allez sur** : https://console.firebase.google.com/
2. **Sélectionnez** le projet `la-fabuleuse-b2c45`
3. **Authentication** → Users
4. **Créez** l'utilisateur :
   - **Email** : `admin@lafabuleuse.tg`
   - **Mot de passe** : `Admin123456!`

### 2. Domaines autorisés
1. **Authentication** → Settings
2. **Ajoutez** `la-fabuleuse.netlify.app` dans les domaines autorisés

### 3. Firestore
1. **Firestore Database** → Data
2. **Créez** la collection `settings`
3. **Créez** le document `general`
4. **Ajoutez** :
   ```
   whatsappNumber: "259192719945977"
   address: "Lomé, Togo"
   facebookUrl: ""
   instagramUrl: ""
   ```

## 🎯 TEST FINAL

1. **Testez** sur `test-connection.html` (devrait fonctionner)
2. **Testez** sur https://la-fabuleuse.netlify.app/login
3. **Devriez pouvoir** vous connecter !

---

**🚀 Une fois ces étapes faites, votre connexion fonctionnera parfaitement !**
