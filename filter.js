const ages = [1,,23,45,13,48,23]
console.log(ages.filter(checkAge))

function checkAge(age){
    return age < 18
}

// console.log(checkAge());