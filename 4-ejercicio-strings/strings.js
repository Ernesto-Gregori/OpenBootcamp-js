let nombre = "Ernesto";
let apellido = "Gregori";

let estudiante = ` ${nombre} ${apellido} `;
console.log(estudiante);

let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

let cant_letras = estudiante.length;
console.log(cant_letras);

let primer_letra = estudiante.charAt(1);
console.log(primer_letra);

let ultima_letra = estudiante.charAt(15);
console.log(ultima_letra);


let sin_espacio = estudiante.trim();
console.log(sin_espacio.length);

console.log(estudiante.includes("Ernesto"));