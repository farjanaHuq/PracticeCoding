//Ques1
//The differene between '==' and '===' operator
//Answer:
// The ‘==’ operator tests for abstract equality i.e. it does the necessary type conversions before doing the equality comparison.
// But the ‘===’ operator tests for strict equality i.e it will not do the type conversion hence if the two values are not of the same type, 
// when compared, it will return false.

console.log(3=='3');
console.log(3 === '3');