const producto3 = {
    nombreProducto: "Monitor de 58 pulgadas",
    precio: 300,
    disponible: true,
}

const nombre = producto3.nombreProducto;
console.log(nombre);

// Desestructuracion (sacar de una estructura)
// Los nombres de las propiedades a extraer van dentro de llaves, que a su vez se convierten en variables
// Si se quiere cambiar el nombre debe tener el nombrePropiedad : nuevoNombre
// Si una propiedad no existe, es undefined
const { nombreProducto : nombreProductoFinal , precio: precioProducto, noExiste } = producto3;

console.log(nombreProductoFinal);
console.log(precioProducto);
console.log(noExiste);