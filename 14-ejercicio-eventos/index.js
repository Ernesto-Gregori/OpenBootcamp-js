const alert = document.querySelector("#btn-alert");

alert.addEventListener("click", () => {
    console.log("Click en el boton")
})

$(() => {

    $("#btn-jquery").click(() => {
        console.log("Hola estoy utilizando jQuery")
    })
})