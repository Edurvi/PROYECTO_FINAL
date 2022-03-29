"use strict";
let n1 = 100;
let n2 = 20;
let msg = "la respuesta es: ";
const suma = (num1, num2) => {
    let resp = num1 + num2;
    console.log(msg);
    console.log(`${num1}+${num2}=${resp}`);
};
suma(n1, n2);
