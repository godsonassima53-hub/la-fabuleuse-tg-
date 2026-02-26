@echo off
echo 🚀 DÉPLOIEMENT LA FABULEUSE
echo ========================
echo.
echo 1. Connexion Firebase...
firebase login
echo.
echo 2. Initialisation Hosting...
firebase init hosting --project la-fabuleuse
echo.
echo 3. Déploiement...
firebase deploy
echo.
echo 🎉 Site déployé sur https://la-fabuleuse.firebaseapp.com
echo 🔑 Admin: admin@lafabuleuse.tg / Admin123456!
echo 📱 WhatsApp: https://wa.me/c/259192719945977
echo.
pause
