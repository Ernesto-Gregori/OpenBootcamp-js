const parrafos = document.querySelectorAll(".parrafo");
const secciones = document.querySelectorAll(".section")
const papelera = document.querySelector(".img-eliminar")

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", e => {
        parrafo.classList.add("dragging");
        e.dataTransfer.setData("id", parrafo.id);
        const elemento_fantasma = document.querySelector(".imagen-fantasma")
        e.dataTransfer.setDragImage(elemento_fantasma, 0, 0);
    })

    parrafo.addEventListener("dragend", () => {
        parrafo.classList.remove("dragging");

    })
})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", e => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "copy" //copy por defecto
    })
    seccion.addEventListener("drop" , e => {
        const id_parrafo = e.dataTransfer.getData("id");
        //console.log(`parrafo id: ${id_parrafo}`)
        const parrafo = document.getElementById(id_parrafo);
        seccion.appendChild(parrafo)


    })
})

papelera.addEventListener("dragover", e => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "copy"
});

papelera.addEventListener("drop", e => {
    const eliminar_id = e.dataTransfer.getData("id");
    document.getElementById(eliminar_id).remove();
})