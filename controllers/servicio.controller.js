const Servicio = require("../models/servicio.model");
const { messageGeneral } = require("../utils/messages");

class ServicioController {
    static createServicio = async (req, res) => {
        try {
            const datos = req.body;
            const newServicio = await Servicio.create(datos);
            messageGeneral(res, 201, true, newServicio, "Servicio creado correctamente")
        } catch (error) {
            return messageGeneral(res, 400, false, null, error.message)
        }
    }

    static obtenerServicios = async (req, res) => {
        try {
            const servicios = await Servicio.find();
            res.status(200).json(servicios);
        } catch (error) {
            return messageGeneral(res, 400, false, null, error.message)
        }
    }

    static deleteServicio = async (req, res) => {
        try {
            const { id } = req.params;
            const eliminar = await Servicio.findByIdAndDelete(id);
            res.status(200).json(eliminar);
        } catch (error) {
            return messageGeneral(res, 400, false, null, error.message)
        }
    }

    static updateServicio = async (req, res) => {
        try {
            const { id } = req.params;
            const datos = req.body;
            const modificar = await Servicio.findByIdAndUpdate({ _id: id }, datos);
            res.status(200).send({ message: "Servicio actualizado correctamente" }, modificar)
        } catch (error) {
            return messageGeneral(res, 400, false, null, error.message)
        }
    }
}

module.exports = ServicioController;