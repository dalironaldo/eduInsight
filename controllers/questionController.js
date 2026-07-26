// controllers/questionController.js
const question = require("../models/Question");
// Ajouter une question (admin uniquement)
exports.ajouterQuestion = async (req, res) => {
try {
const { quiz, statement, type,points,oroder
} = req.body;
const nouvelleQuestion = new Question({
quiz: quiz,
statement: statement,
type: type,
reponsesPossibles: reponsesPossibles
});
await nouvelleQuestion.save();

res.status(201).json(nouvelleQuestion);
} catch (err) {
res.status(400).json({ message: "Erreur d’ajout", error: err.message });
}
};
// Récupérer toutes les questions
exports.listerQuestions = async (req, res) => {
try {
const questions = await Question.find();
res.json(questions);
} catch (err) {
res.status(500).json({ error: err.message });
}
};

// Récupérer toutes les questions
exports.listerQuestions = async (req, res) => {
try {
const questions = await Question.find();
res.json(questions);
} catch (err) {
res.status(500).json({ error: err.message });
}
};
// Récupérer une question par ID

// Mettre à jour une question
exports.updateQuestion = async (req, res) => {
try {
const updatedQuestion = await Question.findByIdAndUpdate(
req.params.id,
req.body,
{
new: true, // retourne le document mis à jour
runValidators: true // applique les validations du schema
}
);
if (!updatedQuestion) {
return res.status(404).json({ message: "Question non trouvée" });
}
res.json(updatedQuestion);
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