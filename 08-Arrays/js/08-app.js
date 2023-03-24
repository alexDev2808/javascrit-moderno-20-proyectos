const autosDeportivos = ["BMW", "Audi", "Lamborguini", "Ferrari", "McClaren"];

// Una variable con la posicion 2, subindice 1
// Y una varible que contiene un array con los ultimos elementos

const [ , audi, ...ultimos ] = autosDeportivos;

console.log(audi);
console.log(ultimos);