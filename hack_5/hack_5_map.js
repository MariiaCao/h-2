/**
 * mediante el loop map agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];

let filterNumbers = (num) => {
    if(num % 2 == 1) result.push(num);
}
[1,2,3,4,5,6,7].reverse().map(filterNumbers);
//export result
module.exports = result;