//****************** Controllers sert a stocké toute la logique métier */
const Thing = require("../models/Thing");

//On export la fonction "createThing" pour la création d'un Objet
exports.createThing = (req, res, next) => {
  delete req.body._id;
  const thing = new Thing({
    ...req.body,
  });
  thing
    .save()
    .then(() => res.status(201).json({ message: "Objet enregistré !" }))
    .catch((error) => res.status(400).json({ error }));
};

//On export la fonction "modifyThing" pour la modification d'un Objet
exports.modifyThing = (req, res, next) => {
  Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: "Objet modifié !" }))
    .catch((error) => res.status(400).json({ error }));
};

//On export la fonction "deleteThing" pour la suppression d'un Objet
exports.deleteThing = (req, res, next) => {
  Thing.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Objet supprimé !" }))
    .catch((error) => res.status(400).json({ error }));
};

//On export la fonction "getOneThing" pour récupéré un seul Objet
exports.getOneThing = (req, res, next) => {
  Thing.findOne({ _id: req.params.id })
    .then((thing) => res.status(200).json(things))
    .catch((error) => res.status(404).json({ error }));
};

//On export la fonction "getOneThing" pour récupéré tous les Objets
exports.getAllThings = (req, res, next) => {
  //"find" sert a trouver tous les objets
  Thing.find()
    .then((things) => res.status(200).json(things))
    .catch((error) => res.status(400).json({ error }));
};
