const { Quiz } = require("../models/Quiz.js");
const { Question } = require("../models/Question.js");
const { Choice } = require("../models/Choice.js");

exports.createQuiz = async (req, res, next) => {
  try {
    const quiz = await Quiz.create({
      ...req.body,
      course: req.params.courseId,
      createdBy: req.user.id,
    });
    res.status(201).json({ success: true, data: quiz });
  } catch (error) {
    next(error);
  }
};

exports.publishQuiz = async (req, res, next) => {
  try {
    const quiz = await Quiz.findByIdAndUpdate(
      req.params.id,
      { isPublished: true },
      { new: true },
    );
    res.status(200).json({ success: true, data: quiz });
  } catch (error) {
    next(error);
  }
};

exports.addQuestion = async (req, res, next) => {
  try {
    const { choices, ...questionData } = req.body;
    const question = await Question.create({
      ...questionData,
      quiz: req.params.quizId,
    });

    if (choices && choices.length > 0) {
      const choiceDocs = choices.map((c) => ({ ...c, question: question._id }));
      await Choice.insertMany(choiceDocs);
    }

    res.status(201).json({ success: true, data: question });
  } catch (error) {
    next(error);
  }
};

exports.deleteQuiz = async (req, res, next) => {
  try {
    await Quiz.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: "Quiz supprimé" });
  } catch (error) {
    next(error);
  }
};
