const Persona = require("../models/persona.model");

exports.login = async (req, res) => {
  try {
    const { nomuser, password } = req.body;

    // Buscar usuario por nomuser o correo (sin verificar la contraseña aquí)
    const usuario = await Persona.findOne({
      $or: [
        { nomuser: nomuser },
        { correo: nomuser }
      ]
    });

    // Si no se encontró el usuario
    if (!usuario) {
      return res.status(401).json({ message: "Credenciales incorrectas" });
    }

    // Comparar la contraseña usando bcrypt
    const passwordValida = await usuario.compararPassword(password);

    if (!passwordValida) {
      return res.status(401).json({ message: "Credenciales incorrectas" });
    }

    // Si todo bien, devolver los datos del usuario (sin la contraseña)
    res.status(200).json({
      id: usuario._id,
      nombre: usuario.nombre,
      nomuser: usuario.nomuser,
      correo: usuario.correo,
      rol: usuario.rol
    });
  } catch (error) {
    res.status(500).json({ message: "Error en el servidor", error });
  }
};