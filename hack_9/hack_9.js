/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * contar el total de items que inicien con el caracter "b"
 *  
 * 
 * output => 2   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = 0;
result = arr.reduce((previousValue, currentValue) => {
    return (currentValue[0] == 'b') ? previousValue+=1 : previousValue;
}, 0)

//export result
module.exports = result;