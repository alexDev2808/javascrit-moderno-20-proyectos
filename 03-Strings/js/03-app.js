// Concatenar strings

const nombreLaptop = "AsusVivoBook";
const precio = "10,999";
const moneda = "MXN";

console.log(nombreLaptop.concat(precio));
console.log(nombreLaptop.concat(" En Descuento!!"));

const titulo = nombreLaptop + " con un precio de: " + precio + moneda;
console.log(titulo);

console.log("El producto: ", nombreLaptop , " con un precio de: " , precio, moneda);

// Template literals

const tituloAnuncio = `El producto ${nombreLaptop} tiene un precio de ${precio}${moneda}

Aprovecha el Descuento!!!!!

`;

console.log(tituloAnuncio);
