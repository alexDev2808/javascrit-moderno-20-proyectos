// Metodos para eliminar espacios en blanco

const cadena = "      Hola Desde Visual Studio Code     "

console.log(cadena);
console.log(cadena.length);

//Eliminar del inicio 

console.log(cadena.trimStart());
console.log(cadena.trimEnd());

// Colocar un metodo seguido de otro
console.log(cadena.trimStart().trimEnd());

// Elimina espacios de ambos lados
console.log(cadena.trim());
