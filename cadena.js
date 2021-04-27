
function palindromo(cadena) {
    const regexp = /[^A-Za-z0-9]/g;
    const cleanedStr = cadena.replace(regexp, '').toLowerCase();
    for(let i = 0; i <= cleanedStr.length/2; i++){
         if(cleanedStr[i] !== cleanedStr[cleanedStr.length-(i+1)]){
            return false;
        }
    }
    return true;
}

function npalabras(cadena) {
    return cadena.split(" ").length;
  }//palabras 
  
function letras(cadena) {
    let n = cadena.length;
    return n;
  }
    
function vocales(cadena) {
    const count = cadena.match(/[aeiou]/gi).length;
    return count;
  }

function consonantes(cadena) {
    const countc = cadena.match(/[bcdfghjklmnñpqrstvwxyz]/gi).length;
    return countc;
  }
    
module.exports.palindromo = palindromo;
module.exports.npalabras = npalabras;
module.exports.letras = letras;
module.exports.vocales = vocales;
module.exports.consonantes = consonantes;
