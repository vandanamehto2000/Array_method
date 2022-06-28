const age = [3, 10, 18, 20]
function checkAge(age){
    return age >     18;
}

function myFunction(){
    console.log(age.find(checkAge));
}
myFunction();
