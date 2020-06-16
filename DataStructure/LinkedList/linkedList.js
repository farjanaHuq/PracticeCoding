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
        if (index === 0) return this.head;
        while (node) {
            node = node.next;
            listIndex++;
            if (listIndex === index) {
                return node;
            }
        }

    }
    //0. Makes a Linked List from an array
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
    //1. Adds element to the end of a list
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
    //2. Inserts elements at a given index of a list
    insertAt(element, index) {

        if (!this.head) return null;
        let node = this.head;
        let listIndex = 0;
        while (node) {
            node = node.next;
            listIndex++;
            if (listIndex === index) {
                let previousNode = this.getELement(index - 1);
                let currenttNode = this.getELement(index);
                node = null;
                previousNode.next = new Node(element, currenttNode);
            }
        }
    }
    //3. Removes and returns elements from the specific index of a list
    removeForm(index) {
        if (!this.head) return null;
        let node = this.head;
        let listIndex = 0;
        while (node) {
            node = node.next;
            listIndex++;
            if (listIndex === index) {
                let previousNode = this.getELement(index - 1);
                let currenttNode = this.getELement(index);
                let nexttNode = this.getELement(index+1);
                node = null;
                previousNode.next = nexttNode;
                return currenttNode;
            }
        }
    }
    //4. Removes and returns the element from the given list, if not found returns -1.
    removeElement(element){
        if (!this.head) return null;
        let node = this.head;
        let listIndex = 0;
        while (node) {
            node = node.next;
            listIndex++;
            if (node.data === element) {
                let previousNode = this.getELement(listIndex - 1);
                let currenttNode = this.getELement(listIndex);
                let nexttNode = this.getELement(listIndex+1);
                node = null;
                previousNode.next = nexttNode;
                return currenttNode.data;
            }
            else{
                return -1;
            }
        }
    }

    //5. Returns the index of given element
    indexOf(element){
        if (!this.head) return null;
        let node = this.head;
        let listIndex = 0;
    
        while (node) {
            listIndex++;   
            console.log(listIndex, node.data);
            if (node.data === element) {
               return listIndex;
            }
            node = node.next;
        }
    }
    //6. Returns true if the list is empty
    isEmpty(){
        return this.head === null;
    }
    //7. returns the length of List
    length(){
        if(!this.head) return null;
        let node = this.head;
        let counter = 0;
        while(node){
            node = node.next;
            counter++;
        }
        return counter;
    }
    //8. Prints the content of the list in an array
    printList(){
        if(!this.head) return null;
        let node = this.head;
        let copyList = [];
        while(node){
            copyList.push(node.data);
            node = node.next;
        }
        return copyList;
    }
    //9. reverse the whole list
    reverseList(){
        if(!this.head) return null;
        let node = this.head;
        let arrayOfList = [];
        while(node){
            arrayOfList.push(node.data);
            node = node.next;
        }
        console.log(arrayOfList);
        for(let i=arrayOfList.length-1; i>=0; i--){
            this.head = new Node(arrayOfList[i], this.head);
            console.log(this.head);
        }
    }
   
}

//var arr= [2,3,7,9,13,12];
var arr2 = [2, 3];
var myLinkedList = new LinkedList();


myLinkedList.createList(arr2);
myLinkedList.add(4);
myLinkedList.insertAt(5, 2);
console.log(myLinkedList);
console.log('reverse the array', myLinkedList.reverseList());
//console.log('print list: ', myLinkedList.printList());
//console.log('Length: ', myLinkedList.length());
// console.log('Empty: ', myLinkedList.isEmpty());
//console.log('Index of Element', myLinkedList.indexOf(4));
// console.log('Removed node', myLinkedList.removeForm(2));
// console.log('Removed element', myLinkedList.removeElement(5));

// console.log('element at the given index 0: ',myLinkedList.getELement(0));
// console.log('element at the given index 1: ',myLinkedList.getELement(1));
// console.log('element at the given index 2: ',myLinkedList.getELement(2));
// console.log('element at the given index 3: ',myLinkedList.getELement(3));
// console.log('element at the given index 4: ',myLinkedList.getELement(4));


