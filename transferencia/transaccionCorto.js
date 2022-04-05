let bancoCliente = "Galicia";
let cuentaClienteVerificada = true;
let saldoCliente = 2000000;
let bancoDestino = "Santander";
let cuentaDestinoVerificada = true;
let hora = 10;
//let montoTransf = process.argv[2];
let montoTransf = 1000;
let costoTransaccion = 0;

if(bancoCliente == bancoDestino){
transaccion = 0;
}
else{
transaccion = 100;
}

if( (cuentaClienteVerificada && cuentaDestinoVerificada) && ( (hora >= 9 && hora <=12) || (hora >= 15 && hora <= 20) ) && (saldoCliente > montoTransf + costoTransaccion) )
{

console.log("Transferiste "+ montoTransf +"$ + costo de transaccion $"+ transaccion);
}
else
{
console.log("No se pudo realizar la transacción.");
}