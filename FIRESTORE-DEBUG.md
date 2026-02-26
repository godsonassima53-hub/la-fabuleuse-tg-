# 🔍 DEBUG FIRESTORE - LA FABULEUSE

## 🎯 **OBJECTIF**

Identifier et corriger l'erreur "Erreur lors de la sauvegarde" lors de l'ajout d'un plat.

## 🔧 **ÉTAPES DE DEBUG IMMÉDIAT**

### 1️⃣ **Vérifier les règles Firestore**

Allez sur : https://console.firebase.google.com/
1. **Sélectionnez** le projet `la-fabuleuse-b2c45`
2. **Firestore Database** → Rules
3. **Vérifiez** que les règles sont :

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Menu items - lecture publique, écriture admin uniquement
    match /menu/{docId} {
      allow read: if true;
      allow write: if request.auth != null;
      allow delete: if request.auth != null;
    }
    
    // Settings - lecture publique, écriture admin uniquement
    match /settings/{docId} {
      allow read: if true;
      allow write: if request.auth != null;
      allow update: if request.auth != null;
    }
    
    // Orders (réservé pour usage futur)
    match /orders/{docId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null;
      allow delete: if request.auth != null;
    }
  }
}
```

4. **Cliquez sur** "Publier"

### 2️⃣ **Vérifier l'authentification**

1. **Authentication** → Users
2. **Vérifiez** que `admin@lafabuleuse.tg` existe
3. **Testez** la connexion sur https://la-fabuleuse.netlify.app/login

### 3️⃣ **Tester avec la console**

Ouvrez la console (F12) sur la page admin et tapez :

```javascript
// Test connexion Firestore
import { collection, addDoc, getDoc, doc } from 'firebase/firestore';
import { db } from './src/lib/firebase.js';

// Test 1: Connexion
getDoc(doc(db, 'settings', 'general'))
  .then(doc => console.log('✅ Connexion OK:', doc.exists()))
  .catch(error => console.error('❌ Erreur connexion:', error));

// Test 2: Ajout simple
addDoc(collection(db, 'menu'), {
  name: 'Test plat',
  price: 1000,
  description: 'Test description',
  category: 'restaurant',
  image: 'data:image/png;base64,test',
  available: true,
  createdAt: new Date()
})
  .then(doc => console.log('✅ Ajout OK:', doc.id))
  .catch(error => console.error('❌ Erreur ajout:', error));
```

## 📋 **LOGS À SURVEILLER**

Quand vous essayez d'ajouter un plat, regardez la console :

### ✅ **Logs de succès**
```
🔍 Validation des champs OK
📸 Image type: Base64
🔥 Test connexion Firestore...
🔥 Connexion Firestore OK: true
➕ Ajout d'un nouveau plat
✅ Plat ajouté avec ID: abc123...
```

### ❌ **Logs d'erreur**
```
❌ Erreur détaillée: [Error object]
❌ Code erreur: permission-denied
❌ Message erreur: Missing or insufficient permissions
```

## 🚨 **ERREURS COURANTES**

### 1. **Permission denied**
- **Cause** : Règles Firestore incorrectes
- **Solution** : Publier les règles correctes

### 2. **Unauthenticated**
- **Cause** : Utilisateur non connecté
- **Solution** : Se reconnecter

### 3. **Invalid data**
- **Cause** : Champ manquant ou invalide
- **Solution** : Validation améliorée

### 4. **Network error**
- **Cause** : Problème de connexion
- **Solution** : Réessayer plus tard

## 🎯 **SOLUTION IMMÉDIATE**

1. **Vérifiez les règles Firestore**
2. **Testez l'authentification**
3. **Utilisez la console pour tester**
4. **Dites-moi l'erreur exacte**

---

**🔍 Une fois l'erreur identifiée, je pourrai corriger définitivement !**
