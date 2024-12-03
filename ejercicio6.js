const numeros = { numeros: [45, 78, 22, 89, 8] };

for (const clave in numeros) {
    const arreglo = numeros[clave]
    arreglo.forEach(numero => {
        console.log(numero)
    });
}