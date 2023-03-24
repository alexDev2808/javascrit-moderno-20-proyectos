const animales = ['Abeja', 'Burro', 'Cochino', "Delfin"];

// Los arreglos no se pueden "congelar" 
animales[1] = "Ballena";

// Se crean espacios (undefined) en blanco si no hay elementos antes
animales[6] = "Foca";

for(let i = 0; i < animales.length; i++) {
    console.log(animales[i]);
}