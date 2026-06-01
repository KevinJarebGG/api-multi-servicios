//Son las librerias para el servidor y validadcion
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

//Importamos rutas
const PersonaRouter = require("./routes/persona.routes");
const ServicioRouter = require("./routes/servicio.routes");
const AuthRouter = require("./routes/auth.routes");

//Variable que obtiene los valores del express
const app = express();

// Configuración de CORS - solo permite peticiones desde URLs autorizadas
const dominiosPermitidos = [
    process.env.FRONTEND_URL,        // URL desde el .env (desarrollo)
    "http://localhost:5173"          // Por si acaso, en desarrollo
];

app.use(cors({
    origin: function (origin, callback) {
        // Permite peticiones sin origin (ej: Postman, Insomnia)
        if (!origin) return callback(null, true);

        if (dominiosPermitidos.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("No permitido por CORS"));
        }
    }
}));

//usar el bodyparser para pasar el JSON
app.use(bodyParser.json());

//Aqui van las rutas
app.use("/api/", PersonaRouter);
app.use("/api/", ServicioRouter);
app.use("/api/", AuthRouter);

module.exports = app;