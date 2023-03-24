const animalesAcuaticos = ["Ballena", "Tiburon", "Pescado"];

const delfin = {
    nombre: "Delfin",
    habilidad: "Inteligencia"
}

const orca = {
    nombre: "Orca",
    habilidad: "Velocidad"
}

animalesAcuaticos.push("Mantaraya");
animalesAcuaticos.push(delfin);
animalesAcuaticos.unshift(orca);

console.log(animalesAcuaticos);
