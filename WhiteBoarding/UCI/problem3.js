//Find the pair of socks
//[1,1,2,1,3,3,1,1]

function countPairOfSocks(arr){
   var sockNums = {};
   var sum = 0;
   for(let elem of arr){
       if(sockNums[elem]){
           sockNums[elem]++;
       }else{
           sockNums[elem]=1;
       }
   }

   for(let color in sockNums){
       sum += Math.floor(sockNums[color]/2);
   }
  return sum;
}

console.log(countPairOfSocks([1,1,2,1,3,3,1,1]));