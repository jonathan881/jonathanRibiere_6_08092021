//Cette variable sert a importer express
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Thing = require("./models/Thing");

mongoose
  .connect(
    "mongodb+srv://Jonathan88:Trappes78@realmcluster.l6kgq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

//Cette variable sert a créer une application express
const app = express();

//Use traite touttes les requete
app.use((req, res, next) => {
  //Ce headers permet d'accéder à notre API depuis n'importe quelle origine ( '*' )
  res.setHeader("Access-Control-Allow-Origin", "*");
  //Ce headers permet d'ajouter les headers mentionnés aux requêtes envoyées vers notre API (Origin , X-Requested-With , etc.) ;
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  //Ce headers permetd'envoyer des requêtes avec les méthodes mentionnées ( GET ,POST , etc.).
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(bodyParser.json());

app.post("/api/sauces", (req, res, next) => {
  delete req.body._id;
  const thing = new Thing({
    ...req.body,
  });
  thing
    .save()
    .then(() => res.status(201).json({ message: "Objet enregistré !" }))
    .catch((error) => res.status(400).json({ error }));
});
//Modification d'un objet séléctionée grace a son id
app.put("/api/sauces/:id", (req, res, next) => {
  Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: "Objet modifié !" }))
    .catch((error) => res.status(400).json({ error }));
});
//Suppression d'un objet séléctioné par son id
app.delete("/api/sauces/:id", (req, res, next) => {
  Thing.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Objet supprimé !" }))
    .catch((error) => res.status(400).json({ error }));
});

//Trouver un seul Objet dynamique par son identifiant
app.get("/api.sauces/:id", (req, res, next) => {
  Thing.findOne({ _id: req.params.id })
    .then((thing) => res.status(200).json(things))
    .catch((error) => res.status(404).json({ error }));
});

app.get("/api/sauces", (req, res, next) => {
  //"find" sert a trouver tous les objets
  Thing.find()
    .then((things) => res.status(200).json(things))
    .catch((error) => res.status(400).json({ error }));
});

//Sert a exportée pour d'autre fichier
module.exports = app;
