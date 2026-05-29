//Son las librerias para el servidor y validadcion
const express=require("express");
const cors=require("cors");
const bodyParser=require("body-parser");

//Importamos rutas
const PersonaRouter=require("./routes/persona.routes");
const ServicioRouter=require("./routes/servicio.routes");
const AuthRouter=require("./routes/auth.routes");

//Variable que obtiene los valores del express
const app=express();

//configurar los http para validar a traves del cors
app.use(cors());
//usar el bodyparser para pasar el JSON
app.use(bodyParser.json())

//Aqui van las rutas
app.use("/api/",PersonaRouter);
app.use("/api/",ServicioRouter);
app.use("/api/",AuthRouter);

module.exports=app;