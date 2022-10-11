const alert = document.querySelector("#btn-alert");

alert.addEventListener("click", () => {
    alert("click en el boton")
})

$(() => {

    $("#btn-jquery").click(() => {
        console.log("Hola estoy utilizando jQuery")
    })
})