// It calls the specified function for every array element and returns the new array


const number = [1,2,3,5,88,23,6]
const newArr = number.map(myFunction);

function myFunction(number){
    return number * 10;
}

console.log(newArr)

let array = [1,3,4,6,9,2]
let result = array.map(num => num +1)
console.log(result);

