//Problem: Valid Perfect Square
//Link: https://leetcode.com/explore/challenge/card/may-leetcoding-challenge/535/week-2-may-8th-may-14th/3324/

// Given a positive integer num, write a function which returns True if num is a perfect square else False.

// Note: Do not use any built-in library function such as sqrt.

// Example 1:

// Input: 16
// Output: true
// Example 2:

// Input: 14
// Output: false

/**
 * @param {number} num
 * @return {boolean}
 */

//declare an array of prime numbers [1,2,3,5,7,11];
//break 'num' into the smallest prime number but greater than 1

// var primeNum = [2,3,5,7,11];
// var divisor = [];
// var result ;
// var isPerfectSquare = function(num) {

// };

// function breakTheNumber(num){
//     for(var i=0; i<primeNum.length; i++){
//         if(num/primeNum===1){
//             console.log('Not a perfect square');
//         }
//         if(num%primeNum[i]===0){
//             result = num/primeNum[i];
//             divisor.push(primeNum[i]);
//             breakTheNumber(result);
//         }
//     }
//    return divisor;
// }

// function isEven(divisor){
//     let length = divisor.length;

// }

// console.log(breakTheNumber(16));

var isPerfectSquare = function (num) {
  if (num === 1) return true;
  if (num < 1) return false;

  let left = 1;
  let right = num;

  while (left <= right) {
    let midPoint = left + Math.floor((right - left) / 2);
    if (midPoint * midPoint === num) {
      return true;
    } else if (midPoint * midPoint > num) {
      right = midPoint - 1;
    } else if (midPoint * midPoint < num) {
      left = midPoint + 1;
    }
  }
 return false;
};

console.log(isPerfectSquare(9));
