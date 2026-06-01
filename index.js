require("dotenv").config();
const mongoose = require("mongoose");
const dns = require("dns");
const app = require("./app");
const { DB_NAME, DB_HOST } = require("./constantes");

// Forzar el uso del DNS de Google (resuelve problemas de conexión a Atlas)
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const port = process.env.PORT || 4000;

// Si hay MONGO_URI (Atlas), úsala. Si no, usa la conexión local
const mongoUri = process.env.MONGO_URI || `mongodb://${DB_HOST}/${DB_NAME}`;

mongoose.connect(mongoUri)
    .then(() => console.log("Conectado a MongoDB"))
    .catch(error => console.log("Error de conexión:", error));

// Aquí escucha al puerto el server de express
app.listen(port, () => {
    console.log("**********************************")
    console.log("******* API Multi-Servicios ******")
    console.log("**********************************")
    console.log(`Servidor corriendo en puerto ${port}`);
})