import express from 'express';
import { 

  getRecommendations 
} from '../controllers/recommendationController.js';
import { protect, authorize } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.use(protect);

router.get('/recommendations', authorize('student'), getRecommendations);

export default router;
