
import express from 'express';
import { 
  addModule, updateModule, deleteModule, 
  addLesson, updateLesson, deleteLesson 
} from '../controllers/moduleController.js';
import { protect, authorize } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.use(protect, authorize('teacher', 'admin'));
// Routes pour les Leçons
router.post('/:moduleId/lessons', addLesson);
router.put('/lessons/:id', updateLesson);
router.delete('/lessons/:id', deleteLesson);

export default router;

