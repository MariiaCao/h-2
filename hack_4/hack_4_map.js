/**
 * mediante el map for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];

let filterNumbers = (num) => {
    if(num % 2 == 1) result.push(num);
}

[1,2,3,4,5,6,7].map(filterNumbers);

//export result
module.exports = result;