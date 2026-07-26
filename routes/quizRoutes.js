import express from 'express';
import { 
  createQuiz, 
  publishQuiz, 
  addQuestion, 
  deleteQuiz 
} from '../controllers/quizController.js';
import { protect, authorize } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.use(protect, authorize('teacher', 'admin'));
router.post('/course/:courseId', createQuiz);
router.patch('/:id/publish', publishQuiz);
router.post('/:quizId/questions', addQuestion);
router.delete('/:id', deleteQuiz);

export default router;
