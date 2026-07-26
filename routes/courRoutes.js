const express = require("express");
const router = express.Router();
const courController = require("../controllers/courController.js");
const upload = require("../middleware/upload.js");
router.post("/ajouter", upload.single("image"), courController.ajouterCour);

router.get("/list", courController.listerCours);
router.get("/:id", courController.getCourById);
router.put("/:id", courController.updateCour);
router.delete("/:id", courController.deleteCour);

module.exports = router;