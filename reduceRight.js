// It executes a provided function for each value from right to left and reduces the array to a single value.

let number = [1,2,3,4,5,6,7,8]
let result = number.reduceRight((total, num) => total + num + 0)
console.log(result);

// OUTPUT
// 36