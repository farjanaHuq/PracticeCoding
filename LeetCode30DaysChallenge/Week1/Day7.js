//Link: https://leetcode.com/explore/featured/card/30-day-leetcoding-challenge/528/week-1/3288/
// Given an array of strings, group anagrams together.

// Example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// Note:

// All inputs will be in lowercase.
// The order of your output does not matter.

//Pseudocode
//0. Write a function that will convert string to obejct
//1. Anagram function 
//a. declare an anagram function that will take two string
//b. check if the strings are anagram
//c. declare to objects that will take the character as 'key' and number of character as 'value'
//d. if they matches the strings are anagram 

var groupAnagrams = function(strs) {
    var result = [];
    for(let j=0; j<strs.length;j++){
        let subArray = [];
        for(let i=1; i<strs.length;i++){
            if(isAnagram(strs[j], strs[i])){
                subArray.push(strs[i]);
                console.log(subArray);
                strs.splice(i,1);
            }
        }
        subArray.push(strs[j]);
        strs.splice(j,1);
        result.push(subArray);
        j-=1;
    }
    console.log(result);
  // return result;

};

//checks if two strings are anagrams
var isAnagram = function(str1, str2){
    var strObject1 = strToObject(str1);
    var strObject2 = strToObject(str2);
    if(Object.keys(strObject1).length !== Object.keys(strObject2).length){
        return false;
    }
    for(let key in strObject1){
        if(strObject1[key]!==strObject2[key]){
            return false;
        }
    }
    return true;
};

//converts string to object
var strToObject = function(str){
  var object = {};
  for(let char of str){
      if(!object[char]){
          object[char]=1;
      }else{
          object[char]++;
      }
  }
  return object;
};

//console.log(strToObject('apple'));
//console.log(isAnagram('eat', 'ate'));
groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
groupAnagrams([" ", " ", " "]);