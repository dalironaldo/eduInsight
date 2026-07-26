const mongoose = require("mongoose");
const User = require("./User");
const Teacher = require("../models/Teacher");
const TeacherSchema = new mongoose.Schema({
speciality: {type: String,required: true,},
office: {type: String},
hireDate: {type: Date,default: Date.now},
});
module.exports = User.discriminator("teacher", TeacherSchema);
// module.exports = mongoose.model("Teacher"); // Not needed since discriminator returns the model
// Student.js