/**
 * @param {number} N
 * @return {number}
 */
function fib(n) {
    if(n<2) return n;
    return fib(n-1)+fib(n-2) ;
};
//fib(10);
// console.log(fib(31));

//<-------------memorization----------------------->//

var fibonacci = function(n){
    memo = new Array(n + 1).fill(undefined);
    function fibHelper(n){
         if (memo[n]) return memo[n];
         if(n==0) {
             memo[n]=0
             return memo[n];
         }
         if(n==1){
             memo[n]=1;
             return memo[n];
         }
         return memo[n]= fibHelper(n-1)+ fibHelper(n-2);
        
    }
    fibHelper(n);
    return memo[n];
}
console.log(fibonacci(3));