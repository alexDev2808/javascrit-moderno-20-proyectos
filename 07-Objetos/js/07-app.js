const producto6 = {
    nombreProducto: "Monitor de 42 pulgadas",
    precio: 300,
    disponible: true,
}


console.log(producto6);

// Los objetos si se pueden reasignar, ya que se trabaja de manera diferente con la memoria

producto6.disponible = false;

delete producto6.disponible;

console.log(producto6);