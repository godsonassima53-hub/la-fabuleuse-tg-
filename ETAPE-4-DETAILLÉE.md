# 📋 ÉTAPE 4 - CONFIGURATION PARAMÈTRES FIREBASE (DÉTAILLÉ)

## 🔥 Accès à Firebase Console

1. **Ouvrez votre navigateur**
2. **Allez sur** : https://console.firebase.google.com/
3. **Connectez-vous** avec votre compte Google
4. **Sélectionnez le projet** : `la-fabuleuse`

## 📊 Configuration Firestore Database

### 4.1 Créer la Base de Données

1. **Dans le menu de gauche**, cliquez sur **"Firestore Database"**
2. **Cliquez sur** **"Créer une base de données"**
3. **Choisissez** :
   - ✅ **Commencer en mode production**
   - ✅ **Localisation** : Europe (europe-west)
4. **Cliquez sur** **"Créer une base de données"**

### 4.2 Ajouter les Paramètres

1. **Dans Firestore**, cliquez sur **"Commencer la collection"**
2. **Nommez la collection** : `settings`
3. **Cliquez sur** **"Suivant"**
4. **Entrez l'ID du document** : `general`
5. **Cliquez sur** **"Suivant"**

### 4.3 Ajouter les Champs

Ajoutez ces champs un par un :

| Champ | Type | Valeur |
|-------|------|--------|
| `whatsappNumber` | string | 259192719945977 |
| `address` | string | Lomé, Togo |
| `email` | string | contact@lafabuleuse.tg |
| `phone` | string | +228 99 99 99 99 |
| `facebook` | string | https://facebook.com/lafabuleuse |
| `instagram` | string | https://instagram.com/lafabuleuse |
| `updatedAt` | timestamp | (date actuelle) |

#### Comment ajouter un champ :

1. **Cliquez sur** **"Ajouter un champ"**
2. **Entrez le nom du champ** (ex: `whatsappNumber`)
3. **Sélectionnez le type** : `string`
4. **Entrez la valeur** (ex: `259192719945977`)
5. **Cliquez sur** **"Ajouter"**

6. **Répétez** pour tous les champs

7. **Cliquez sur** **"Enregistrer"** quand tous les champs sont ajoutés

## 🔐 Configuration Authentication

### 4.4 Activer Email/Mot de passe

1. **Dans le menu**, cliquez sur **"Authentication"**
2. **Cliquez sur** **"Commencer"** (si pas encore fait)
3. **Allez dans l'onglet** **"Méthodes de connexion"**
4. **Cliquez sur** **"Email/Mot de passe"**
5. **Activez** le bouton
6. **Cliquez sur** **"Enregistrer"**

### 4.5 Créer l'Utilisateur Admin

1. **Dans l'onglet** **"Utilisateurs"**
2. **Cliquez sur** **"Ajouter un utilisateur"**
3. **Remplissez** :
   - **Email** : `admin@lafabuleuse.tg`
   - **Mot de passe** : `Admin123456!`
4. **Cliquez sur** **"Ajouter"**

## 📁 Configuration Storage

### 4.6 Activer le Stockage

1. **Dans le menu**, cliquez sur **"Storage"**
2. **Cliquez sur** **"Commencer"**
3. **Choisissez** :
   - ✅ **Commencer en mode production**
   - ✅ **Localisation** : Europe (europe-west)
4. **Cliquez sur** **"Confirmer"**

## 📋 Copier les Règles de Sécurité

### 4.7 Règles Firestore

1. **Dans Firestore Database**, allez dans l'onglet **"Règles"**
2. **Remplacez tout le contenu** par :

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

3. **Cliquez sur** **"Publier"**

### 4.8 Règles Storage

1. **Dans Storage**, allez dans l'onglet **"Règles"**
2. **Remplacez tout le contenu** par :

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // Menu images - lecture publique, écriture admin uniquement
    match /menu/{imageId} {
      allow read: if true;
      allow write: if request.auth != null;
      allow delete: if request.auth != null;
    }
    
    // General images
    match /images/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
      allow delete: if request.auth != null;
    }
  }
}
```

3. **Cliquez sur** **"Publier"**

## ✅ Vérification Finale

### 4.9 Vérifiez que tout est configuré

**✅ Firestore Database**
- Collection `settings` avec document `general`
- Tous les champs sont présents avec les bonnes valeurs
- Règles de sécurité publiées

**✅ Authentication**
- Email/Mot de passe activé
- Utilisateur `admin@lafabuleuse.tg` créé

**✅ Storage**
- Base de stockage créée
- Règles de sécurité publiées

## 🚀 Test de Connexion

1. **Démarrez le site** : `npm run dev`
2. **Allez sur** : http://localhost:3000/admin
3. **Connectez-vous** avec :
   - Email : `admin@lafabuleuse.tg`
   - Mot de passe : `Admin123456!`
4. **Vérifiez** que vous accédez à l'interface admin

## 📞 En cas de Problème

**Erreurs courantes :**
- ❌ "Permission denied" → Vérifiez les règles Firestore
- ❌ "User not found" → Recréez l'utilisateur dans Authentication
- ❌ "Document not found" → Vérifiez la collection `settings` et document `general`

**Contact support :**
- Email : admin@lafabuleuse.tg
- WhatsApp : https://wa.me/c/259192719945977

---

## 🎉 ÉTAPE 4 TERMINÉE !

Une fois ces étapes complétées, votre site LA FABULEUSE sera :
- ✅ **Entièrement configuré**
- ✅ **Sécurisé**
- ✅ **Prêt au déploiement**
- ✅ **Fonctionnel à 100%**

Vous pouvez maintenant déployer avec `firebase deploy` ! 🚀
