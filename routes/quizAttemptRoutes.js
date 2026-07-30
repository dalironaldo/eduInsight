const express = require("express");
const {
  takeQuiz,
  submitAnswers,
} = require("../controllers/quizAttemptController.js");
const { protect, authorize } = require("../middleware/authMiddleware.js");

const router = express.Router();

router.use(protect);

// Démarrer une tentative et soumettre les réponses (Étudiant)
router.post("/start/:quizId", authorize("student"), takeQuiz);
router.post("/:attemptId/submit", authorize("student"), submitAnswers);
