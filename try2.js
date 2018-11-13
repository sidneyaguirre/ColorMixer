var PNG = require('pngjs');
var imagenes = [];

imagenes["5"] = "billete5.png";
imagenes["10"] = "billete10.png";
imagenes["20"] = "billete20.png";
imagenes["50"] = "billete50.png";
imagenes["100"] = "billete100.png";

class Billete {
  constructor(v, c) {

    this.valor = v;
    this.cantidad = c;

    this.imagen = new PNG(file);
    this.imagen.src = imagenes[this.valor];
  }
}

let bi = 5
var mostrado = [];
mostrado.push (new Billete(bi, 1) );
console.log(mostrado);
