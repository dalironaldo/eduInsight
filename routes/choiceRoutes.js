const express = require("express");
const {
  addchoice,
  updatechoice,
  deletechoice,
} = require("../controllers/choiceController.js");
const { protect, authorize } = require("../middleware/authMiddleware.js");

const router = express.Router();

// Routes pour les Leçons
router.post("/:moduleId/choices", addchoice);
router.put("/choices/:id", updatechoice);
router.delete("/choices/:id", deletechoice);

module.exports = router;
