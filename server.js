//Configuracion del servidor con Express js y rutas (raiz) de la aplicacion
/* jshint esversion: 6 */

const express = require("express");
const config = require("./config");
const static = express.static("./public");
const modelo = require("./entities/color");

//configuracion de express
let app = express();
app.use(express.json()); // Me hace una transformacion de un String a un Json(req.body)
app.set("port", config.port);
app.use(static);

//Tuta para obtener los colores guardados en base de datos
app.get("/getcolor", (req, res) => {
    modelo.color.find().then(data => {
        return res.json(data);
    });
});
//Ruta para hacer el POST para guardar en base de datos
app.post("/savecolor", (req, res) => {
    const newColor = modelo.color(req.body);
    newColor.save().then(response => console.log("Guardado en base de datos!"));
    return res.json({ MENSAJE: "TODO OK!" });
});

module.exports = app;