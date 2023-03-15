/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * 1) anexar al array result los items [bar,baz,qux]
 * 2) los 2 primeros items reescribir el caracter "a" por @
 * modificar el último item "quz" a mayúscula
 *  
 * 
 * output => ["b@r","b@z","QUX"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
var filtrarPalabras = (palabra) => {
    return palabra == 'bar' || palabra == 'baz' || palabra == 'qux';
}

var alterarPalabras = (palabra) => {
    if (palabra == 'bar' || palabra == 'baz')  palabra = palabra.replace('a','@');
    if (palabra == 'qux') palabra = palabra.toUpperCase();
    return palabra
}

let result = arr.filter(filtrarPalabras).map(alterarPalabras);
//export result
module.exports = result;