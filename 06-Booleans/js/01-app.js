const bool1 = true;
const bool0 = false;
const bool2 = "true";


console.log(typeof bool0);
console.log(bool0 == bool1);

// Aqui trabaja un poco diferente la comparacion ya que da false
console.log(bool1 == bool2);


// Con este tipo de constructor se crea un objeto de tipo Boolean
const bool4 = new Boolean(true);

console.log(typeof bool4);