const producto1 = {
    nombreProducto: "Monitor de 42 pulgadas",
    precio: 300,
    disponible: true,
}


console.log(producto1);

// Sintaxis de punto para acceder a los valores de sus propiedades
console.log(producto1.nombreProducto);

// Sintaxis de corchetes, puede recibir una variable para acceder a las propiedades disponibles
const propiedadRecibida = "precio"

console.log(producto1[propiedadRecibida]);