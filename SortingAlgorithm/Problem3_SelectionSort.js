//Selection Sort
//Start from i=0 to array length
//assumme that element at 'i' is the least in the array, assign i to 'indexOdMin'
//See if there any element with lower value
//if there is, record the index
//if the index of the current element and the index of the lowest element is not 
//the same, then swap them.


function selectionSort(arr){
    console.log('hello');
    
    let temp =0;
    console.log(arr);
    for(let i=0; i<arr.length; i++){
        let indexOdMin = i;
        for(let j=i+1; j<arr.length; j++){
          
            if(arr[j]<arr[i]){
                indexOdMin = j;
                temp = arr[indexOdMin];
                arr[indexOdMin] = arr[i];
                arr[i]=temp;
                
            }      
        }
    }
    return arr;

}

console.log(selectionSort([10,0,-30,97,5]));