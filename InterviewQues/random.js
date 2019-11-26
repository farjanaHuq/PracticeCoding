//Arrow function with map, filter and reduce
var arr = ['apple', 'raspberry', 'blackberry', 'Orange', 5];
//ES5
var mapArr = arr.map(function(item){
    return item;
});
console.log(mapArr);

//ES6
var mapArr1 = arr.map(item =>  item);
console.log(mapArr1);

//Array and object destructing
//ES5
var person = {
    name: 'Mary',
    email: 'mary@gmail.com',
    age: 32
}

var pName = person.name;
var pEmail = person.email;
var pAge = person.age;

console.log(pName, pEmail,pAge);

//ES6
var contact = {
    name: 'Marien',
    email: 'marien@gmail.com',
    age: 32
}

let {name, email, age}=contact;
//if we want to change the name of the key
let {name:herName}=contact;

console.log(name, email, age);
console.log(herName);