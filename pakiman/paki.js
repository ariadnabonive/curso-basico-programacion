//Arrays con valores asociativos en JavaScript
var imagenes = [];
imagenes["Cauchin"] = "./vaca.png";
imagenes["Pokacho"] = "./pollo.png";
imagenes["Tocinauro"] = "./cerdo.png";

// Creamos instancias del objeto declarado en pakiman.js y las almacenamos en variables
// var cauchin = new Pakiman("Cauchin", 100, 30);
// var pokacho = new Pakiman("Pokacho", 80, 50);
// var tocinauro = new Pakiman("Tocinauro", 120, 40);

// Invocamos la funcion mostrar para cada instancia
// pokacho.mostrar();
// cauchin.mostrar();
// tocinauro.mostrar();

//Acortamos el código de la siguiente manera:

var coleccion =[];
coleccion.push(new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman("Pokacho", 100, 30));
coleccion.push(new Pakiman("Tocinauro", 100, 30));

//Este for recorre todos los elementos del array coleccion y los almacena en
//la variable pakis(puede ser cualquier nombre
for (var pakis of coleccion){
    pakis.mostrar();
}