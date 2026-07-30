const express = require("express");

const {
  createQuiz,
  publishQuiz,
  addQuestion,
  deleteQuiz,
} = require("../controllers/quizController.js");
const { protect, authorize } = require("../middleware/authMiddleware.js");

const router = express.Router();

router.use(protect, authorize("teacher", "admin"));
router.post("/course/:courseId", createQuiz);
router.patch("/:id/publish", publishQuiz);
router.post("/:quizId/questions", addQuestion);
router.delete("/:id", deleteQuiz);

module.exports = router;
