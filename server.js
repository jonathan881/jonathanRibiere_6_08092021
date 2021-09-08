//Importer le package de node "Http"
const http = require("http");

//Fonction qui est appelée a chaque requets
const server = http.createServer((req, res) => {
  res.end("reponse du serveur aaaaaa !");
});

//Config le serveur pour qu'il écoute
server.listen(process.env.PORT || 3000);
