"use strict"

const usuario = {
    username: "alexDev2808",
    email: "alexis1230@gmail.com",
    informacion: {
        nombre: "Alexis",
        apellido: "Hernandez",
        edad: 22,
    }
};

// Object Methods

// Prevenir que un objeto sea modificado

Object.freeze( usuario ); // El objeto se "congela"

// Estas modificaciones son incorrectas
// usuario.username = "alexis1230"; username es solo lectura
// usuario.imagen = "imagen.jpg"; usuario no es extensible
// delete usuario.informacion; no es configurable, no se puede borrar

console.log(usuario);

console.log(Object.isFrozen(usuario)); //Saber si un objeto esta "congelado"

// Con esto se previene la mutabilidad, para hacer cambios podemos copiar el ojeto