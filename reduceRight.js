// The reduceRight() method executes a reducer function for each array element.

// The reduceRight() method works from right to left.

// The reduceRight() method returns a single value: the function's accumulated result.

// The reduceRight() method does not execute the function for empty elements.





const number = [1,3,6,2,9,8,5];
const result = number.reduceRight(myFunc);
console.log(result);

function myFunc(total, num){
    return total - num
}