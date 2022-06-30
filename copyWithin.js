// It copies the part of the given array with its own elements and returns the modified array.


const name = ["vandana", "rahul", "pinky", "monu", "praveen", "nikita"]
let result = name.copyWithin(1,2);
console.log(result);

// output
// [ 'vandana', 'pinky', 'monu', 'praveen', 'nikita', 'nikita' ]

