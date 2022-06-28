const ages = [1,3,5,7,9,2, 22]
const result = ages.some(myFunc);
console.log(result);

function myFunc(ages){
    return ages > 18;
}