class Stack{
    constructor(){
        this.storage = [];
        this.length = 0;
    }
    getLength(){
        return this.length;
    }
    push(data){
        this.storage[this.length] = data;
        this.length++;
    }
    pop(){
       this.storage[this.length--] = null;  

    }
    //returns last value added to the slack
    peek(){
       return this.storage[this.length-1];
    }
    
    isEmpty(){
        return this.length === 0;
    }
  
}


var myStack = new Stack();
//push()
myStack.push(4);
myStack.push(5);
myStack.push(6);
myStack.push(7);
myStack.push(8);



console.log(myStack);
//pop()
myStack.pop();

//console.log(`Stack after pop() ${myStack}`);
console.log(`Last element added ${myStack.peek()}`);
console.log(`Is empty: ${myStack.isEmpty()}`);
console.log(`Length ${myStack.getLength()}`);
console.log('===================================================');
//pop()
myStack.pop();

console.log(`Last element added ${myStack.peek()}`);
console.log(`Is empty: ${myStack.isEmpty()}`);
console.log(`Length ${myStack.getLength()}`);

console.log('===================================================');
//pop()
myStack.pop();

console.log(`Last element added ${myStack.peek()}`);
console.log(`Is empty: ${myStack.isEmpty()}`);
console.log(`Length ${myStack.getLength()}`);