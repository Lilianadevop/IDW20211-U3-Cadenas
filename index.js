let cadena = require("./cadena");

let frase = "anita lava la tina"

let p = cadena.palindromo(frase);
let np = cadena.npalabras(frase);
let ls = cadena.letras(frase);
let vs = cadena.vocales(frase);
let cs = cadena.consonantes(frase);

console.log("La Frase es palindromo? "+p);
console.log("El numero de palabras es: "+np);
console.log("El numero de letras es: "+ls);
console.log("El numero de vocales es: "+vs);
console.log("El numero de consonantes es: "+cs);
