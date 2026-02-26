# 🔍 DEBUG IMAGES - LA FABULEUSE

## 🎯 **OBJECTIF**

Faire en sorte que TOUTES les images s'affichent correctement, même les captures d'écran.

## 📋 **ÉTAPES DE DEBUG**

### 1️⃣ **Vérifier les images dans le dossier**
1. **Allez dans** : `public/images/`
2. **Vérifiez** que vos images sont bien là
3. **Noms corrects** : ex: `capture-plat.png`, `photo-burger.jpg`

### 2️⃣ **Tester en local**
1. **Démarrez** : `npm run dev`
2. **Ouvrez** : http://localhost:3000
3. **Ouvrez la console** (F12)
4. **Cherchez** les messages "Image chargée" ou "Erreur image"

### 3️⃣ **Ajouter un plat test**
1. **Allez sur** : http://localhost:3000/admin
2. **Ajoutez** un plat avec votre image
3. **Vérifiez** la console pour les logs

## 🔧 **FORMATS ACCEPTÉS**

### ✅ **Extensions valides**
- `.jpg` - Photos classiques
- `.jpeg` - Photos haute qualité
- `.png` - Images avec transparence
- `.gif` - Images animées
- `.webp` - Format moderne
- `.bmp` - Images bitmap
- `.svg` - Images vectorielles

### 📱 **Captures d'écran**
- **Windows** : PNG ou JPG automatiquement
- **Mac** : PNG ou JPG automatiquement  
- **Mobile** : JPG ou PNG automatiquement

## 🚨 **PROBLÈMES COURANTS**

### ❌ **Image ne s'affiche pas**
- **Cause** : Mauvais chemin dans Firestore
- **Solution** : Vérifiez que c'est `/images/nom-fichier.ext`

### ❌ **Zone noire à la place**
- **Cause** : Image introuvable
- **Solution** : Déposez l'image dans `public/images/`

### ❌ **Erreur 404 dans la console**
- **Cause** : Fichier manquant
- **Solution** : Uploadez le fichier manquant

## 🎯 **TEST RAPIDE**

### Dans la console du navigateur :
```javascript
// Test si l'image existe
fetch('/images/votre-image.jpg')
  .then(response => console.log('Image trouvée:', response.ok))
  .catch(error => console.log('Erreur:', error));
```

## 📋 **CHECKLIST**

- [ ] Images dans `public/images/` ?
- [ ] Noms de fichiers simples ?
- [ ] Extensions valides (.jpg, .png, etc) ?
- [ ] Pas d'espaces dans les noms ?
- [ ] Console sans erreurs 404 ?
- [ ] Images visibles en local ?

---

## 🎉 **SOLUTION FINALE**

Une fois tout vérifié :
1. **Redéployez** sur Netlify
2. **Videz le cache** du navigateur
3. **Testez** en production

---

**🔍 Tous les problèmes d'images devraient être résolus !**
