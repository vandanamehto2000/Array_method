// It determines if any element of the array passes the test of the implemented function.

const ages = [1,3,5,7,9,2, 22]
const result = ages.some(myFunc);
console.log(result);

function myFunc(ages){
    return ages > 18;
}


let array = [1,2,3,4,5,6,7]
let result1 = array.some(num => num > 5);
console.log(result1);