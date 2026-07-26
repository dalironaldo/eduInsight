const express = require("express");
const router = express.Router();
const departmentController = require("../controllers/departmentController.js");
router.post("/aj", departmentController.ajouterDepartment);
router.get("/list", departmentController.listerDepartments);
//router.get("/:id", departmentController.getDepartmentById);
router.put("/:id", departmentController.updateDepartment);
router.delete("/:id", departmentController.deleteDepartment);

module.exports = router;