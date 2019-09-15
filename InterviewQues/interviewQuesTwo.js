//LinkedIn Quizz
//Ques1
// You have written the code shown to log a set of consecutive values, but it instead results the values 5, 5, 5, and5
//being logged ot the console. WHich revised version of the code would result in the valued 1,2,3 and 4 being logged?

// for(var i=1; i<=4; i++){
//     setTimeout(function(){
//         console.log(i);
//     },i*1000);
// }

//Solution
// for(var i=1; i<=4; i++){
//     var j=1;
//     setTimeout(function(){
//         console.log(j++);
//     },i*1000);
// }

//Ques2

// How does forEach statement different from for statement?
// * Only a forEach statement is generic, but a for statement can be used only with an array.
// * Only a forEach statement lets you specific your own iterator.
// * A for statement is generic, but a forEach statement can be used only with an array.
// * Only a for statement uses a callback function.

//Ques3

//How does a function creates closure?
//It reloads document whenever the function changes
//It completes execution without returning
//It returns a reference to a variable to its parent scope
//It copies a local variable to the global scope

//Answer: It reloads document whenever the function changes

//Ques 4
//Select all img elements in a DOM tree.image
// Document.queryselectorAll('<img>');
// document.queryselectorAll('<img>')
// Document.queryselector('img');
// document.queryselectorAll('img')

//Answer : document.queryselectorAll('img')

//Ques 5
//How would you reference the text 'Avenue' in the code shown?
let roadTypes = ['roads', 'street', 'Avenue', 'circle'];
//roadTypes.2
//roadTypes[2]
//roadTypes[3]
//roadTypes.3
console.log(roadTypes[2]);

//Ques 6
// How do you declare a variable?
//let variable = 2;
//variable = 2;
//var 2 = variable;
//Answer: variable = 2;
// console.log(variable);
