class Billete {
    constructor(v,c) 
    {
        this.valor = v;
        this.cantidad = c;  
    }
}

function entregarDinero() {
    let infoInput = document.getElementById("dinero");
    dinero = parseInt(infoInput.value);

    for(let bi of caja) {
        if (dinero > 0) {
            div = Math.floor(dinero / bi.valor);

            if(div > bi.cantidad){
                papeles = bi.cantidad;
            }
            else{
                papeles = div;
            }
            entregado.push(new Billete(bi.valor, papeles));
            dinero = dinero - (bi.valor * papeles);
        }
    }

    if(dinero > 0) {
        resultado.innerHTML = "No dispongo de la cantidad solicitada";
    }
    else {
        for(var e of entregado) {
            if(e.cantidad > 0) {
                resultado.innerHTML += e.cantidad + " billetes de € " + e.valor + "<br/>";
            }             
        }
    }
}  

let caja = [];
let entregado = [];

caja.push(new Billete (100, 20));
caja.push(new Billete (50, 20));
caja.push(new Billete (20, 30));
caja.push(new Billete (10, 10));
caja.push(new Billete (5, 10));

let dinero = 0;
let div = 0;
let papeles = 0;

let resultado = document.getElementById("resultado");
let b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);
