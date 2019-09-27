//Problem 1.2
//Write code to reverse a C-Style String (C-String means that “abcd” is represented as five characters, including the null character )
function reverseString(givenString){
    var reverseString = '';
    for(let elem of givenString){
        reverseString = elem + reverseString;
    }
    return reverseString;
}

var theString = 'hello';

console.log(reverseString(theString));