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

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
class Stacks{
    constructor(){
        this.storage = [];
        this.length = 0;
    }
    getLength(){
        return this.length;
    }
    push(data){
        this.storage[this.length++] = data;
    }
    pop(){
       this.storage[--this.length] = null;  

    }
    //returns last value added to the slack
    peek(){
       return this.storage[this.length-1];
    }
    
    isEmpty(){
        return this.length === 0;
    }
  
}

var removeKdigits = function(num, k) {
    var size = num.length;
    var counter = 0;
    var stack = new Stacks();
    var result = '';

    if(k === num.length)return "0";
  
    //Greedy Algorithm : 
    //First push the char at index=0 to the stack.
    //compare each char of num with stack[currentIndex]
    //if the last value in the stack is greater than num.charAt(currentIndex), then pop() the larger value

    while(counter<size){

       while(k>0 && !stack.isEmpty() && stack.peek()>num.charAt(counter)){
           stack.pop();
           k--;
       }
       stack.push(num.charAt(counter));
       counter++;
    }
    //Remove duplicate elements like '11111'
    // while(k>0){
    //     stack.pop();
    //     k--;
    // }
    for(let char of stack.storage){
        result += char;
    }
    if(result = '0') return '0';
    if(result.length>0 && result.charAt(0)=='0'){
        result = result.slice(1, result.length);
    }
    console.log(typeof(result));
    return result;
};


console.log((removeKdigits("112", 1)));