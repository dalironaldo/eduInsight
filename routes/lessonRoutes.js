const express = require("express");
const {
  addLesson,
  updateLesson,
  deleteLesson,
} = require("../controllers/lessonController.js");
const { protect, authorize } = require("../middleware/authMiddleware.js");

const router = express.Router();

// Routes pour les Leçons
router.post("/:moduleId/lessons", addLesson);
router.put("/lessons/:id", updateLesson);
router.delete("/lessons/:id", deleteLesson);

module.exports = router;
