//Queues are data structures that follows 'First In First Out' paradigm.

class Queues{
    constructor(){
        this.storage = [];
        this.length = 0;
    }
    //adds item to the queue
    push(items){
        this.storage[this.length++] = items;
    }
    //remove the first element
    pop(){
       let currentLength = this.storage.length - this.length;
       let lastValue = this.storage[currentLength];
       this.storage[currentLength] = null;
       this.length--;
       return lastValue;
    }
    //peeks the last value added to the stack
    peek(){
       return this.storage[this.length-1];
    }
    //return the length of the Queue
    getLength(){
        return this.length;
    }
    //return true/false
    isEmpty(){
      return this.length === 0;
    }

}

var myQueue = new Queues();
myQueue.push('Rayan');
myQueue.push('Connor');
myQueue.push('Leah');
myQueue.push('Adriana');
myQueue.push('Arshan');
console.log(myQueue.peek());
console.log(myQueue);
console.log(myQueue.pop());
console.log(myQueue);
console.log(myQueue.pop());
console.log(myQueue);
console.log(myQueue.pop());

//console.log(myQueue.peek());