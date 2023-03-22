// Trabajando con var

// Inicializar una variable con un valor
var producto = "Monitor 24 pulgadas";
console.log(producto);

// Las variables se pueden reasignar
producto = "Monitor 32 pulgadas";
console.log(producto);

// JavaScript es un lenguaje de tipo dinamico, no se especifica el tipo de dato
producto = 32;
console.log(producto);

// Se pueden inicializar sin valor y asignarlo despues
var disponible;
disponible = true;
console.log(disponible);
var disponible = false;
console.log(disponible);
// Inicializar multiples variables
var categoria = "Computadoras",
    marca = "ASUS",
    calificacion = 10;

// Para nombrar variables no deben iniciar con numeros
// var 30dias = 30; <- Esto es incorrecto


// Estilos para escribir nombres de variables: 
// CamelCase -> La mas utilizada
var nombreProducto;