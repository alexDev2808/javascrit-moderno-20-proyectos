// Objeto literal
const usuario12 = {
    username: "alexDev2808",
    email: "alexis1230@gmail.com",
    informacion: {
        nombre: "Alexis",
        apellido: "Hernandez",
        edad: 22,
    }
};

// Object constructor

function Usuarios (username, email) {
    this.username = username;
    this.email = email;
    this.activo = true;
}

const usuario13 = new Usuarios("martha1230", "martha1230@gmail.com");
console.log(usuario13);

const usuario14 = new Usuarios("fernanda1230", "fernanda1230@gmail.com");
console.log(usuario14);
