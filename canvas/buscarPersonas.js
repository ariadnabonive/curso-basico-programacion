const moduloPersonas = require('./modulos/personas');
 
function buscarObjetoPorNombre(nombre) {

    let objetoEncontrado = moduloPersonas.buscarObjetoPorNombre(nombre);
     
    if ( objetoEncontrado != undefined) {
        console.log("Usuario " + nombre + " encontrado")
    }else{
        console.log("Usuario " + nombre+ " No encontrado");
    }
}

buscarObjetoPorNombre(process.argv[2]);
