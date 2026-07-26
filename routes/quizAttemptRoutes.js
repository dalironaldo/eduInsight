import express from 'express';
import { takeQuiz, submitAnswers } from '../controllers/quizAttemptController.js';
import { protect, authorize } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.use(protect);

// Démarrer une tentative et soumettre les réponses (Étudiant)
router.post('/start/:quizId', authorize('student'), takeQuiz);
router.post('/:attemptId/submit', authorize('student'), submitAnswers);
