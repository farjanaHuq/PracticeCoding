//Find the duplicates in an array

//Solution applying set
function findDuplicates(arr){
    let found = new Set();
    let arrayDuplicates = [];
    for(let i=0; i<arr.length; i++){
        if(found.has(arr[i])){
            arrayDuplicates.push(arr[i]);
           // return true;
        }
        found.add(arr[i]);
    }   
    //console.log(arrayDuplicates);
    //return false; 
    return arrayDuplicates; 
}

var testArr = ['a','c','b', 'a', 'd', 'd', 'e', 'f', 'f'];
console.log(findDuplicates(testArr));

//[2,1, 3, 4, 4, 5, 6, 7];

//Solution applying map object
function findDuplicateElement(arr){
    var elementMap = {};
    var duplicates = [];
    for(let elem of arr){
        if(!elementMap[elem]){
            elementMap[elem] =1;     
        }else{
            duplicates.push(elem);
        }  
    }
    console.log(elementMap);
    return duplicates;
}

var testArr1 = ['af','bc','bc', 'a', 'd', 'd', 'e', 'af', 'f'];
console.log(findDuplicateElement(testArr1));

