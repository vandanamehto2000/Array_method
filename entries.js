// Create an Array Iterator, and then iterate over the key/value pairs:

let name = ["vandana", "rahul", "pinky", "monu"]
let result = name.entries();
for(let x of result){
    console.log(x)
}


let number = [1,2,3,4,6,8,0]
let index = number.entries();
for(let y of index){
    console.log(y);
}
