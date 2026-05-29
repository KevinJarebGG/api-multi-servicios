const mongoose = require("mongoose");

const PersonaSchema = mongoose.Schema({
    nombre: { type: String, required: true, uppercase: true },
    telefono: { type: Number, required: true, unique: true, trim: true, default: 9342222 },
    correo: String,
    nomuser: String,
    especialidad: String,
    password: String,
    rol: { type: String, default: "cliente" }
}, { timestamps: true })

module.exports = mongoose.model("persona", PersonaSchema);