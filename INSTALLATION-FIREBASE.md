# 📋 Guide d'Installation Firebase pour LA FABULEUSE

## 🔥 Étape 1: Configuration Firebase Console

### 1.1 Accès à la Console
- Allez sur [Firebase Console](https://console.firebase.google.com/)
- Connectez-vous avec votre compte Google
- Sélectionnez le projet "la-fabuleuse"

### 1.2 Configuration Authentication
1. Dans le menu de gauche, allez dans **Authentication**
2. Cliquez sur **"Commencer"** si pas encore configuré
3. Dans l'onglet **"Méthodes de connexion"**
4. Activez **"Email/Mot de passe"**
5. Cliquez sur **"Ajouter un utilisateur"**
6. Entrez l'email : `admin@lafabuleuse.tg`
7. Définissez un mot de passe sécurisé
8. Cliquez sur **"Ajouter"**

### 1.3 Configuration Firestore Database
1. Allez dans **Firestore Database**
2. Créez une nouvelle base de données en mode **Production**
3. Choisissez la localisation **Europe**
4. Dans l'onglet **"Règles"**, collez ce code :

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

### 1.4 Configuration Storage
1. Allez dans **Storage**
2. Commencez en mode **Production**
3. Dans l'onglet **"Règles"**, collez ce code :

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

## 📱 Étape 2: Configuration des Paramètres

### 2.1 Création des Paramètres par Défaut
Dans Firestore Database, créez manuellement le document suivant :

1. Cliquez sur **"Commencer la collection"**
2. Nommez la collection : `settings`
3. Créez un document avec l'ID : `general`
4. Ajoutez ces champs :

| Champ | Valeur |
|-------|--------|
| whatsappNumber | 259192719945977 |
| address | Lomé, Togo |
| email | contact@lafabuleuse.tg |
| phone | +228 99 99 99 99 |
| facebook | https://facebook.com/lafabuleuse |
| instagram | https://instagram.com/lafabuleuse |
| updatedAt | (date actuelle) |

## 🔐 Étape 3: Connexion Admin

### 3.1 Accès à l'Interface Admin
1. Lancez le site : `npm run dev`
2. Allez sur `http://localhost:3000/admin`
3. L'email sera pré-rempli : `admin@lafabuleuse.tg`
4. Entrez le mot de passe que vous avez défini
5. Cliquez sur **"Se connecter"**

### 3.2 Vérification WhatsApp
Une fois connecté, vérifiez que :
- Le numéro WhatsApp apparaît : `259192719945977`
- Le lien généré sera : `https://wa.me/c/259192719945977`

## 📞 Étape 4: Test WhatsApp

### 4.1 Test de Commande
1. Ajoutez des articles au panier depuis le site
2. Cliquez sur le bouton panier
3. Vérifiez le récapitulatif
4. Cliquez sur **"Commander sur WhatsApp"**
5. Vous devriez être redirigé vers WhatsApp avec le message pré-rempli

## 🎯 Étape 5: Personnalisation

### 5.1 Modifier les Informations
Dans l'interface admin, onglet **"Paramètres"** :
- Modifiez le numéro WhatsApp si nécessaire
- Mettez à jour l'adresse
- Configurez les réseaux sociaux
- Cliquez sur **"Enregistrer"**

### 5.2 Gestion du Menu
Dans l'onglet **"Menu"** :
- Ajoutez de nouveaux plats
- Modifiez les prix en FCFA
- Uploadez des photos
- Organisez par catégories (Bar, Restaurant, Café)

## ✅ Vérification Finale

Une fois tout configuré, vérifiez :
- ✅ Connexion admin fonctionne
- ✅ Numéro WhatsApp configuré
- ✅ Menu s'affiche correctement
- ✅ Panier fonctionne
- ✅ Redirection WhatsApp opérationnelle

## 🚀 Déploiement

Pour déployer en production :
```bash
npm run build
firebase deploy
```

---

**🎉 Félicitations ! Votre site LA FABULEUSE est maintenant configuré !**

Pour toute question, contactez : admin@lafabuleuse.tg
