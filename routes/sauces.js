const express = require("express");
const router = express.Router();
const Thing = require("../models/Thing");

//*********************TOUTES LES ROUTES ****************************/
router.post("/", (req, res, next) => {
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
router.put("/:id", (req, res, next) => {
  Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: "Objet modifié !" }))
    .catch((error) => res.status(400).json({ error }));
});

//Suppression d'un objet séléctioné par son id
router.delete("/:id", (req, res, next) => {
  Thing.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Objet supprimé !" }))
    .catch((error) => res.status(400).json({ error }));
});

//Trouver un seul Objet dynamique par son identifiant
router.get("/:id", (req, res, next) => {
  Thing.findOne({ _id: req.params.id })
    .then((thing) => res.status(200).json(things))
    .catch((error) => res.status(404).json({ error }));
});

//Affichée tous les Objet
router.get("/", (req, res, next) => {
  //"find" sert a trouver tous les objets
  Thing.find()
    .then((things) => res.status(200).json(things))
    .catch((error) => res.status(400).json({ error }));
});

module.exports = router;
