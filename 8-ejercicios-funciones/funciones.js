function isTrue() {
    return true;
}

function asinc() {
    return setTimeout(() => {
        console.log("Hola soy una promesa")
    }, 5000);
}

function* idPar() {
    let id = 0;
    while(true) {
        yield id +=2
    }
}

const genPar = idPar();