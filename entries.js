// It creates an iterator object and a loop that iterates over each key/value pair.


let name = ["vandana", "rahul", "pinky", "monu"]
let result = name.entries();
for(let x of result){
    console.log(x)
}


let number = [1,3,5,7,8,9,2]
let result1 = number.entries();
for(let y of result1){
    console.log(y);
}


// output
// [ 0, 1 ]
// [ 1, 3 ]
// [ 2, 5 ]
// [ 3, 7 ]
// [ 4, 8 ]
// [ 5, 9 ]
// [ 6, 2 ]
