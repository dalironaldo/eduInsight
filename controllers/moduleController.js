// ✅ CORRECT (Import directly)
const Module = require("../models/Module.js");

exports.addModule = async (req, res, next) => {
  try {
    // Fill course ID from URL params
    req.body.course = req.params.coursId; // or req.params.courseId (match your router!)

    const module = await Module.create(req.body);

    res.status(201).json({
      success: true,
      data: module,
    });
  } catch (error) {
    next(error);
  }
};

exports.getModule = async (req, res, next) => {
  try {
    const module = await Module.findById(req.params.id).populate({
      path: "course",
      select: "title code description department", // Sélection des champs spécifiques à inclure
    });

    if (!module) {
      return res.status(404).json({
        success: false,
        message: "Module non trouvé",
      });
    }

    res.status(200).json({
      success: true,
      data: module,
    });
  } catch (error) {
    next(error);
  }
};

exports.updateModule = async (req, res, next) => {
  try {
    exports.module = await Module.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({ success: true, data: module });
  } catch (error) {
    next(error);
  }
};
