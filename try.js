let {primaryColor,secondaryColor,tertiaryColor} = require('./color.js')

function isColor(param) {
    
    if (param == primaryColor.yellow) {
        let final = [] 
        final.push(new Hola(param))
        console.log(final)         
    }
    else if (param == primaryColor.blue)
        return "azul"
    else if (param == primaryColor.red)
        return "rojo"
    else if (param == secondaryColor.green)
        return "verde"
}

isColor("yellow")

var imaColors = [];

imaColors["yellow"] = "colors/yellow.png";


class Hola {
    constructor(c) {

        this.color = c;
        //this.name = n;

        this.imagen = new Image();
        this.imagen.src = imaColors[this.color];
    }
}