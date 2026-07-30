const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
dotenv.config();
connectDB();
const app = express();
/* Middlewares globaux */
app.use(express.json()); // lire le body JSON
app.use(cors()); // autoriser les requêtes externes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/user", require("./routes/userRoutes"));
app.use("/api/cour", require("./routes/courRoutes"));
app.use("/api/department", require("./routes/departmentRoutes"));
app.use("/api/quiz", require("./routes/quizRoutes"));
app.use("/api/module", require("./routes/moduleRoutes"));
app.use("/api/question", require("./routes/questionRoutes"));
app.use("/api/lesson", require("./routes/lessonRoutes"));
app.use("/api/choice", require("./routes/choiceRoutes"));
//app.use("/api/attempt", require("./routes/quizAttemptRoutes"));
app.use("/api/notification", require("./routes/notificationRoutes"));
app.use("/api/recommandations", require("./routes/recommandationsRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveur lancé sur le port ${PORT}`));
