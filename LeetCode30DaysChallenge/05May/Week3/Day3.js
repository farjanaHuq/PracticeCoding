//Problem: Find All Anagrams in a String
//Link: https://leetcode.com/explore/challenge/card/may-leetcoding-challenge/536/week-3-may-15th-may-21st/3332/

//Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

// Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

// The order of output does not matter.

// Example 1:

// Input:
// s: "cbaebabacd" p: "abc"

// Output:
// [0, 6]

// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".

// Input:
// s: "abab" p: "ab"

// Output:
// [0, 1, 2]

// Explanation:
// The substring with start index = 0 is "ab", which is an anagram of "ab".
// The substring with start index = 1 is "ba", which is an anagram of "ab".
// The substring with start index = 2 is "ab", which is an anagram of "ab".

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    var sizeOfp = p.length;
    var indexes = [];
    var arrayOfS = []

    for(var i=0; i<s.length; i++){
        let str = s.slice(i, i+sizeOfp);
        if(str.length === sizeOfp){
            if(anagrams(p, str)){
                indexes.push(i);
            }
        }else{
            break;
        }
        
    }
    return indexes;

};
function anagrams(stringA, stringB) {
    
    const aCharMap = buildCharMap(stringA);
    const bCharMap = buildCharMap(stringB);

    if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
        return false;
    }
    for(let char in aCharMap){
        if(aCharMap[char]!==bCharMap[char]){
            return false;
        }
    }
    return true;
  
}

function buildCharMap(str){
    var charMap = {};
    for(let char of str){
        if(!charMap[char]){
            charMap[char]=1
        }else{
            charMap[char]++;
        }
    }
    //  console.log(charMap);
    return charMap;
}


console.log(findAnagrams("abab", "ab"));
//console.log(anagrams("apple", "abc"));
