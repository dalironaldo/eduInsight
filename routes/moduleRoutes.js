const express = require("express");
const {
  addModule,
  updateModule,
} = require("../controllers/moduleController.js");
const { protect, authorize } = require("../middleware/authMiddleware.js");

const router = express.Router();

router.use(protect, authorize("Teacher", "Admin"));

// Routes pour les Modules
router.post("/course/:courseId", addModule);
router.put("/:id", updateModule);
module.exports = router;
