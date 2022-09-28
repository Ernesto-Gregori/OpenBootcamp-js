const familia = [
    "Lucia", 
    "Amanda", 
    "Pablo", 
    "Emilia", 
    "Rodrigo", 
    "Diana", 
    "Ernesto"
];

const miFamilia = new Set(familia);

miFamilia.add("Ernesto");
miFamilia.add("JavaScript");

console.log(miFamilia);