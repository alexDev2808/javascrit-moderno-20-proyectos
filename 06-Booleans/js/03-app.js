// Recomendacion

const autenticado = false;

if(autenticado){
    console.log("Felicidades puedes entrar");
}else {
    console.log("No puedes entrar");
}

// Operador ternario
const precioProducto = 16;
const precioAccesible = precioProducto < 20;
const respuesta = precioAccesible ? "Puedes comprarlo ya que cuesta menos de 20USD" : "Excede del presupuesto";
console.log(respuesta);