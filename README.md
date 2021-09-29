Pour tester l'application:
Cloner le frontend de l'application(https://github.com/OpenClassrooms-Student-Center/Web-Developer-P6) et le lancer.
Dans un terminal, accéder au dossier du frontend - Installer les dépendances: npm install - Lancer: npm start
Dans un autre terminal, pour accéder au dossier du backend
cloner le repository backend (https://github.com/jonathan881/jonathanRibiere_6_08092021).
Installer les dépendances: npm install
Lancer: nodemon server
Ajouter un fichier de configuration nommé ".env" à la racine du backend. A l'intérieur, 5 variables d'environnement "secrètes" seront a définires:
USERNAME='Variable pour le userName de conexion a la base de donnée MongoDB"
PSWD='Variable pour le Password de conexion a la base de donnée MongoDB"
MONGODBHOST = 'lien vers la base de données mongoDB'
TOKEN = 'clé secrète pour crypter les tokens'
ALLOWED_CORS = 'http://127.0.0.1:5500'
Le frontend est accessible à l'adresse http://localhost:5500
Pour des tests spécifiques (avec postman par exemple), le backend répond à l'adresse: http://localhost:3000 (attention: authentification requise pour toutes les routes /api/sauces/)
Problèmes de version du frontend
Le frontend fourni par OpenClassrooms utilise Angular 7, et les dépendances utilisées provoquaient des erreurs sous ma machine (macBook) car ma version de Node était trop récente.
Pour solutionner le problème, j'ai installée l'extension 'Go Live' de Visual Studio Code.
