//You tube : https://www.youtube.com/watch?v=mhZWi9tSy44
//Q1: explain event delegation
//ANs: JS listeners fires not only to a single DOM elements but also to its descendants(child)

//Q2: Describe event bubbling
//Ans: Inverse of this. Also known as propagation, when you click on a child element, it 'bubbles up' and 
//fires on to the parents

//Q3: What is scope?
//Ans: A variable that is accesseble everywhere, called global scope. A Variable that is accesseble
//in a particular place called local scope.

//Q4: What is hoisting? 
//Ans: Hoisting is a javascript default behaviour of moving variable and function decalaration to the top.
//Example: console.log(x)  //Error
// var x; console.log(x) // Undefined

//Function declaration
// hoistedFunctionDecalaration(); //true
//This function is hoisted
//function hoistedFunctionDeclaration(){
   // return true;}

   //unhoistedFunctionDeclaration(); //Error
   //This function is not hoisted
   //var unhoistedFunctionDeclaration = function(){
     //  return true;}
   

//Q5. What is closure?
//Closure is basically an inner function that has access to the outer, or enclosing function variables.
//Example:
function sayHelloCreator(name){
    var greeting = 'hello';
    function sayHello(){
        console.log(greeting+ " "+ name);
    }
    return sayHello;
}

var sayHelloJohn = sayHelloCreator('John');
var sayHelloMika = sayHelloCreator('Mika');
//We don't need to redefine a function every time a new variable is created
sayHelloJohn(); // hello John
sayHelloMika(); //hello Mika

//Q6. What is functional Programming?
//Functional Programming involves using pure functions that avoid shared states, mutating data
//and side effects. it is declarative rather than imperative.

//Q7.What is the difference between sychronous and asynchronous code?
//Synchronous code is blocking.Must complete before we move on to something else.
//Asynchronous code is not blocking, we can finish other task and come to it after it fineshes excuting.

//Q8: How do you determine the type of an array?

//Q9: What is higher order function?
//A higher order function is a function that takes function as an argument and return that function as a result.
//Example: closure

//Q10: What is the difference between an array and array like object?

//Q11: What is type coercion?
//Javascript sometimes allows something of a particular type to be coerced into another type.
//console.log("Hello"+8) => Hello 8  //Number 8 is coerced to a string
//('9'===9) //true

//Q12:What is the difference between two way data binding and one data binding?
//Two way data binding - UI and modal data change together  //hard to debug
//One wway data binding - Single source of truth, changes to that single source of truth can
//can only flow in one direction. Example: react/redux
