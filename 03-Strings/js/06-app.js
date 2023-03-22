// .repeat Repetir cadena de texto

const venta = "Laptop Asus";

const texto = "Promocion Solo Por hoy!".repeat(2.4); // Redondea el numero

console.log(texto);
console.log(`El producto: ${venta} esta en: ${texto}`);



// Split, dividir un string y lo devuelve en un array

const actividad = "Aprendiendo JavaScript Moderno!!";

console.log(actividad.split(" "));

const ingredientes = "Tomate, Cebolla, Ajo, Cilantro, Sal, Pollo, Aceite";

const ingredientesArray = ingredientes.split(", ");

console.log(ingredientes);
console.log(ingredientesArray);


const texto2 = "Aprendiendo JavaScript Moderno #NuncaParesDeAprender";

console.log(texto2.split("#"));

