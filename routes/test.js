const express = require("express");
const router = express.Router();
const saucesCtrl = require("../controllers/sauces");
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

//*********************TOUTES LES ROUTES ****************************/
router.post("/", auth, multer, saucesCtrl.createSauce);

//Modification d'un objet séléctionée grace a son id
router.put("/:id", auth, multer, saucesCtrl.modifySauce);

//Suppression d'un objet séléctioné par son id
router.delete("/:id", auth, saucesCtrl.deleteSauce);

//Trouver un seul Objet dynamique par son identifiant
router.get("/:id", auth, saucesCtrl.getOneSauce);

//Affichée tous les Objet
router.get("/", auth, saucesCtrl.getAllSauce);

module.exports = router;
