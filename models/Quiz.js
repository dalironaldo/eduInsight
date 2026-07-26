const mongoose = require("mongoose");

const QuizSchema = new mongoose.Schema({
title :   { type: String },
description : { type: String,required: true },
duration:{ type: Number },
passingScore : { type: Number, required: true },
isPublished : { type: Boolean, default: false },
createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User"  },
createAt: { type: Date, default: Date.now },
updateAt:{ type: Date, default: Date.now },
});
module.exports = mongoose.model("Quiz", QuizSchema);