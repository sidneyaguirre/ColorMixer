let mongoose = require('mongoose') // mongoose es algo que nos permite facilidad a la hora de manejar esquemas y hacer consultar
let schema = mongoose.Schema // se defina una variable Schema

let colorSchemaJSON = {
    id: {
        name: String,
    }
}


let colorSchema = new schema(colorSchemaJSON) // Creacion del esquema como tal
let color = mongoose.model('Color', colorSchema) // creacion del modelo, este es que conecta con la bd, se le pasa el esquema de la tabla a//Creacion del esquema como tal

module.exports = { // Exporta todos los metodos
    color
}