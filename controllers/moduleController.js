// Module Controllers
const { Module } = require("../models/Module.js");
exports.addModule = async (req, res, next) => {
  try {
    const module = await Module.create({
      ...req.body,
      course: req.params.coursId,
    });
    res.status(201).json({ success: true, data: module });
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
