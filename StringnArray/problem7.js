//Spiral Matrix

// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[undefined, undefined],
//     [undefined, undefined]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function spiralMatrix(n){
    let results = [];

    for(let i=0; i<n; i++){
        results.push([0]);
    }
   
    var counter = 1;
    var startColumn = 0;
    var endColumn = n-1;
    var startRow = 0;
    var endRow = n-1;

    while(startColumn<=endColumn && startRow<endRow){
        //First Row
        for(let i=startColumn; i<=endColumn; i++){
            results[startRow][i] = counter;
            //console.log(counter);
            counter++;
        }    
        startRow++;  
        // console.log(startRow);
        //Right column
        for(let i=startRow; i<=endRow; i++){
           results[i][endColumn] = counter;
         
           //console.log(results);
           counter++;
        } 

        endColumn--;
        
        for(let i=endColumn; i>=startColumn; i--){
            results[endRow][i] = counter;
         
            //console.log(results);
            counter++;
        } 
        
        endRow--;
        for(let i=startColumn; i<=endColumn; i++){
            results[endRow][i] = counter;
          
            //console.log(results);
            counter++;
         } 

    }
   console.log(results);
}

spiralMatrix(3);