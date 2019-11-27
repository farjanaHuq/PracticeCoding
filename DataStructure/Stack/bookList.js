//Create a book stack

class BookStack{
    constructor(){
        this.storage = [];
        this.length = 0;
    }
    push(items){
        this.storage[this.length++] = items;
    }
    pop(){
        this.storage[--this.length] = null;      
    }
    peek(){
        return this.storage[this.length-1];
     }
    getLength(){
          return this.length;
    }
    isEmpty(){
        return this.length === 0;
    }
}

var bookStack = new BookStack();
//Adding items
bookStack.push('Kite Runner');
bookStack.push('Al Chemist');
bookStack.push('The Third Door');
bookStack.push('Educated');

console.log('Check push()',  bookStack);
bookStack.pop();
console.log('Check pop()',  bookStack);
console.log('peek',bookStack.peek() );
console.log('length',bookStack.getLength() );