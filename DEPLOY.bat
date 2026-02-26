@echo off
echo 🚀 DÉPLOIEMENT LA FABULEUSE
echo ========================
echo.
echo 1. Connexion Firebase...
firebase login
echo.
echo 2. Initialisation Hosting...
echo Y | firebase init hosting --project la-fabuleuse-b2c45
echo.
echo 3. Déploiement...
firebase deploy --project la-fabuleuse-b2c45
echo.
echo 🎉 Site déployé !
echo 🔗 URL: https://la-fabuleuse-b2c45.firebaseapp.com
echo 👤 Admin: https://la-fabuleuse-b2c45.firebaseapp.com/admin
echo 📱 WhatsApp: https://wa.me/c/259192719945977
echo.
pause
