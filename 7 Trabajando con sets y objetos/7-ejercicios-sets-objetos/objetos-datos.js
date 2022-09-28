const datosPersonales = {
    nombre: "Ernesto",
    apellido: "Gregori",
    edad: 26,
    altura: 1.79,
    isDeveloper: true
};

const miEdad = "edad";
console.log(datosPersonales[miEdad])

const datos = [
    {...datosPersonales},

    {nombre: "William",
    apellido: "Guevara",
    edad: 24,
    altura: 1.68,
    isDeveloper: false},

    {nombre: "Dany",
    apellido: "Lemus",
    edad: 28,
    altura: 1.70,
    isDeveloper: true}
];

const nuevosDatos = datos.sort((a, b) => b.edad - a.edad);
console.log(nuevosDatos)