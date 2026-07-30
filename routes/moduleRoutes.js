const express = require("express");
const {
  addModule,
  updateModule,
  deleteModule,
  addLesson,
  updateLesson,
  deleteLesson,
} = require("../controllers/moduleController.js");
const { protect, authorize } = require("../middleware/authMiddleware.js");

const router = express.Router();

router.use(protect, authorize("teacher", "admin"));

// Routes pour les Modules
router.post("/course/:coursId", addModule);
router.put("/:id", updateModule);
module.exports = router;
