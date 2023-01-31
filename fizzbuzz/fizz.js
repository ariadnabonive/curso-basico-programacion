let numeros = 100;

for(var i=1; i<=100 ;i++) {
    //es divisible entre 3
    if(esDivisible(i,3)){
        document.write("Fizz"); 
    }
    //es divisible entre 5
    if(esDivisible(i,5)){
        document.write("Buzz");
    }
    //no es divisible entre 3 ni entre 5 
    if(!esDivisible(i,3) && !esDivisible(i,5)){
        document.write(i);
    }
    document.write("<br>");
}

//funcion para determinar si el número es divisible
function esDivisible(numero,divisor){
    if(numero % divisor == 0){
        return true;
    }
    else{
        return false;
    }
}

