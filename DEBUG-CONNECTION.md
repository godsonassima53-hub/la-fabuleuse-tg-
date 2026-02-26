# 🔍 DÉBOGAGE CONNEXION FIREBASE

## 🚨 **PROBLÈME IDENTIFIÉ**

La connexion admin ne fonctionne pas sur https://la-fabuleuse.netlify.app/login

## 🔧 **ÉTAPES DE DIAGNOSTIC**

### 1️⃣ **Test de connexion local**

J'ai créé deux outils de diagnostic :

#### Option A: Page de test HTML
1. **Ouvrez** : `test-connection.html` dans votre navigateur
2. **Cliquez sur** "Tester la connexion"
3. **Analysez** les messages d'erreur

#### Option B: Console JavaScript
1. **Allez sur** : https://la-fabuleuse.netlify.app/login
2. **Ouvrez** la console (F12)
3. **Tapez** :
```javascript
// Test Firebase
firebase.auth().signInWithEmailAndPassword('admin@lafabuleuse.tg', 'Admin123456!')
  .then(user => console.log('✅ Succès:', user))
  .catch(error => console.error('❌ Erreur:', error));
```

### 2️⃣ **Vérifications Firebase Console**

#### Authentication
1. **Allez sur** : https://console.firebase.google.com/
2. **Sélectionnez** : `la-fabuleuse`
3. **Authentication** → Users
4. **Vérifiez** que `admin@lafabuleuse.tg` existe
5. **Sinon, créez-le** avec mot de passe `Admin123456!`

#### Firestore
1. **Firestore Database** → Data
2. **Créez** la collection `settings`
3. **Créez** le document `general`
4. **Ajoutez** les champs :
   ```
   whatsappNumber: "259192719945977"
   address: "Lomé, Togo"
   facebookUrl: ""
   instagramUrl: ""
   ```

#### Règles de sécurité
1. **Firestore Database** → Rules
2. **Copiez-collez** le contenu de `firestore.rules`
3. **Publiez** les règles

### 3️⃣ **Vérifications Netlify**

#### Variables d'environnement
1. **Allez sur** : https://app.netlify.com
2. **Votre site** → Site settings → Environment variables
3. **Vérifiez** que toutes les variables sont présentes :
   ```
   VITE_FIREBASE_API_KEY=AIzaSyC6D5Xr0x3tKnE8_jwRqnq6sd3yDb3IS7Q
   VITE_FIREBASE_AUTH_DOMAIN=la-fabuleuse.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=la-fabuleuse
   VITE_FIREBASE_MESSAGING_SENDER_ID=394550828848
   VITE_FIREBASE_APP_ID=1:394550828848:web:e3bf818e2e6d96d52832f5
   ```

#### Redéploiement
1. **Trigger** un nouveau déploiement
2. **Attendez** la fin du déploiement
3. **Testez** à nouveau la connexion

## 🎯 **SOLUTIONS PROBABLES**

### Erreur: "auth/user-not-found"
**Solution**: Créer l'utilisateur admin dans Firebase Console

### Erreur: "auth/wrong-password"
**Solution**: Réinitialiser le mot de passe de l'utilisateur admin

### Erreur: "auth/api-key-not-allowed"
**Solution**: Vérifier les variables d'environnement Netlify

### Erreur: "permission-denied"
**Solution**: Appliquer les règles Firestore

## 📱 **TEST FINAL**

Une fois tout configuré :
1. **Allez sur** : https://la-fabuleuse.netlify.app/login
2. **Entrez** : admin@lafabuleuse.tg / Admin123456!
3. **Devriez accéder** à : /admin

---

**🚨 Faites-moi savoir le message d'erreur exact que vous obtenez !**
