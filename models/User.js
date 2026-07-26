const mongoose = require("mongoose");
const options = {
discriminatorKey: "role",
collection: "users",//?????????????كانت users
timestamps: true,
};
const UserSchema = new mongoose.Schema(
{
firstName: {type: String,required: true,trim: true,},
lastName: {type: String,required: true,trim: true,},
email: {type: String,lowercase: true,},
password: {type: String,required: true,},
role: {type: String,enum: ['Admin', 'Student', 'Teacher'], default: 'Student'},  
phone: {type: String,required: true,},
avatar: {type: String,},

isActive: {type: Boolean,default: true,},
},
options
);
module.exports = mongoose.model("User", UserSchema);