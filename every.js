// The every() method executes a function for each array element.

// The every() method returns true if the function returns true for all elements.

// The every() method returns false if the function returns false for one element.

// The every() method does not execute the function for empty elements.

// The every() method does not change the original array




const age = [1,2,4,6,12]

// console.log(age.every(checkAge))

function checkAge(age){
    return age < 18;
}
console.log(age.every(checkAge))


// console.log(checkAge());/
