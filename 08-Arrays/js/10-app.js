const utensiliosCocina = [

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

// La diferencia entre map y forEach es que map regresa un nuevo array
// Ademas map sirve transformar los datos en algo mas


const utensiliosDescuento = utensiliosCocina.map(utensilio => utensilio.precio * 0.5 );

console.log(utensiliosDescuento);