const animalesSalvajes = ["Tigre", "Leon", "Pantera", "Puma"];
const animalesSalvajes2 = ["Oso","Tigre Blanco", "Leon", "Pantera", "Puma"];


let animalesResult = [];

// Spread operator

animalesResult = [...animalesSalvajes, "Chita", ...animalesSalvajes2];

console.log(animalesResult);