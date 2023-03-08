function  cambio(num1, num2) {
    let a = num1;
    let b = num2; 
 console.log(`variable a: ${a}, variable b:  ${b}`);
 a = num2;
 b =  num1;
 console.log(`variable a: ${a}, variable b:  ${b}`);
}
cambio(5, 7 );
