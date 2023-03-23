const usuario4 = {
    username: "alexDev2808",
    email: "alexis1230@gmail.com",
    informacion: {
        nombre: "Alexis",
        apellido: "Hernandez",
        edad: 22,
    },
    mostrarInfo: function(){
        // this hace referencia al objeto en el que se llamo
        console.log(`El nombre del usuario ${this.username} es: ${this.informacion.nombre}`);
    }
};

const usuario5 = {
    username: "alexis1230",
    email: "alexis1230@gmail.com",
    informacion: {
        nombre: "Jesus",
        apellido: "Hernandez",
        edad: 22,
    },
    mostrarInfo: function(){
        // this hace referencia al objeto en el que se llamo
        console.log(`El nombre del usuario ${this.username} es: ${this.informacion.nombre}`);
    }
};

usuario4.mostrarInfo();
usuario5.mostrarInfo();

