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
    insert(data){
       const node = new Node(data, this.head);
       this.head = node;
    }
    size(){
        let node = this.head;
        let counter = 0;
        while(node){
          counter++;
          node = node.next;
        }
        return counter;
    }
}

var nodeOne = new Node(5);
var list = new LinkedList();
list.head = nodeOne;

list.insert(15);
console.log(list.head.data);
console.log(list.head.next);
console.log(list);
console.log(list.size());
