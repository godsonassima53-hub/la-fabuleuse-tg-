# LA FABULEUSE – Bar Restaurant Café

Site web professionnel responsive pour LA FABULEUSE, situé au Togo. Une expérience culinaire d'exception avec système de commande moderne.

## 🎯 Objectif

Permettre aux clients de :
- Consulter le menu complet avec prix en FCFA
- Ajouter des plats à un panier dynamique
- Commander directement via WhatsApp
- Profiter d'une interface moderne et responsive

## 🚀 Fonctionnalités

### 🍽️ **Interface Client**
- **Menu Dynamique** : Affichage des plats par catégories (Bar, Restaurant, Café)
- **Panier Intelligent** : Ajout/suppression de plats, modification des quantités
- **Commande WhatsApp** : Génération automatique du message de commande
- **Design Premium** : Thème Noir & Or avec touches de bleu et rouge bordeaux
- **100% Responsive** : Optimisé pour mobile, tablette et desktop
- **Animations Fluides** : Effets hover et transitions élégantes

### 🔐 **Espace Admin**
- **Authentification Sécurisée** : Firebase Authentication
- **Gestion du Menu** : Ajout, modification, suppression des plats
- **Upload d'Images** : Firebase Storage intégré
- **Configuration WhatsApp** : Numéro modifiable
- **Paramètres** : Adresse, réseaux sociaux
- **Interface Moderne** : Dashboard intuitif

### 🎨 **Design & UX**
- **Palette Élégante** : Noir (#0a0a0a), Or (#d4af37), Bleu (#1e3a8a), Rouge Bordeaux (#800020)
- **Typographie Moderne** : Polices professionnelles et lisibles
- **Logo Intégré** : Support du logo personnalisé avec fallback SVG
- **Micro-interactions** : Animations subtiles et feedback visuel

## 🛠️ Installation

### Prérequis
- Node.js 18+ 
- npm ou yarn
- Un compte Firebase

### Étapes d'installation

1. **Clonez le projet**
   ```bash
   git clone [repository-url]
   cd la-fabuleuse-–-bar-restaurant-café
   ```

2. **Installez les dépendances**
   ```bash
   npm install
   ```

3. **Configurez Firebase**
   - Créez un fichier `.env.local` à la racine
   - Copiez le contenu de `.env.example`
   - Remplissez vos informations Firebase

4. **Lancez le développement**
   ```bash
   npm run dev
   ```

Le site sera disponible sur `http://localhost:3000`

## 🔥 Configuration Firebase

### 1. Création du Projet
1. Allez sur la [Console Firebase](https://console.firebase.google.com/)
2. Créez un nouveau projet : "LA FABULEUSE"
3. Activez les services suivants

### 2. Services à Activer

#### **Authentication**
- Activez la méthode "Email/Mot de passe"
- Ajoutez l'email admin dans la section "Utilisateurs"

#### **Firestore Database**
- Créez une base de données en mode production
- Localisation : Europe (ou la plus proche)

#### **Storage**
- Activez le stockage pour les images
- Configurez les règles de sécurité

#### **Hosting**
- Activez l'hébergement gratuit

### 3. Configuration des Règles

#### **Firestore Rules** (`firestore.rules`)
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

#### **Storage Rules** (`storage.rules`)
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

### 4. Variables d'Environnement

Créez `.env.local` :
```env
VITE_FIREBASE_API_KEY=votre_api_key
VITE_FIREBASE_AUTH_DOMAIN=votre_domaine
VITE_FIREBASE_PROJECT_ID=votre_project_id
VITE_FIREBASE_STORAGE_BUCKET=votre_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=votre_sender_id
VITE_FIREBASE_APP_ID=votre_app_id
```

## 🔐 Administration

### Accès Admin
- **URL** : `/admin` (redirection automatique vers `/login` si non connecté)
- **Email** : Configurez l'email admin dans Firebase Authentication
- **Mot de passe** : Défini lors de la création de l'utilisateur

### Fonctionnalités Admin
- **Gestion du Menu** : Ajout, modification, suppression des plats
- **Upload d'Images** : Glisser-déposer ou sélection de fichiers
- **Paramètres WhatsApp** : Modification du numéro de téléphone
- **Réseaux Sociaux** : Configuration Facebook et Instagram
- **Adresse** : Mise à jour de l'adresse du restaurant

### Changer l'Email Admin
1. Allez dans Firebase Console → Authentication
2. Ajoutez un nouvel utilisateur avec l'email désiré
3. Supprimez l'ancien utilisateur si nécessaire

### Changer le Numéro WhatsApp
1. Connectez-vous à l'espace admin
2. Allez dans "Paramètres"
3. Modifiez le champ "Numéro WhatsApp"
4. Cliquez sur "Enregistrer"

## 📱 Déploiement

### Déploiement sur Firebase Hosting

1. **Installez Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Connectez-vous**
   ```bash
   firebase login
   ```

3. **Initialisez le projet**
   ```bash
   firebase init
   ```
   - Choisissez "Hosting"
   - Sélectionnez votre projet Firebase
   - Dossier public : `dist`
   - Configurez comme SPA (single-page application)

4. **Build et Deploy**
   ```bash
   npm run build
   firebase deploy
   ```

### Déploiement Automatisé
Pour un déploiement automatique à chaque push :
```bash
# Ajoutez ce script dans package.json
"deploy": "npm run build && firebase deploy"
```

## 🎨 Personnalisation

### Changer le Logo
1. Remplacez l'image du logo dans le code
2. Le fallback SVG est déjà intégré
3. Le logo s'adapte automatiquement au thème

### Modifier les Couleurs
Les couleurs principales sont définies dans les composants :
- **Noir** : `#0a0a0a`, `#141414`, `#1a1a1a`
- **Or** : `#d4af37`, `#b8962e`
- **Bleu** : `#1e3a8a`, `#3b82f6`
- **Rouge Bordeaux** : `#800020`

### Ajouter des Catégories
1. Modifiez le type `MenuItem` dans `src/types.ts`
2. Mettez à jour les filtres dans `MenuGrid.tsx`
3. Ajoutez les options dans le formulaire admin

## 📊 Structure du Projet

```
src/
├── components/          # Composants React
│   ├── Header.tsx      # Header avec navigation
│   ├── MenuGrid.tsx    # Grille du menu
│   ├── CartSidebar.tsx # Panier latéral
│   └── Footer.tsx      # Footer amélioré
├── pages/              # Pages principales
│   ├── Home.tsx        # Page d'accueil
│   ├── Admin.tsx       # Interface admin
│   └── Login.tsx       # Page de connexion
├── context/            # Context React
│   └── CartContext.tsx # Gestion du panier
├── lib/                # Configuration
│   └── firebase.ts     # Configuration Firebase
└── types.ts            # Types TypeScript
```

## 🔧 Maintenance

### Mises à Jour
- Mettez à jour les dépendances régulièrement
- Vérifiez les règles de sécurité Firebase
- Surveillez les performances avec Lighthouse

### Sauvegarde
- Exportez régulièrement les données Firestore
- Sauvegardez les images du Storage
- Maintenez une copie du code source

## 🚀 Améliorations Futures

- **Système de Réservation** : Réservation de tables en ligne
- **Programme de Fidélité** : Points et récompenses
- **Livraison** : Intégration avec des services de livraison
- **Paiement en Ligne** : Integration Mobile Money
- **Multilingue** : Support anglais et français

## 📞 Support

Pour toute question ou problème :
- **Email** : contact@lafabuleuse.tg
- **WhatsApp** : +22896058543
- **GitHub Issues** : Signalez les problèmes sur le repository

---

**Développé avec ❤️ au Togo**  
*© 2024 LA FABULEUSE - Tous droits réservés*
