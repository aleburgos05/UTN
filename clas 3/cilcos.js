 var numero =5;
arrayImpares=[1,3,5,7,9];
for (var i =0; i <= numero; i++) {
  
    console.log("valor de la variable de iteracion", i);
    console.log("el valor de la posicion en el array", arrayImpares[i]);// muestra el numero de orden con [i]

};

//for in sirve para recorrre array
for (numeroDeOrden in arrayImpares) {
   console.log(arrayImpares[numeroDeOrden]);
  
}

//while (Miestras)cierta condicion es verdadera 

var sumador = 0;
var numeroDeControl =8;
while (sumador <=8) {
    //sumador =sumador +1
    sumador++;
    console.log(sumador);
}

var esValorSiete = false;
var sumador =0; 
var comparacion= 7;

 while (esValorSiete == false) {// otra forma !esValor
    sumador ++; 
    if (comparacion == sumador) {
        esValorSiete = true;

    }else {
        console.log(" es distinto");
    }
 }

 //ciclo do .. while // se ejucuta una vez al menos / primero hace luego pregunta 
do {

}while (condition) {
    
}