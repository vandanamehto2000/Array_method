// It returns the value of the first element in the given array that satisfies the specified condition.


const age = [3, 10, 18, 22, 20, 25]
function checkAge(age){
    return age > 18;
}

function myFunction(){
    console.log(age.find(checkAge));
}
myFunction();


let number = [3,6,4,8,9,23]
let result = number.find(num => num > 8);
console.log(result);

