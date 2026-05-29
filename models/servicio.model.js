const mongoose = require("mongoose");

const ServicioSchema = mongoose.Schema({
    nombre: { type: String },
    telefono: { type: String },
    servicios: { type: Array, required: true },
    categoria: { type: String, required: true },
    descripcion: { type: String, required: true },
    direccion: { type: String, required: true },
    urgencia: { type: Boolean, default: false },
    estado: { type: String, default: "Pendiente" },
    calificacion: { type: Number, default: 0 },
    fecha: { type: String },
    trabajador: { type: String, default: "" }
}, { timestamps: true })

module.exports = mongoose.model("servicio", ServicioSchema);