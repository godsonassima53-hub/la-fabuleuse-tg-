# 🔧 INSTRUCTIONS MANUELLES FIREBASE

## 📋 Étape 1: Configuration Firestore

### 1.1 Accès à Firestore
1. **Allez sur** : https://console.firebase.google.com/project/la-fabuleuse-b2c45/firestore
2. **Cliquez sur** "Commencer la collection"

### 1.2 Créer la Collection Settings
1. **ID de la collection** : `settings`
2. **Cliquez sur** "Suivant"

### 1.3 Créer le Document General
1. **ID du document** : `general`
2. **Cliquez sur** "Suivant"

### 1.4 Ajouter les Champs (UN PAR UN)

#### Champ 1: whatsappNumber
- **Champ** : `whatsappNumber`
- **Type** : `string`
- **Valeur** : `259192719945977`
- **Cliquez sur** "Ajouter"

#### Champ 2: address
- **Champ** : `address`
- **Type** : `string`
- **Valeur** : `Lomé, Togo`
- **Cliquez sur** "Ajouter"

#### Champ 3: email
- **Champ** : `email`
- **Type** : `string`
- **Valeur** : `contact@lafabuleuse.tg`
- **Cliquez sur** "Ajouter"

#### Champ 4: phone
- **Champ** : `phone`
- **Type** : `string`
- **Valeur** : `+228 99 99 99 99`
- **Cliquez sur** "Ajouter"

#### Champ 5: facebook
- **Champ** : `facebook`
- **Type** : `string`
- **Valeur** : `https://facebook.com/lafabuleuse`
- **Cliquez sur** "Ajouter"

#### Champ 6: instagram
- **Champ** : `instagram`
- **Type** : `string`
- **Valeur** : `https://instagram.com/lafabuleuse`
- **Cliquez sur** "Ajouter"

#### Champ 7: updatedAt
- **Champ** : `updatedAt`
- **Type** : `timestamp`
- **Valeur** : Cliquez sur l'horloge pour sélectionner la date actuelle
- **Cliquez sur** "Ajouter"

4. **Cliquez sur** "Enregistrer"

## 🔐 Étape 2: Configuration Authentication

### 2.1 Activer Email/Mot de passe
1. **Allez sur** : https://console.firebase.google.com/project/la-fabuleuse-b2c45/authentication
2. **Cliquez sur** "Commencer"
3. **Onglet "Méthodes de connexion"**
4. **Cliquez sur** "Email/Mot de passe"
5. **Activez** le bouton
6. **Cliquez sur** "Enregistrer"

### 2.2 Créer l'Utilisateur Admin
1. **Onglet "Utilisateurs"**
2. **Cliquez sur** "Ajouter un utilisateur"
3. **Email** : `admin@lafabuleuse.tg`
4. **Mot de passe** : `Admin123456!`
5. **Cliquez sur** "Ajouter"

## 📁 Étape 3: Configuration Storage
1. **Allez sur** : https://console.firebase.google.com/project/la-fabuleuse-b2c45/storage
2. **Cliquez sur** "Commencer"
3. **Mode** : Production
4. **Localisation** : Europe
5. **Cliquez sur** "Confirmer"

## 🛡️ Étape 4: Règles de Sécurité

### 4.1 Règles Firestore
1. **Allez sur** : https://console.firebase.google.com/project/la-fabuleuse-b2c45/firestore/rules
2. **Remplacez tout le contenu** par :
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /menu/{docId} {
      allow read: if true;
      allow write: if request.auth != null;
      allow delete: if request.auth != null;
    }
    match /settings/{docId} {
      allow read: if true;
      allow write: if request.auth != null;
      allow update: if request.auth != null;
    }
    match /orders/{docId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null;
      allow delete: if request.auth != null;
    }
  }
}
```
3. **Cliquez sur** "Publier"

### 4.2 Règles Storage
1. **Allez sur** : https://console.firebase.google.com/project/la-fabuleuse-b2c45/storage/rules
2. **Remplacez tout le contenu** par :
```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /menu/{imageId} {
      allow read: if true;
      allow write: if request.auth != null;
      allow delete: if request.auth != null;
    }
    match /images/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
      allow delete: if request.auth != null;
    }
  }
}
```
3. **Cliquez sur** "Publier"

## ✅ Vérification

Une fois terminé, vérifiez :
- [ ] Collection `settings` avec document `general` existe
- [ ] 7 champs sont présents avec bonnes valeurs
- [ ] Utilisateur `admin@lafabuleuse.tg` créé
- [ ] Storage activé
- [ ] Règles publiées

## 🚀 Test Final

1. **Démarrez le site** : `npm run dev`
2. **Testez l'admin** : http://localhost:3000/admin
3. **Connectez-vous** : admin@lafabuleuse.tg / Admin123456!
4. **Vérifiez** que tout fonctionne

---

## 🎉 RÉSULTAT FINAL

Votre site sera 100% configuré et prêt à l'emploi !
