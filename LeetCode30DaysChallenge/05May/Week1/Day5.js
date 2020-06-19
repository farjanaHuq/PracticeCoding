//Problem: First Unique Character in a String
//Link:https://leetcode.com/explore/featured/card/may-leetcoding-challenge/534/week-1-may-1st-may-7th/3320/

// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode",
// return 2.
// Note: You may assume the string contain only lowercase letters.


/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
   var charObj = {};
   for(let char of s){
       if(!charObj[char]){
           charObj[char]=1;
       }else{
           charObj[char]++;
       }
    }
    for(let char in charObj){
        if(charObj[char]===1){
            return (s.indexOf(char));
        }
    }
    return -1;
};

console.log(firstUniqChar('loveleetcode'));