// Siguiendo con metodos

const so = "Fedora Workstation 37";

// Reemplazar .replace() => no modifica el string original
console.log(so);
console.log(so.replace('37', "39 Prerelease"));
console.log(so.replace('Workstation', "WorkStation Pro"));

// Cortar/Rebanar => no modifica el string original
console.log(so.slice(0, 10));
console.log(so.slice(10));
console.log(so.slice(2, 1)); // No hace nada porque el indice de inicio es mayor

console.log(so);

// Alternativa para slice

console.log(so.substring(0, 10));
console.log("Substring: ", so.substring(2, 1)); // Intercambia los valores quedando asi(1,2)


const linux = "Linux Fedora 37";
console.log(linux.substring(0,2));
console.log(linux.charAt(4));
console.log(linux);