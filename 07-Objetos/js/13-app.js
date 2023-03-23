const usuarioFinal = {
    username: "alexDev2808",
    email: "alexis1230@gmail.com",
    informacion: {
        nombre: "Alexis",
        apellido: "Hernandez",
        edad: 22,
    }
};

// Devuelven un Array con ya sea llaves, valores o pares llave-valor;
console.log( Object.keys( usuarioFinal ) );
console.log( Object.values( usuarioFinal ) );

console.log( Object.entries( usuarioFinal ) );