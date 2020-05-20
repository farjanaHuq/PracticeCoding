// Online Stock Span
// Write a class StockSpanner which collects daily price quotes for some stock,
//  and returns the span of that stock's price for the current day.
// The span of the stock's price today is defined as the maximum number of 
// consecutive days (starting from today and going backwards) for which the price of 
// the stock was less than or equal to today's price.

// For example, if the price of a stock over the next 7 days were [100, 80, 60, 70, 60, 75, 85], 
// then the stock spans would be [1, 1, 1, 2, 1, 4, 6].

 
// Example 1:

// Input: ["StockSpanner","next","next","next","next","next","next","next"], [[],[100],[80],[60],[70],[60],[75],[85]]
// Output: [null,1,1,1,2,1,4,6]
// Explanation: 
// First, S = StockSpanner() is initialized.  Then:
// S.next(100) is called and returns 1,
// S.next(80) is called and returns 1,
// S.next(60) is called and returns 1,
// S.next(70) is called and returns 2,
// S.next(60) is called and returns 1,
// S.next(75) is called and returns 4,
// S.next(85) is called and returns 6.

// Note that (for example) S.next(75) returned 4, because the last 4 prices
// (including today's price of 75) were less than or equal to today's price.
 

// Note:

// Calls to StockSpanner.next(int price) will have 1 <= price <= 10^5.
// There will be at most 10000 calls to StockSpanner.next per test case.
// There will be at most 150000 calls to StockSpanner.next across all test cases.
// The total time limit for this problem has been reduced by 75% for C++, and 50% for all other languages.
class Stack{
    constructor(){
        this.storage = [];
    }
    size(){
        return this.storage.length;
    }
    isEmpty(){
        return this.size() === 0;
    }
    peek(){
         return this.storage[this.size()-1];
    }
    peekFirst(){
        return this.storage[this.size()-1];
    }
    peekSecond(){
        return this.storage[this.size()-2];
    }
    push(index,data){
        this.storage[index] = data;
    }
    pop(){
        let length = this.size();
        this.storage[--length] = null;
    }
}

var StockSpanner = function() {
     this.stock = new Stack();
     this.index = -1;
};

/** 
 * @param {number} price
 * @return {number}
 */
// StockSpanner.prototype.next = function(price) {
//    let index = -1;
//    let span = [];

//    while(!this.stock.isEmpty()&&!this.stock.peek()<price){
//             this.stock.pop();
//    }
//    return span;

// };

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */

var stock = new Stack();
stock.push(0,1);
stock.push(1,2);
stock.push(2,3);
stock.push(3,1);
stock.push(4,2);

console.log(stock);
console.log(stock.size());
console.log(stock.isEmpty());
console.log(stock.peek());
console.log(stock.pop());