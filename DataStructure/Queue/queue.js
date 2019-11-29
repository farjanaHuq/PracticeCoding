//Queues are data structures that follows 'First In First Out' paradigm.

class Queues {
    constructor() {
        this.storage = [];
        this.length = 0;
    }
    //adds item to the queue
    enqueue(items) {
        this.storage[this.length++] = items;
    }
    //remove the first element
    dequeue() {
        let currentLength = this.storage.length - this.length;
        let lastValue = this.storage[currentLength];
        this.storage[currentLength] = null;
        this.length--;
        return lastValue;
    }
    //peeks the last value added to the stack
    peek() {
        return this.storage[this.length - 1];
    }
    //return the length of the Queue
    getLength() {
        return this.length;
    }
    //return true/false
    isEmpty() {
        return this.length === 0;
    }

}
//=============== Time complexity of this solution is O(n)========================//


var myQueue = new Queues();

myQueue.enqueue('Rayan');
myQueue.enqueue('Connor');
myQueue.enqueue('Leah');
myQueue.enqueue('Adriana');
myQueue.enqueue('Arshan');

console.log(myQueue);

// console.log(myQueue.peek());
console.log(myQueue);
console.log(myQueue.dequeue());
console.log(myQueue);
console.log(myQueue.dequeue());
console.log(myQueue);
console.log(myQueue.dequeue());

