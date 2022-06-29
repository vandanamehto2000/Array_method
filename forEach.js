// It invokes the provided function once for each element of an array.

const color = ["blue", "red", "pink", "green"]
function result(item){
    console.log(item);
}

color.forEach(result);

const name = ["sahil", "vivek", "vishal", "rahit"]
function varx(item, index){
    console.log(`${index} : ${item}`)
}

name.forEach(varx);

let array = [1,2,3,4,5,6,7,8]
array.forEach(item => {
    console.log(item);
//   console.log(index);
})


