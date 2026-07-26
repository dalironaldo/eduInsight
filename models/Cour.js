const mongoose = require("mongoose");
const CourSchema = new mongoose.Schema({
title :   { type: String,  required: true},
duration : { type: String, required: true },
level : { type: String, required: true },
teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
image: { type: String, required: true },
createAt: { type: Date, default: Date.now },
updateAt:{ type: Date, default: Date.now },
});
module.exports = mongoose.model("Cour", CourSchema);