class Estudiante {
    constructor(nombre, [asignatura1, asignatura2, asignatura3]) {
        this.nombre = nombre
        this.asignatura = [asignatura1, asignatura2, asignatura3]
    }

    getDatos() {
        return {
            nombre: this.nombre,
            asignatura: this.asignatura
        }
    }
}

const nuevo_estudiante = new Estudiante("Ernesto", ["JavaScript", "HTML", "CSS"]);
console.log(nuevo_estudiante.getDatos());