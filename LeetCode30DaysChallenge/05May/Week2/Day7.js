//Problem : Implement Trie (Prefix Tree)
//Link : https://leetcode.com/explore/challenge/card/may-leetcoding-challenge/535/week-2-may-8th-may-14th/3329/

// Implement a trie with insert, search, and startsWith methods.

// Example:

// Trie trie = new Trie();

// trie.insert("apple");
// trie.search("apple");   // returns true
// trie.search("app");     // returns false
// trie.startsWith("app"); // returns true
// trie.insert("app");   
// trie.search("app");     // returns true
// Note:

// You may assume that all inputs are consist of lowercase letters a-z.
// All inputs are guaranteed to be non-empty strings.


/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.array = [];
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
   var newArray = this.array;
   newArray.push(word);
   return newArray;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    for(var elem of this.array){
        if(elem == word) return true;
    }
    return false;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let length = prefix.length;
    console.log(length);
    for(var elem of this.array){
       let newElem = elem.slice(0, length);
       console.log(newElem);
       if(newElem == prefix){
           return true;
       }
    }
    return false;
};

var obj = new Trie();
console.log(obj.insert('apple'));
console.log(obj.insert('orange'));
console.log(obj.search('mango'));
console.log(obj.startsWith('nnn'));
 