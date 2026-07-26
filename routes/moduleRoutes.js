import express from 'express';
import { 
  addModule, updateModule, deleteModule, 
  addLesson, updateLesson, deleteLesson 
} from '../controllers/moduleController.js';
import { protect, authorize } from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(protect, authorize('teacher', 'admin'));

// Routes pour les Modules
router.post('/course/:coursId', addModule);
router.put('/:id', updateModule);
router.delete('/:id', deleteModule)
module.exports = router;
