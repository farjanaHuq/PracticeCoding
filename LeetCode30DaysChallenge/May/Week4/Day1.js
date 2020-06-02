//Problem: Sort Characters By Frequency
//Link: https://leetcode.com/explore/challenge/card/may-leetcoding-challenge/537/week-4-may-22nd-may-28th/3337/
// Given a string, sort it in decreasing order based on the frequency of characters.

// Example 1:
// Input:
// "tree"
// Output:
// "eert"

// Explanation:
// 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.

// Example 2:
// Input:
// "cccaaa"
// Output:
// "cccaaa"

// Explanation:
// Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
// Note that "cacaca" is incorrect, as the same characters must be together.

// Example 3:
// Input:
// "Aabb"
// Output:
// "bbAa"
// Explanation:
// "bbaA" is also a valid answer, but "Aabb" is incorrect.
// Note that 'A' and 'a' are treated as two different characters.


/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    var stringMap = {} 
    var max = 0;
    var maxChar = '';

    for(let elem of s){
        if(!stringMap[elem]){
            stringMap[elem]=1;
        }else{
            stringMap[elem]++;
        }
    }
    console.log(stringMap);

    var keysSorted = Object.keys(stringMap).sort(function(a,b){return stringMap[b]-stringMap[a]})
    
    // for(let elem in stringMap){
    //    if(stringMap[elem]>max){
    //           max = stringMap[elem];
    //           maxChar = elem;
    //    }
    // }
    console.log(keysSorted);
};

frequencySort('aaaccc');