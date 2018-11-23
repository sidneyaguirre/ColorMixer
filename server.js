/* jshint esversion: 6 */

const express = require("express");
const config = require("./config");
const static = express.static("./public");
const modelo = require("./entities/color");

let app = express();
app.use(express.json()); // Me hace una transformacion de un String a un Json(req.body)
app.set("port", config.port);
app.use(static);

app.get("/getcolor", (req, res) => {
    modelo.color.find().then(data => {
        return res.json(data);
    });
});
app.post("/savecolor", (req, res) => {
    const newColor = modelo.color(req.body);
    newColor.save().then(response => console.log("Guarde!"));
    return res.json({ MENSAJE: "TODO OK!" });
});

module.exports = app;