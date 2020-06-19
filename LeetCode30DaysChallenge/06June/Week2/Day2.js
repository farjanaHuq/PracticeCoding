// Is Subsequence
//Link: https://leetcode.com/explore/featured/card/june-leetcoding-challenge/540/week-2-june-8th-june-14th/3355/

// Given a string s and a string t, check if s is subsequence of t.
// A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ace" is a subsequence of "abcde" while "aec" is not).

// Follow up:
// If there are lots of incoming S, say S1, S2, ... , Sk where k >= 1B, and you want to check one by one to see if T has its subsequence. In this scenario, how would you change your code?

// Credits:
// Special thanks to @pbrother for adding this problem and creating all test cases.

// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false

// Constraints:

// 0 <= s.length <= 100
// 0 <= t.length <= 10^4
// Both strings consists only of lowercase characters.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

//convert main string to a has Map
//if hash Map includes hash map s[i], add to newString
//if newString and s are equql return true

//Iterative
var isSubsequence = function (s, t) {
  if (s.length === 0) return true;
  var sIndex = 0;
  var tIndex = 0;

  while (sIndex < s.length && tIndex < t.length) {
    if (s.charAt(sIndex) === t.charAt(tIndex)) {
      sIndex++;
    }
    tIndex++;
  }
  return s.length === sIndex;
};

//Recursion-I
var isSubsequence = function (s, t, sIndex, tIndex) {
  if (s.length === sIndex) return true; // subsequence match
  if (t.length === tIndex) return false; // end of large string but character does not match

  return s.charAt(sIndex) === t.charAt(tIndex)
    ? isSubsequence(s, t, sIndex + 1, tIndex + 1)
    : isSubsequence(s, t, sIndex, tIndex + 1);
};

////Recursion -II
var isSubsequence = function (s, t) { 
    var sIndex = 0;
    var tIndex = 0;
    
    return recursion(s, t, sIndex, tIndex);
};

function recursion(s, t, sIndex, tIndex) {
  if (s.length === sIndex) return true;
  if (t.length === tIndex) return false;

  return s.charAt(sIndex) === t.charAt(tIndex)
    ? recursion(s, t, sIndex + 1, tIndex + 1)
    : recursion(s, t, sIndex, tIndex + 1);
}

console.log(isSubsequence("acb", "ahbgdc", 0 ,0));
// console.log(['a', 'b', 'c'] === ['a', 'c', 'b'])
