// It returns the index value of the first element in the given array that satisfies the specified condition.


const ages = [93,3, 10,29, 18, 20];

console.log(ages.findIndex(checkAge));

function checkAge(age) {
  return age > 18;
}

let array = [1, 10,3,5,7,8,9, 3]
let result = (Element) => Element > 7;
console.log(array.findIndex(result));

