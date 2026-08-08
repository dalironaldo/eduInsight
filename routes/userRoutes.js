///// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { protect, authorize } = require("../middleware/authMiddleware");

router.post(
  "/ajouter",
  protect,
  authorize(["Admin"]),
  userController.ajouterUser,
);
router.get("/:id", userController.getUserById);
router.put("/:id", userController.updatedUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
