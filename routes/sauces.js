const express = require("express");
const router = express.Router();
const saucesCtrl = require("../controllers/sauces");

//*********************TOUTES LES ROUTES ****************************/
router.post("/", saucesCtrl.createThing);

//Modification d'un objet séléctionée grace a son id
router.put("/:id", saucesCtrl.modifyThing);

//Suppression d'un objet séléctioné par son id
router.delete("/:id", saucesCtrl.deleteThing);

//Trouver un seul Objet dynamique par son identifiant
router.get("/:id", saucesCtrl.getOneThing);

//Affichée tous les Objet
router.get("/", saucesCtrl.getAllThings);

module.exports = router;
