const listaCompras = ["Arroz", "Carne", "Zanahoria", "Sal", "Vino"];

listaCompras.splice(listaCompras.length + 1, 0, "Aceite de Girasol");
console.log(listaCompras);

listaCompras.splice(listaCompras.length - 1, 1);
console.log(listaCompras);


const peliculasFavoritas = [
    {titulo: "The Intern", director: "Nancy Meyers", fecha: new Date(2015, 10, 1)},
    {titulo: "Spider-Man", director: "Sam Raimi", fecha: new Date(2002, 5, 3)},
    {titulo: "The Greatest Showman", director: "Michael Gracey", fecha: new Date(2017, 12, 20)}
];

const fecha = peliculasFavoritas.filter(pelicula => pelicula.fecha > new Date(2001, 1, 1));
console.log(fecha);

const directores = peliculasFavoritas.map(pelicula => pelicula.director);
console.log(directores);

const titulos = peliculasFavoritas.map(pelicula => pelicula.titulo);
console.log(titulos);

const concat_directores_titulos = directores.concat(titulos);
const prop_directores_titulos = [...directores, ...titulos];