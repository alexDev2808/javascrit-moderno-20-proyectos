const num1 = 20;
const num2 = "20";
const num3 = 30;

// Comprueba el valor, convierte implicitamente a string
console.log(num1 == num2);

// Comprueba el valor y el tipo de dato
console.log(num1 === num2);
console.log(num1 === parseInt(num2));

console.log(typeof num1);
console.log(typeof num2);

const password1 = "admin";
const password2 = "Admin";

console.log(password1 != password2);
console.log(password1 !== password2);
console.log(password1 !== parseInt(num2));
