//Iniciamos con poner un metodo que escucha cuando al boton mexclar es presionado
let b = document.getElementById("mix");
b.addEventListener("click", mixer);

//Funcion que hace la comparacion de colores selecionados en color1 y color2, y retoirna el color resultante
function mixer() {
    let color1 = document.getElementById("color1").value;
    let color2 = document.getElementById("color2").value;
    let color3;
    console.log(color1, color2)
    if((color1=="empty") || (color2 =="empty")){color3="empty"}
    else{
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
                    color3 = "No es posible combinar";
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
                    color3 = "No es posible combinar";
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
                    color3 = "No es posible combinar";
                }
            }
        }
    }
    

    let trueColor3 = isColor(color3);
    //Muestra en el Front end el color resultante con la funcion innerHTML
    if(color3=="No es posible combinar"){
        result.innerHTML = color3
        document.getElementById("resultext").style.visibility = 'hidden'
        document.getElementById("mix").style.visibility = 'hidden'
    }else if(color3=="empty"){
        result.innerHTML = "Por favor seleccione el color"
        document.getElementById("resultext").style.visibility = 'hidden'
        document.getElementById("mixagain").style.visibility = 'hidden'
    }else{
        document.getElementById("mix").style.visibility = 'hidden'
        result.innerHTML = ""
    }
    //TRansforma los caracteres del resultado en tipo JSON para guardar en base de datos
    axios
        .post("http://localhost:8080/savecolor/", { color: color3 }, {})
        .then(data => {
            console.log(data);
        });
}

// los objetos primaryColor, secondaryColor y tertiaryColor contienen los colores respectivos a colores primarios, secundarios y terciarios
let primaryColor = {
    yellow: "yellow",
    blue: "blue",
    red: "red"
};

let secondaryColor = {
    green: "green",
    orange: "orange",
    purple: "purple"
};

let tertiaryColor = {
    greenishYellow: "greenishYellow",
    orangedYellow: "orangedYellow",
    orangedRed: "orangedRed",
    reddishPurple: "reddishPurple",
    greenishBlue: "greenishBlue",
    blueishPurple: "blueishPurple"
};

//FUncion cambia los resultados de ingles a español, y invoca al elemento que muestra la paleta de color resultado
function isColor(param) {
    document.getElementById("resultext").style.visibility = 'visible'
    document.getElementById("mixagain").style.visibility = 'visible'
    document.getElementById("Amarillo").style.visibility = 'hidden'
    document.getElementById("Azul").style.visibility = 'hidden'
    document.getElementById("Rojo").style.visibility = 'hidden'
    document.getElementById("Verde").style.visibility = 'hidden'
    document.getElementById("Naranja").style.visibility = 'hidden'
    document.getElementById("Morado").style.visibility = 'hidden'
    document.getElementById("PurpuraAzulado").style.visibility = 'hidden'
    document.getElementById("AzulVerdoso").style.visibility = 'hidden'
    document.getElementById("AmarilloVerdoso").style.visibility = 'hidden'
    document.getElementById("MoradoRojizo").style.visibility = 'hidden'
    document.getElementById("RojoAnaranjado").style.visibility = 'hidden'
    document.getElementById("AmarilloAnaranjado").style.visibility = 'hidden'
    if (param == primaryColor.yellow){
        document.getElementById("Amarillo").style.visibility = 'visible'
        return "amarillo"    
    }
    else if (param == primaryColor.blue) {
        document.getElementById("Azul").style.visibility = 'visible'
        return "azul"
    }
    else if (param == primaryColor.red) {
        document.getElementById("Rojo").style.visibility = 'visible'
        return "rojo"}
    else if (param == secondaryColor.green) {
        document.getElementById("Verde").style.visibility = 'visible'
        return "verde"}
    else if (param == secondaryColor.orange) {
        document.getElementById("Naranja").style.visibility = 'visible'
        return "Naranja"}
    else if (param == secondaryColor.purple) {
        document.getElementById("Morado").style.visibility = 'visible'
        return "Morado"}
    else if (param == tertiaryColor.blueishPurple) {
        document.getElementById("PurpuraAzulado").style.visibility = 'visible'
        return "Purpura Azulado"}
    else if (param == tertiaryColor.greenishBlue) {
        document.getElementById("AzulVerdoso").style.visibility = 'visible'
        return "Azul Verdoso"}
    else if (param == tertiaryColor.greenishYellow) {
        document.getElementById("AmarilloVerdoso").style.visibility = 'visible'
        return "Amarillo Verdoso"}
    else if (param == tertiaryColor.reddishPurple) {
        document.getElementById("MoradoRojizo").style.visibility = 'visible'
        return "Morado rojizo"}
    else if (param == tertiaryColor.orangedRed) {
        document.getElementById("RojoAnaranjado").style.visibility = 'visible'
        return "Rojo anaranjado"}
    else if (param == tertiaryColor.orangedYellow) {
        document.getElementById("AmarilloAnaranjado").style.visibility = 'visible'
        return "Amarillo anaranjado"}
    else if (param == "No es posible combinar") return "No es posible combinar"
}