const producto2 = {
    nombreProducto: "Monitor de 42 pulgadas",
    precio: 300,
    disponible: true,
}

// Agregar nuevas propiedades

producto2.imagen = "imagen.jpg";
producto2["stock"] = 100;

// Reasignar 

producto2.nombreProducto = "Monitor 55 pulgadas";

// Eliminar

delete producto2.disponible;

console.log(producto2);