const express = require("express");
const router = express.Router();
const questionController = require("../controllers/questionController");
router.post("/ajout", questionController.ajouterQuestion);
router.get("/list", questionController.listerQuestions);
//router.get("/:id", questionController.getQuestionById);
router.put("/:id", questionController.updateQuestion);

module.exports = router;