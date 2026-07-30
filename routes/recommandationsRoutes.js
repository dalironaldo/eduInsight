const express = require("express");
const {
  getRecommendations,
} = require("../controllers/recommendationController.js");
const { protect, authorize } = require("../middleware/authMiddleware.js");

const router = express.Router();

router.use(protect);

router.get("/recommendations", authorize("student"), getRecommendations);

module.exports = router;
