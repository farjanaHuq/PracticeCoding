//Design an algorithm and write code to remove the duplicate characters in a string without using any additional buffer 
// NOTE: One or two additional variables are fine An extra copy of the array is not FOLLOW UP
// Write the test cases for this method

// function removeDuplicateCharacter(givenString) {
//     if (givenString.length===null) {
//         return;
//     }
//     if(givenString.length<2){
//         return;
//     }
//       for(var i=0; i<givenString.length; i++){
//           //console.log('Given string',givenString);
//           if(givenString.charAt(i)===givenString.charAt(i+1)){
//                 console.log('Duplicate', givenString.charAt(i-1));
//             givenString  = givenString.replace(givenString.charAt(i-1), '');
        
//             console.log('Result string', givenString);
//           }
//       }
 
//     return givenString;

// }

//<-----------------------------Alternate Solution---------------------------------------->
function removeDuplicateCharacter(givenString){
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
        //console.log(strObj[char]);
        if(strObj[char]>1){
           strObj[char]=1;
        }
    }

    var str = '';
    for (var key in strObj) {
        if (strObj.hasOwnProperty(key)) {
            str += key ;
        }
    }
    return str;
    
}


// Test Cases:
// 1 String does not contain any duplicates, e g : abcd
// 2 String contains all duplicates, e g : aaaa
// 3 Null string
// 4 Empty string
// 5 String with all continuous duplicates, e g : aaabbb
// 6 String with non-contiguous duplicates, e g : abababa

// var theString = 'hello';
// var theString = 'aabc';
// var theString = 'abcd';
// var theString = 'aaaa';
//  var theString = ''; 
// var theString = 'aaabbb';
var theString = 'abababa';



console.log(removeDuplicateCharacter(theString));