const number = [1,2,3,5,88,23,6]
const newArr = number.map(myFunction);

function myFunction(number){
    return number * 10;
}

console.log(newArr)