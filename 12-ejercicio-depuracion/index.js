function fibonacci(num) {
    let a0 = 0;
    let a1 = 1;

    const lista = [];

    for (let i = 1; i <= num; i++) {
        lista.push(i);
    }

    let secuencia = [];

    lista.forEach(() => {
        let fib = a0 + a1;
        a0 = a1
        a1 = fib
        secuencia = [...secuencia, a0]
    });

    return secuencia;
}

const secuencia = fibonacci(6);
console.log(secuencia); 