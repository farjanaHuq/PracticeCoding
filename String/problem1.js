//Problem 1
//Implement an algorithm to determine if a string has all unique characters,
//What if you cannot use additional data structures?

//Pseudocode
//check for repeated characters.
//find the repeated character with indexOf() method
//if the character is repeated then the indexOf() method will return -1.image

// function uniqueCharacters(givenString){             //This solution has nested for loop so that time time complexity will be O(n^2);
//    for(var i=0; i<givenString.length; i++){         //Let's try another solution.
//        for(var j=i+1; j<givenString.length;j++){
//            if(givenString[i]==givenString[j]){
//                return false;
//            }
//        }
//    }
//    return true;
// }

function isCharactersUnique(givenString){
    var strObj = {};
    for(let char of givenString){
        if(!strObj[char]){
            strObj[char]=1;
        }else{
            strObj[char]++;
        }
    }
  //  console.log(strObj);
    for(let char in strObj){
        console.log(strObj[char]);
        if(strObj[char]>1){
            return false;
        }
    }
    return true;
}

var theString = 'abbccd';
// console.log(theString.indexOf('l'));
//console.log(uniqueCharacters(theString));
console.log(isCharactersUnique(theString));