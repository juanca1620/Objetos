const objeto =  { 183344: "habilitado", 354625: "habilitado", 6762442:
    "inhabilitado", 88552: "inhabilitado", 438276: "habilitado" }

    let i = 0;
for (const clave in objeto) {
    if (objeto[clave] === "habilitado") {
        i++;
    }
}

console.log(i)