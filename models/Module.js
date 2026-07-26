const mongoose = require("mongoose");
const ModuleSchema = new mongoose.Schema({
title :   { type: String,  required: true},
description : { type: String, required: true },
order : { type: Number,default: 0  },
course: { type: mongoose.Schema.Types.ObjectId, ref: "Cour" ,required: true },
createAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("Module", ModuleSchema);