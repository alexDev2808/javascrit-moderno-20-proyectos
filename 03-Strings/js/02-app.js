// Metodos de Strings

const tweet = "Este es mi tweet en mi tweet para Twitter y para el mundo.";

console.log(tweet);
// length es una propiedad de los strings
console.log(tweet.length); // Conocer la longitud del String

// Indica el indice donde encontro la primera coincidencia
// Si no encuentra nada regresa -1
console.log(tweet.indexOf('tweet')); 

// Devuelve true o false si lo encuentra o no 
// includes comprueba tanto minusculas como mayusculas
console.log(tweet.includes('Twitter')); //true
console.log(tweet.includes('twitter')); //false