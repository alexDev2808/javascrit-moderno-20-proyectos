const producto4 = {
    nombreProducto: "Monitor de 58 pulgadas",
    precio: 300,
    disponible: true,
    info: {
        peso: 2.9,
        unidad: "kg",
        medidas: {
            largo: "2.4mts",
            ancho: "1.20mts"
        },
        fabricacion: {
            pais: "Taiwan",
            año: "2019"
        }
    }
};

console.log(producto4.info);
console.log(producto4.info.peso);
console.log(producto4.info.medidas);
console.log(producto4.info.medidas.largo);

