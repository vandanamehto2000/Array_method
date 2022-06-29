// It creates an iterator object that contains only the keys of the array, then loops through these keys.

let array = [1,3,4,5,6,7,8]
let result = array.keys();

for(let x of result){
    console.log(x);
}