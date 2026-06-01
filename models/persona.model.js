const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const PersonaSchema = mongoose.Schema({
    nombre: { type: String, required: true, uppercase: true },
    telefono: { type: Number, required: true, unique: true, trim: true, default: 9342222 },
    correo: String,
    nomuser: String,
    especialidad: String,
    password: String,
    rol: { type: String, default: "cliente" }
}, { timestamps: true })

// Antes de guardar una persona, encriptar su contraseña automáticamente
// Antes de guardar una persona, encriptar su contraseña automáticamente
PersonaSchema.pre("save", async function () {
    // Si la contraseña no cambió o no existe, no la encriptamos
    if (!this.isModified("password")) return;
    if (!this.password) return;

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

    // Método para comparar la contraseña al hacer login
PersonaSchema.methods.compararPassword = async function (passwordIngresada) {
    return await bcrypt.compare(passwordIngresada, this.password);
};

module.exports = mongoose.model("persona", PersonaSchema);