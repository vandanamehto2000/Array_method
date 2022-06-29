// It returns the new array containing the elements that pass the provided function conditions.


const ages = [1,,23,45,13,48,23]
console.log(ages.filter(checkAge))

function checkAge(age){
    return age < 18
}

// console.log(checkAge());

let array = [1,2,3,4,5,6,8]
let filter = array.filter(num => num > 5);
console.log(filter);