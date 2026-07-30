const express = require("express");
const {
  getNotifications,
  markAsRead,
} = require("../controllers/notificationController.js");
const { protect, authorize } = require("../middleware/authMiddleware.js");

const router = express.Router();

router.use(protect);

router.get("/", getNotifications);
router.patch("/:id/read", markAsRead);

module.exports = router;
