// // Online Stock Span
// // Write a class StockSpanner which collects daily price quotes for some stock,
// //  and returns the span of that stock's price for the current day.
// // The span of the stock's price today is defined as the maximum number of 
// // consecutive days (starting from today and going backwards) for which the price of 
// // the stock was less than or equal to today's price.

// // For example, if the price of a stock over the next 7 days were [100, 80, 60, 70, 60, 75, 85], 
// // then the stock spans would be [1, 1, 1, 2, 1, 4, 6].

 
// // Example 1:

// // Input: ["StockSpanner","next","next","next","next","next","next","next"], [[],[100],[80],[60],[70],[60],[75],[85]]
// // Output: [null,1,1,1,2,1,4,6]
// // Explanation: 
// // First, S = StockSpanner() is initialized.  Then:
// // S.next(100) is called and returns 1,
// // S.next(80) is called and returns 1,
// // S.next(60) is called and returns 1,
// // S.next(70) is called and returns 2,
// // S.next(60) is called and returns 1,
// // S.next(75) is called and returns 4,
// // S.next(85) is called and returns 6.

// // Note that (for example) S.next(75) returned 4, because the last 4 prices
// // (including today's price of 75) were less than or equal to today's price.
 

// // Note:

// // Calls to StockSpanner.next(int price) will have 1 <= price <= 10^5.
// // There will be at most 10000 calls to StockSpanner.next per test case.
// // There will be at most 150000 calls to StockSpanner.next across all test cases.
// // The total time limit for this problem has been reduced by 75% for C++, and 50% for all other languages.

class Stack{
    constructor(){
        this.storage = [];
        this.length = 0;
    }
    getLength(){
        return this.length;
    }
    push(data){
        this.storage[this.length++] = data;
    }
    pop(){
       this.storage[--this.length] = null;  

    }
    //returns last value added to the slack
    peek(){
       return this.storage[this.length-1];
    }
    
    isEmpty(){
        return this.length === 0;
    }
  
}


var StockSpanner = function() {
     this.prices = new Stack();
     this.span = new Stack();
};
StockSpanner.prototype.next = function(price) {
   var result = 1;
   while(!prices.isEmpty() && prices.peek() <= price){
            this.prices.pop();
            result += this.span.pop();
   }
   prices.push(price);
   span.push(span);
  
   return result;
  
};


// /** 
//  * Your StockSpanner object will be instantiated and called as such:
//  * var obj = new StockSpanner()
//  * var param_1 = obj.next(price)
//  */
//[100, 80, 60, 70, 60, 75, 85]
// var stock = new Stack();
// stock.push(0,1);
// stock.push(1,2);
// stock.push(2,3);
// stock.push(3,1);
// stock.push(4,2);

// console.log(stock);
// console.log(stock.size());
// console.log(stock.isEmpty());
// console.log(stock.peek());
// console.log(stock.pop());

// var onlineStock = new Stack();
// onlineStock.push(0,100);
// onlineStock.push(1,80);
// onlineStock.push(2,60);
// onlineStock.push(3,70);
// onlineStock.push(4,60);
// onlineStock.push(5,75);
// onlineStock.push(6,85);

// console.log(onlineStock);
// console.log(onlineStock.size());
// console.log(onlineStock.isEmpty());
// console.log(onlineStock.peekFirst());

var arr = Array(2).fill().map(()=>Array(2));
arr[0][0] = new Stack();
arr[1][0] = new Stack();
// console.log(arr[0][0]);
// console.log(arr[0][1]);
console.log(arr);