"use strict"

const usuario2 = {
    username: "alexDev2808",
    email: "alexis1230@gmail.com",
    informacion: {
        nombre: "Alexis",
        apellido: "Hernandez",
        edad: 22,
    }
};

// No se pueden eliminar ni agregar propiedades, pero si se pueden modificar las propiedades
Object.seal(usuario2); // "Sellar el objeto"

usuario2.username = "alexDev28088000";

console.log(usuario2);

