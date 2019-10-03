//Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column is set to 0

function findELementZero(matrix, m, n){
    console.log(matrix);

    for(let i=0; i<m; i++){
        for(let j=0; j<n;j++){
            if(matrix[i][j]===0){
                var row = i;
                var col = j;
                return convertElementsToZero(matrix, row, col);
            }
        }
    }

    function convertElementsToZero(matrix,row,col){
       for(let i=0; i<n; i++){ 
           matrix[row][i] = 0;
       }
       for(let j=0;j<m;j++){
           matrix[j][col] = 0;
       }
        return matrix;
    }
}

//const testMatrix = [[1, 2, 3], [4, 0, 6], [7, 8, 9]];
const testMatrix = [[1, 2, 3], [4, 0, 6], [7, 8, 0]];

console.log(findELementZero(testMatrix, 3,3));