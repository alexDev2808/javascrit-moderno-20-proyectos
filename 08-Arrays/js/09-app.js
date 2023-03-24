const utensilios = [

    {
        nombre: "Cacerola", 
        precio: 450,
        color: "Blanco"
    },
    {
        nombre: "Sarten", 
        precio: 550,
        color: "Blanco"
    },
    {
        nombre: "Olla", 
        precio: 850,
        color: "Blanco"
    },
    {
        nombre: "Licuadora", 
        precio: 350,
        color: "Blanco"
    },

];

// for(let i = 0; i < utensilios.length; i++) {
//     console.log(`${utensilios[i].nombre}: $${utensilios[i].precio}`);
// }

// Array Method
utensilios.forEach( producto => console.log(`${producto.nombre}: $${producto.precio}`));