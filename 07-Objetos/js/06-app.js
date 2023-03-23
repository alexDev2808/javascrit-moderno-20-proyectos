const producto5 = {
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

const { info: { fabricacion: { pais: paisOrigen } }, info: { peso }, info } = producto5;

console.log(paisOrigen);
console.log(peso);
console.log(info);