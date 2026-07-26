const mongoose = require("mongoose");
const DepartmentSchema = new mongoose.Schema({
name :   { type: String, required: true },
description: { type: String, required: true },
createAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("Department", DepartmentSchema);