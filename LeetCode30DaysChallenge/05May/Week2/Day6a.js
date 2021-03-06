//Problem: Remove K Digits
//Link: https://leetcode.com/explore/challenge/card/may-leetcoding-challenge/535/week-2-may-8th-may-14th/3328/

// Given a non-negative integer num represented as a string, remove k digits from the number so that the new number is the smallest possible.

// Note:
// The length of num is less than 10002 and will be ≥ k.
// The given num does not contain any leading zero.
// Example 1:

// Input: num = "1432219", k = 3
// Output: "1219"
// Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.
// Example 2:

// Input: num = "10200", k = 1
// Output: "200"
// Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.
// Example 3:

// Input: num = "10", k = 2
// Output: "0"
// Explanation: Remove all the digits from the number and it is left with nothing which is 0.

//

var removeKdigits = function(num, k) {
    var numArr = [];
    if(num.length === k) return "0";
    //converting string into the number of array
    for(let char of num){
        numArr.push(parseInt(char));
    }
    //Compare item at index j with the next index j+1, if bigger then delete item at index j

    for(var i=0; i<k; i++){
        var j=0;
        
        while(j<numArr.length-1 && numArr[j]<=numArr[j+1]){
            j++;           
        }
        numArr.splice(j, 1);  
    }
    //Removes the leading zero
    while(numArr.length>1 && numArr[0]===0){
        numArr.splice(0,1);
    }
    //Converts to string again
    var finalstring = '';
    for(let num of numArr){
        finalstring+=num.toString();
    }
    return finalstring;
}

