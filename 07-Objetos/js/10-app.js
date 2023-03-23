// Copiar objetos

const usuario3 = {
    username: "alexDev2808",
    email: "alexis1230@gmail.com",
    informacion: {
        nombre: "Alexis",
        apellido: "Hernandez",
        edad: 22,
    }
};

const estufa = {
    color: "Blanco",
    electrica: true,
    medidas: {
        ancho: "90cm",
        alto: "1.20mts"
    }
};

const copia1 = Object.assign(usuario3, estufa);
console.log(copia1);

// Spread operator / operador de propagacion
const copia2 = { ...usuario3, ...estufa };
console.log(copia2);
