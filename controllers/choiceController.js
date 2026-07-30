const Choice = require("../models/Choice");
exports.addchoice = async (req, res, next) => {
  try {
    const choice = await choice.create({
      ...req.body,
      module: req.params.moduleId,
    });
    res.status(201).json({ success: true, data: choice });
  } catch (error) {
    next(error);
  }
};

exports.updatechoice = async (req, res, next) => {
  try {
    const choice = await choice.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({ success: true, data: choice });
  } catch (error) {
    next(error);
  }
};

exports.deletechoice = async (req, res, next) => {
  try {
    await choice.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: "Leçon supprimée" });
  } catch (error) {
    next(error);
  }
};
