//Link: https://leetcode.com/explore/featured/card/30-day-leetcoding-challenge/528/week-1/3284/

// Write an algorithm to determine if a number is "happy".
// A happy number is a number defined by the following process: Starting with any positive integer,
// replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1
// (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this
// process ends in 1 are happy numbers.

// Example:

// Input: 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1

//convert the number to string
//split the string
//convert it to number
//keep them in an array
//write a recursion function to calculate square

/**
 * @param {number} n
 * @return {boolean}
 */


var squareSums = [] ;

var findDuplicates = function(squareSums){
  var object = {};
  for(var elem of squareSums){
     if(!object[elem]){
       object[elem]=1;
     }else{
       object[elem]++;
     }
  }
  for(var key in object){
    if(object[key]>1){
      return true;
    }else{
      return false;
    }
  }
}

var isHappy = function(n) {

  var sum = 0;
  let string = n.toString().split('');

  for (let char of string) {
    sum += Math.pow(parseInt(char), 2); 
  }
    squareSums.push(sum);
  
  if (sum === 1) {
    return true;
  }else if(findDuplicates(squareSums)){
      return false;
  }
  else{
    return isHappy(sum);
  }
 
};



console.log(isHappy(2));

console.log(squareSums);
