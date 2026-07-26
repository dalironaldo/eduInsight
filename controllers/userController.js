// controllers/userController.js
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// Ajouter un User (admin uniquement)
exports.ajouterUser = async (req, res) => {
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

// Récupérer un user par ID
exports.getUserById = async (req, res) => {
try {
const user = await User.findById(req.params.id);
if (!user) {
return res.status(404).json({ message: "User non trouvé" });
}
res.json(user);
} catch (err) {
res.status(500).json({ message: "Erreur lors de la récupération", error: err.message });
}
};
// Mettre à jour un utilisateur
exports.updatedUser = async (req, res) => {
try {
const updatedUser = await User.findByIdAndUpdate(
req.params.id,
req.body,
{
new: true, // retourne le document mis à jour
runValidators: true // applique les validations du schema
}
);
if (!updatedUser) {
return res.status(404).json({ message: "User non trouvé" });
}
res.json(updatedUser);
} catch (err) {
res.status(400).json({ message: "Erreur de mise à jour", error: err.message });
}
};
// Supprimer un utilisateur
exports.deleteUser = async (req, res) => {
try {
const deletedUser = await User.findByIdAndDelete(req.params.id);
if (!deletedUser) {
return res.status(404).json({ message: "User non trouvé" });
}
res.json({ message: "User supprimé avec succès" });
} catch (err) {
res.status(500).json({ message: "Erreur de suppression", error: err.message });
}
};