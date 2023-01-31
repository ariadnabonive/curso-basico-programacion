let bancoCliente = "Galicia";
let cuentaClienteVerificada = true;
let saldoCliente = 2000000;
let bancoDestino = "Santander";
let cuentaDestinoVerificada = true;
let hora = 20;
let montoTransf = 1000000;
let costoTransaccion;

// Costo de transacción
if(bancoCliente == bancoDestino){
    costoTransaccion = 0;
} else{
    costoTransaccion = 100; 
}

// Cliente verificado y Destino verificado
if (cuentaClienteVerificada && cuentaDestinoVerificada){
    // Verificar horario
    if(hora >= 9 && hora <= 12 || hora >= 15 && hora <=20){
        // Verificar fondos suficientes
        if(saldoCliente > (montoTransf + costoTransaccion)){
            console.log("Tu transacción se realizo existosamente.");
        }
        else{
            console.log("No tienes fondos suficientes"); 
        }
    }
    else{
    console.log("En este horario no podemos realizar la transacción.");
    }
}
else{
    console.log("Los datos no han podido ser verificados.");
}




