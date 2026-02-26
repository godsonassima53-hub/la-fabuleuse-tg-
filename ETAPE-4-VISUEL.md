# 🎨 ÉTAPE 4 - GUIDE VISUEL FIREBASE

## 📋 Vue d'Ensemble de la Configuration

### 🔥 1. Accès au Projet Firebase

```
🌐 https://console.firebase.google.com/
   ↓
📂 Sélectionner projet : "la-fabuleuse"
   ↓
🎯 Tableau de bord du projet
```

### 📊 2. Configuration Firestore

#### Étape A - Création de la base
```
Firestore Database
   ↓
🔘 Commencer en mode production
   ↓
🌍 Localisation : Europe
   ↓
✅ Créer la base de données
```

#### Étape B - Collection Settings
```
📁 Firestore Database
   ↓
📄 "Commencer la collection"
   ↓
📝 Nom collection : settings
   ↓
📄 ID document : general
   ↓
📋 Ajouter les champs :
```

**Structure finale dans Firestore :**
```
📂 settings/
   📄 general/
      📝 whatsappNumber: "259192719945977"
      📝 address: "Lomé, Togo"
      📝 email: "contact@lafabuleuse.tg"
      📝 phone: "+228 99 99 99 99"
      📝 facebook: "https://facebook.com/lafabuleuse"
      📝 instagram: "https://instagram.com/lafabuleuse"
      📝 updatedAt: [timestamp]
```

### 🔐 3. Configuration Authentication

#### Étape A - Activer Email/Mot de passe
```
Authentication
   ↓
🔑 Méthodes de connexion
   ↓
📧 Email/Mot de passe
   ↓
🔘 Activer
   ↓
✅ Enregistrer
```

#### Étape B - Créer Utilisateur Admin
```
Authentication
   ↓
👥 Utilisateurs
   ↓
➕ Ajouter un utilisateur
   ↓
📧 Email: admin@lafabuleuse.tg
   ↓
🔒 Mot de passe: Admin123456!
   ↓
✅ Ajouter
```

### 📁 4. Configuration Storage

```
Storage
   ↓
🗂️ Commencer
   ↓
🔘 Commencer en mode production
   ↓
🌍 Localisation : Europe
   ↓
✅ Confirmer
```

### 🛡️ 5. Règles de Sécurité

#### Firestore Rules
```
Firestore Database → Règles
   ↓
📝 Copier-coller le code
   ↓
✅ Publier
```

#### Storage Rules
```
Storage → Règles
   ↓
📝 Copier-coller le code
   ↓
✅ Publier
```

## 🎯 Résultat Final Attendu

### ✅ Checklist de Vérification

**Firestore Database**
- [ ] Base de données créée (mode Production)
- [ ] Collection `settings` existe
- [ ] Document `general` existe
- [ ] 7 champs configurés avec bonnes valeurs
- [ ] Règles de sécurité publiées

**Authentication**
- [ ] Email/Mot de passe activé
- [ ] Utilisateur `admin@lafabuleuse.tg` créé
- [ ] Mot de passe `Admin123456!` défini

**Storage**
- [ ] Base de stockage créée
- [ ] Règles de sécurité publiées

### 🚀 Test Final

1. **Démarrez le site** : `npm run dev`
2. **Testez l'admin** : http://localhost:3000/admin
3. **Identifiants** : admin@lafabuleuse.tg / Admin123456!
4. **Vérifiez** : Interface admin accessible
5. **Testez** : Ajout/modification menu

## 📞 Support Technique

**Si problème persiste :**
1. **Vérifiez** les étapes une par une
2. **Rafraîchissez** Firebase Console
3. **Attendez** quelques minutes (propagation)
4. **Contactez** : admin@lafabuleuse.tg

---

## 🎊 ÉTAPE 4 - PRÊTE !

Une fois cette configuration terminée, votre site sera 100% opérationnel ! 🚀
