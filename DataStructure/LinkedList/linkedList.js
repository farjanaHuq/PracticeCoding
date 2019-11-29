class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    getELement(index) {
        if (!this.head) return null;
       // if(node.data === null) return null;
        let node = this.head;
        
        let listIndex = 0;
        while (node) {
            node = node.next;
            listIndex++;
            if (listIndex === index) {
                return node.data;
            }
        }

    }
    //Makes a Linked List from an array
    createList(array) {
        //insert first 
        for (let i = 0; i < array.length; i++) {
            this.head = new Node(array[i], this.head);
        }

        //insert last 
        //  var node = new Node(array[1], node);
        //  this.head = new Node(array[0], node);
        //  for(let i=2; i<array.length;i++){
        //     node.next = new Node(array[i], node);
        // }  
    }
    //Adds element to the end of an array
    add(element) {
        if (!this.head) return null;
        let node = this.head;
        while (node) {
            node = node.next;
            if (!node.next) {
                node.next = new Node(element);
            };
            break;
        }
    }
    insertAt(element, index) {

        if (!this.head) return null;
        let node = this.head;
        let listIndex = 0;
        let storeNextNode = new Node();
        while (node) {
            node = node.next;
            listIndex++;
            if (listIndex === index) {
            storeNextNode.data = node.data;
            node.next = new Node(element, storeNextNode);
            }
        }
    }
}

//var arr= [2,3,7,9,13,12];
var arr2 = [2, 3];
var myLinkedList = new LinkedList();


myLinkedList.createList(arr2);
myLinkedList.add(4);
myLinkedList.insertAt(5,2);
console.log(myLinkedList);
console.log(myLinkedList.getELement(2));