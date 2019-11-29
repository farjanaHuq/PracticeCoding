class Node{
    constructor(data, next=null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }
    //Makes a Linked List from an array
    createList(array){  
        //insert first 
        for(let i=0; i<array.length;i++){
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
   add(item){

        if(!this.head) return null;
        let node = this.head;
        while(node){
            node = node.next;
            if(!node.next) {
                node.next = new Node(item);
            };
            break; 
        }      
    }
}

//var arr= [2,3,7,9,13,12];
var arr2= [2,3];
var myLinkedList = new LinkedList();
// const nodeOne = new Node(arr[0]);
// myLinkedList.head = nodeOne;
// for(let i=1; i<arr.length;i++){
//     myLinkedList.add(arr[i]);
// }

myLinkedList.createList(arr2);
myLinkedList.add(4);
console.log(myLinkedList);