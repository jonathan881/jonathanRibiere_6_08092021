//****************** Controllers sert a stocké toute la logique métier */
const sauces = require("../models/sauces");

//On export la fonction "createSauce" pour la création d'un Objet
exports.createSauce = (req, res, next) => {
  delete req.body._id;
  const sauce = new sauce({
    ...req.body,
  });
  sauce
    .save()
    .then(() => res.status(201).json({ message: "Objet enregistré !" }))
    .catch((error) => res.status(400).json({ error }));
};

//On export la fonction "modifySauce" pour la modification d'un Objet
exports.modifySauce = (req, res, next) => {
  sauce
    .updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: "Objet modifié !" }))
    .catch((error) => res.status(400).json({ error }));
};

//On export la fonction "deleteSauce" pour la suppression d'un Objet
exports.deleteSauce = (req, res, next) => {
  sauce
    .deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Objet supprimé !" }))
    .catch((error) => res.status(400).json({ error }));
};

//On export la fonction "getOneSauce" pour récupéré un seul Objet
exports.getOneSauce = (req, res, next) => {
  sauce
    .findOne({ _id: req.params.id })
    .then((sauce) => res.status(200).json(sauce))
    .catch((error) => res.status(404).json({ error }));
};

//On export la fonction "getAllSauce" pour récupéré tous les Objets
exports.getAllSauce = (req, res, next) => {
  sauce
    .find()
    .then((sauces) => res.status(200).json(sauces))
    .catch((error) => res.status(400).json({ error }));
};
