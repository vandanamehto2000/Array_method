// It creates a new array carrying sub-array elements concatenated recursively till the specified depth.

const arr2 = [0, 1, 2, [[[3, 4]]]];
console.log(arr2.flat(2));
[ 0, 1, 2, [ 3, 4 ] ]

// output
// [ 0, 1, 2, [ 3, 4 ] ]

