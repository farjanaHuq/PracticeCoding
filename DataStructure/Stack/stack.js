class Stack{
    constructor(){
        this.storage = [];
        this.length = 0;
    }
    push(data){
        this.storage[this.length] = data;
        this.length++;
    }
    pop(){
       this.storage[--this.length] = null;   
    }
    //returns last value added to the slack
    peek(){
       return this.storage[--this.length];
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
//pop()


console.log(myStack);
myStack.pop()
console.log(myStack);
console.log(myStack.peek());
console.log(myStack.isEmpty());