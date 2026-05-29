const Persona = require("../models/persona.model");
const {messageGeneral}=require("../utils/messages");

class PersonaController {
  static createPersona = async (req, res) => {
    try {
      const datos = req.body;

      const correoExiste= await Persona.findOne({correo: datos.correo});
      if(correoExiste){
        return  messageGeneral(res,401,false,null,"El correo ya existe")
      }

      const newperson = await Persona.create(datos);
      messageGeneral(res,201,true,newperson,"Datos creados correctamente")
    } catch (error) {
      return messageGeneral(res, 400, false, null, error.message)
    }
  };

  static obtenerDatos = async (req, res) => {
    try {
      const buscarPersonas = await Persona.find();
      res.status(200).json(buscarPersonas);
    } catch (error) {
      return messageGeneral(res, 400, false, null, error.message)
    }
  };

  static deletePersona= async(req,res)=>{
try {
  const {id}=req.params;
const eliminar= await Persona.findByIdAndDelete(id);
res.status(200).json(eliminar);

} catch (error) {
  return messageGeneral(res, 400, false, null, error.message)
}
  };

  static updatePersona=async (req,res)=>{
    try {
      const {id}=req.params;
      const modPersona=req.body;
      const modificar=await Persona.findByIdAndUpdate({_id:id},modPersona);
      res.status(200).send({message:"Datos actualizados correctamente"},modificar)
    } catch (error) {
     return messageGeneral(res, 400, false, null, error.message)

    }
  }
}

module.exports = PersonaController;
