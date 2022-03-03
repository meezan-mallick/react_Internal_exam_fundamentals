// Question : Write a function which reverses the string as well as the word.
// Example:
// var xyz= “Hello Guys Hope You Are Doing Good”
// Var new_xyz= “dooG gnioD erA uoY epoH syuG olleH"

function reverseSentence(inputString){
    return inputString.split("").reverse().join("");
}
console.log(reverseSentence("Hello Guys Hope You Are Doing Good"));