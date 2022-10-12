const nombre = "Neto";
const apellido = "Gregori";

const nombreCompleto = {
    nombre: nombre,
    apellido: apellido
}

//sessionStorage.setItem("Nombre Completo", JSON.stringify(nombreCompleto));
//localStorage.setItem("Nombre Completo", JSON.stringify(nombreCompleto));

const date = new Date();
date.setTime(date.getTime() + (120 * 1000))
//document.cookie = `NombreCompletoCookie=${JSON.stringify(nombreCompleto)}; expires=${date}`
