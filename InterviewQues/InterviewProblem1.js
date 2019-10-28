//Return the string aaaccddddd as 3a2c5d

function getCompressedString(str){
    let strMap = {};
    let newStr = '';
    
    if(str === null){
        return ;
    }
    for (let char of str) {
        if (strMap[char]) {
            strMap[char]++;
        } else {
            strMap[char] = 1;
        }
    }

    for (let elem in strMap) {
        if (strMap[elem] > 1) {
            strMap[elem]++;
            newStr += (strMap[elem]+elem);
        }
  
    }
   
    return newStr;
   
}

console.log(getCompressedString('aaaccddddd'));


function helloProperties(obj){
    var arr = [];
    for(var key in obj){
        arr.push(`Hello - ${key}`);
    }
    return arr;
 }
 
 var obj = {
     john : 12,
     brian : 'true',
     doe : 'hi',
     fred : 'false'
 };
 console.log(helloProperties(obj));