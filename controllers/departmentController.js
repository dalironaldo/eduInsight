// controllers/DepartmentController.js
const Department = require("../models/Department");
// Ajouter un département (admin uniquement)
exports.ajouterDepartment = async (req, res) => {
try {
//const nouveauDepartment = new Department(req.body);
const { name, description, ducreatedatation,   } = req.body;

const ajouterDepartment = new Department({
name,
description,
ducreatedatation,
});

await ajouterDepartment.save();
res.status(201).json(ajouterDepartment);
} catch (err) {
res.status(400).json({ message: "Erreur d’ajout", error: err.message });
}
};
// Récupérer tous les départements
exports.listerDepartments = async (req, res) => {
try {
const departments = await Department.find();
res.json(departments);
} catch (err) {
res.status(500).json({ error: err.message });
}
};
// Récupérer un département par ID // حذفتهااااااااااااااااا


// Mettre à jour un département
exports.updateDepartment = async (req, res) => {
try {
const updatedDepartment = await Department.findByIdAndUpdate(
req.params.id,
req.body,
{
new: true, // retourne le document mis à jour
runValidators: true // applique les validations du schema
}
);
if (!updatedDepartment) {
return res.status(404).json({ message: "Département non trouvé" });
}
res.json(updatedDepartment);
} catch (err) {
res.status(400).json({ message: "Erreur de mise à jour", error: err.message });
}
};
// Supprimer un département
exports.deleteDepartment = async (req, res) => {
try {
const deletedDepartment = await Department.findByIdAndDelete(req.params.id);
if (!deletedDepartment) {
return res.status(404).json({ message: "Département non trouvé" });
}
res.json({ message: "Département supprimé avec succès" });
} catch (err) {
res.status(500).json({ message: "Erreur de suppression", error: err.message });
}
};