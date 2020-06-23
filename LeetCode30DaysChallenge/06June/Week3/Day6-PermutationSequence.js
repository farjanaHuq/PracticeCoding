// Permutation Sequence
// Link: https://leetcode.com/explore/challenge/card/june-leetcoding-challenge/541/week-3-june-15th-june-21st/3366/

const { stat } = require("fs");

// The set [1,2,3,...,n] contains a total of n! unique permutations.
// By listing and labeling all of the permutations in order, we get the following sequence for n = 3:
// "123"
// "132"
// "213"
// "231"
// "312"
// "321"
// Given n and k, return the kth permutation sequence.

// Note:

// Given n will be between 1 and 9 inclusive.
// Given k will be between 1 and n! inclusive.
// Example 1:

// Input: n = 3, k = 3
// Output: "213"
// Example 2:

// Input: n = 4, k = 9
// Output: "2314"

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {

};

var generatePermutation = function(arr, start, end){

       for(let i=0; i<end; i++){
          // console.log(swap(arr, start, i));
       }
}

function swap(newArr, x, y) {

    var t = newArr[x];
    newArr[x] = newArr[y];
    newArr[y] = t;
    return newArr;
}

function perm(xs) {
    let ret = [];
  
    for (let i = 0; i < xs.length; i++) {
      let rest = perm(xs.slice(0, i).concat(xs.slice(i + 1)));
  
      if(!rest.length) {
        ret.push([xs[i]])
      } else {
        for(let j = 0; j < rest.length; j = j + 1) {
          ret.push([xs[i]].concat(rest[j]))
        }
      }
    }
    return ret;
  }
(generatePermutation([1,2,3],0, 3));
//console.log(swap([1,2,3,4], 0,3));

console.log(perm([1,2,3]).join("\n"));