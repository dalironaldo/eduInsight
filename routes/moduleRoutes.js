const express = require("express");
const router = express.Router();
const {
  addModule,
  updateModule,
  getModule,
} = require("../controllers/moduleController");
const { protect, authorize } = require("../middleware/authMiddleware");

router.use(protect, authorize("Teacher", "Admin"));

// URL param MUST match req.params.coursId in your controller
router.post("/course/:coursId", addModule);
router.get("/:id", getModule);
router.put("/:id", updateModule);

module.exports = router;
