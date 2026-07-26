
const mongoose = require("mongoose");
const options = {
collection: "questions",

};
const QuestionSchema = new mongoose.Schema({
quiz :   { type: String,  required: true},
statement  : { type: String, required: true },
type : { type: String, required: true },
points: { type: Number, required: true },   
order : { type: Number, required: true },
});
module.exports = mongoose.model("Question", QuestionSchema);