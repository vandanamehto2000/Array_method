const ages = [93,3, 10,29, 18, 20];

console.log(ages.findIndex(checkAge));

function checkAge(age) {
  return age > 18;
}