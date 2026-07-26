const express = require("express");
const router = express.Router();

const { register, login } = require("../controllers/authController.js");
const { protect, authorize } = require("../middleware/authMiddleware.js");

router.post("/register", register);
router.post("/login", login);

router.get("/list", protect, authorize("Admin"), (req, res) => {
  res.json({ message: "Profil utilisateur", user: req.user });
});

router.get(
  "/admin",
  protect,
  authorize("Admin"),
  (req, res) => {
    res.json({ message: "Espace administrateur" });
  }
);

module.exports = router;