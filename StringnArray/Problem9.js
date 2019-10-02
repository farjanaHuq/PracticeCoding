//Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column is set to 0

function findELementZero(matrix, m, n){
    console.log(matrix);

    for(let i=0; i<m; i++){
        for(let j=0; j<n;j++){
            if(matrix[i][j]===0){
                return convertElementsToZero(matrix);
            }
        }
    }

    function convertElementsToZero(matrix){
        for(let i=0; i<m; i++){
            for(let j=0; j<n;j++){
                matrix[i][j] = 0;
            }
        }
       // console.log(matrix);
        return matrix;
    }
}

const testMatrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]];

console.log(findELementZero(testMatrix, 3,3));