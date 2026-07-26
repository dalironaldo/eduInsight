// controllers/courController.js
const Cour = require("../models/Cour");
// Ajouter un cours (admin uniquement)
exports.ajouterCour = async (req, res) => {
try {
const { title, duration, level, teacher, createAt, updateAt } = req.body;
const nouvelCour = new Cour({
title: title,
duration: duration,
level: level,
teacher: teacher,
createAt: createAt,
updateAt: updateAt,
image: req.file ? req.file.filename : null
});
await nouvelCour.save();

res.status(201).json(nouvelCour);
} catch (err) {
res.status(400).json({ message: "Erreur d’ajout", error: err.message });
}
};
// Récupérer tous les cours
exports.listerCours = async (req, res) => {
try {
const cours = await Cour.find();
res.json(cours);
} catch (err) {
res.status(500).json({ error: err.message });
}
};
// Récupérer un cours par ID
exports.getCourById = async (req, res) => {
try {
const cour = await Cour.findById(req.params.id);
if (!cour) {
return res.status(404).json({ message: "Cours non trouvé" });
}
res.json(cour);
} catch (err) {
res.status(500).json({ message: "Erreur lors de la récupération", error: err.message });
}
};
// Mettre à jour un cours
exports.updateCour = async (req, res) => {
try {
const updatedCour = await Cour.findByIdAndUpdate(
req.params.id,
req.body,
{
new: true, // retourne le document mis à jour
runValidators: true // applique les validations du schema
}
);
if (!updatedCour) {
return res.status(404).json({ message: "Cours non trouvé" });
}
res.json(updatedCour);
} catch (err) {
res.status(400).json({ message: "Erreur de mise à jour", error: err.message });
}
};
// Supprimer un Cour
exports.deleteCour = async (req, res) => {
try {
const deletedCour = await Cour.findByIdAndDelete(req.params.id);
if (!deletedCour) {
return res.status(404).json({ message: "Cours non trouvé" });
}
res.json({ message: "Cours supprimé avec succès" });
} catch (err) {
res.status(500).json({ message: "Erreur de suppression", error: err.message });
}
};