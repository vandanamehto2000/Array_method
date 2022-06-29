// It returns a new array object that contains two or more merged arrays.

let array = [1,2,3,4]
let array1 = [5,6,7,8]
let array3 = [12,45,23]
let newArray = array.concat(array1, array3);
console.log(newArray);


// output
// [
//     1, 2, 3,  4,  5,
//     6, 7, 8, 12, 45,
//    23
//  ]