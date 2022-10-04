const logger= require('./logger');

const suma = (a , b) => {
    if(typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    throw new Error("Los valores deben de ser de tipo numero")
}

const num1 = "25";
const num2 = 30;

try {
    const resultado = suma(num1, num2);
    console.log(resultado)
} catch (e) {
    logger.error(`El error es: ${e}`)
}