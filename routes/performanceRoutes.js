import express from 'express';
import { 
  generateForStudent, 
  generateForTeacher, 
  generateForAdmin 
} from '../controllers/analyticsController.js';
import { protect, authorize } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/student', protect, authorize('student'), generateForStudent);
router.get('/teacher/course/:courseId', protect, authorize('teacher'), generateForTeacher);
router.get('/admin', protect, authorize('admin'), generateForAdmin);

export default router;
