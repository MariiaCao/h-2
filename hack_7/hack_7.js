/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * modificar a mayúscula el primer caracter de cada item string del array
 *  
 * 
 * output => ["Foo","Bar","Baz","Qux","Echo"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = arr.map((palabra, index) => {
    return palabra[0].toUpperCase() + palabra.substring(1);
});
//export result
module.exports = result;