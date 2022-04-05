const fs = require('fs');

const datos = fs.readFileSync("./personas.json", "utf8");

let array = JSON.parse(datos);

const personas = {

    buscarObjetoPorNombre : function (nombre){
        let resultado = array.find((objeto) => {
            return objeto.nombre === nombre;
        });

        return resultado;
     }
    // // registrarPersona : function (datos){

    // // }, 
    // // modificarPersona : function (datos) {
        
    // // },
    // // eliminarPersona : function (padatosrams) {
        
    // // }

};

 

module.exports = personas;