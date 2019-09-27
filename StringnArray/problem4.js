//Anagram: Write a method to decide if two strings are anagrams or not.

// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case

// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False
// "William Shakespeare" = "I am a weakish speller"
//"George Bush" = "He bugs Gore"


function anagrams(stringA, stringB){
    var charMapA = buildCharMap(stringA);
    var charMapB = buildCharMap(stringB);
    
    if(Object.keys(charMapA).length !== Object.keys(charMapB).length){
         return ;
    }
    for(let char in charMapA){
        if(charMapA[char] === charMapB[char]){
            return true;
        }
        else{
            return false;
        }
    }
    
}

function buildCharMap(str){
    const charMap = {};
    const  theStr = str.replace(/[^\w]/g, '').toLowerCase();
    for(let char of theStr){
        if(!charMap[char]){
            charMap[char]=1;
        }else{
            charMap[char]++;
        }
    }
   return theStr;
}

var string1 = 'Hi there';
var string2 = 'Bye there';

 anagrams(string1, string2);
//buildCharMap(string1);
console.log(anagrams(string1, string2));

