const autosLujo = ["VW","BMW", "Mercedes Benz","Audi", "Bentley", "Toyota"];

// Mutan el array original
// Se elimina el ultimo elemento
autosLujo.pop()
// Se elimina al inicio del arreglo
autosLujo.shift()



// Eliminar desde una posicion especifica
autosLujo.splice(1,1);

console.log(autosLujo);