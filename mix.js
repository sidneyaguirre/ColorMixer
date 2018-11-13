//let { primaryColor, secondaryColor, tertiaryColor } = require('./color')

let b = document.getElementById("mix")
b.addEventListener("click", mixer)

function mixer() {
    let color1 = document.getElementById("color1").value
    let color2 = document.getElementById("color2").value
    let color3

    if (color1 === color2) {
        color3 = color1;
    } else {
        if (color1 == primaryColor.yellow) {
            if (color2 == primaryColor.blue) {
                color3 = secondaryColor.green;
            } else if (color2 == primaryColor.red) {
                color3 = secondaryColor.orange;
            } else if (color2 == secondaryColor.green) {
                color3 = tertiaryColor.greenishYellow;
            } else if (color2 == secondaryColor.orange) {
                color3 = tertiaryColor.orangedYellow;
            } else {
                color3 = "No es posible combinar"
            }
        } else if (color1 == primaryColor.blue) {
            if (color2 == primaryColor.yellow) {
                color3 = secondaryColor.green;
            } else if (color2 == primaryColor.red) {
                color3 = secondaryColor.purple;
            } else if (color2 == primaryColor.green) {
                color3 = tertiaryColor.greenishBlue;
            } else if (color2 == tertiaryColor.purple) {
                color3 = tertiaryColor.blueishPurple;
            } else {
                color3 = "No es posible combinar"
            }
        } else if (color1 == primaryColor.red) {
            if (color2 == primaryColor.yellow) {
                color3 = secondaryColor.orange;
            } else if (color2 == primaryColor.blue) {
                color3 = secondaryColor.purple;
            } else if (color2 == secondaryColor.orange) {
                color3 = tertiaryColor.orangedRed;
            } else if (color2 == secondaryColor.purple) {
                color3 = tertiaryColor.reddishPurple;
            } else {
                color3 = "No es posible combinar"
            }
        }
    }
    //document.write("El color resultante es " + color3)
    let trueColor3 = []
    trueColor3 = isColor(color3)
    result.innerHTML = "El color resultante es " + trueColor3.name + "<img src=" + trueColor3.imagen.src + " >" + "<hr />"
    console.log(color3)
}


let primaryColor = {
    yellow: "yellow",
    blue: "blue",
    red: "red"
}

let secondaryColor = {
    green: "green",
    orange: "orange",
    purple: "purple"
}

let tertiaryColor = {
    greenishYellow: "greenishYellow",
    orangedYellow: "orangedYellow",
    orangedRed: "orangedRed",
    reddishPurple: "reddishPurple",
    greenishBlue: "greenishBlue",
    blueishPurple: "blueishPurple"
}

function isColor(param) {
    
    if (param == primaryColor.yellow) {
        let final = final.push(new viewColors(param, "amarillo"));
        return final
    }
    else if (param == primaryColor.blue)
        return "azul"
    else if (param == primaryColor.red)
        return "rojo"
    else if (param == secondaryColor.green)
        return "verde"
}

var imaColors = [];

imaColors["yellow"] = "colors/yellow.png";


class viewColors {
    constructor(c, n) {

        this.color = c;
        this.name = n;
    }
}