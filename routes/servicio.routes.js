const express = require("express");
const ServicioController = require("../controllers/servicio.controller");

const api = express.Router();

api.post("/servicio/create", ServicioController.createServicio);
api.get("/servicio/buscar", ServicioController.obtenerServicios);
api.delete("/servicio/eliminar/:id", ServicioController.deleteServicio);
api.put("/servicio/modificar/:id", ServicioController.updateServicio);

module.exports = api;