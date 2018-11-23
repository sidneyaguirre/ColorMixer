let mongoose = require("mongoose"); // mongoose es algo que nos permite facilidad a la hora de manejar esquemas y hacer consultar
let schema = mongoose.Schema; // se defina una variable Schema

const model = new mongoose.Schema({
    color: { type: String, required: true }
});

let colorSchema = new schema(model); // Creacion del esquema como tal
let color = mongoose.model("Color", colorSchema); // creacion del modelo, este es que conecta con la bd, se le pasa el esquema de la tabla a//Creacion del esquema como tal

module.exports = {
    // Exporta todos los metodos
    color
};