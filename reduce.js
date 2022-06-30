// It executes a provided function for each value from left to right and reduces the array to a single value.

let number = [1,2,3,5,4,7,9]
let sum = number.reduce((total, num) => total + num + 0)
console.log(sum);

// output
// 31