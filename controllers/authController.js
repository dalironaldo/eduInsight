const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
exports.register = async (req, res) => {
const { firstName, lastName, email, password,role,phone,avatar, createdAt, updatedAt } = req.body;
try {
const userExiste = await User.findOne({ email });
if (userExiste) {
return res.status(400).json({ message: "Utilisateur déjà existant" });
}
const hashedPassword = await bcrypt.hash(password, 10);
await User.create({
firstName,
lastName,
email,
password: hashedPassword,
role,
phone,
avatar,
createdAt,
updatedAt
});
res.status(201).json({ message: "Inscription réussie" });
} catch (error) {
res.status(500).json({ message: error.message });
}
};



exports.login = async (req, res) => {
const { email, password } = req.body;
try {
const user = await User.findOne({ email });
if (!user) {
return res.status(400).json({ message: "Identifiants invalides" });
}
const isMatch = await bcrypt.compare(password, user.password);
if (!isMatch) {
return res.status(400).json({ message: "Identifiants invalides" });
}
const token = jwt.sign(
{ id: User._id, role: User.role },
process.env.JWT_SECRET,
{ expiresIn: "1H" }
);
res.json({
token,
User: {
id: User._id,
name: User.name,
email: User.email,
role: User.role
}
});
} catch (error) {
res.status(500).json({ message: error.message });
}
};