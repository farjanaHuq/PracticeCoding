//Problem: Delete Node
//Link: https://leetcode.com/explore/featured/card/june-leetcoding-challenge/539/week-1-june-1st-june-7th/3348/
//Write a function to delete a node (except the tail) in a singly linked list, given only access to that node.

// Given linked list -- head = [4,5,1,9], which looks like following:
// Example 1:

// Input: head = [4,5,1,9], node = 5
// Output: [4,1,9]
// Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.
// Example 2:

// Input: head = [4,5,1,9], node = 1
// Output: [4,5,9]
// Explanation: You are given the third node with value 1, the linked list should become 4 -> 5 -> 9 after calling your function.
 

// Note:

// The linked list will have at least two elements.
// All of the nodes' values will be unique.
// The given node will not be the tail and it will always be a valid node of the linked list.
// Do not return anything from your function.

class ListNode{
    constructor(val, next=null){
        this.val = val;
        this.next = next;
    }  
}

class LinkedList{
    constructor(){
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
    createList(arr){
        for(var i=0;i<arr.length; i++){
            this.head = new ListNode(arr[i], this.head);
        }
        return this.head;
    }
    deleteNode(node){
        var listNode = this.head;
        var index = 0;
        while(listNode){
              listNode = listNode.next;
              index++;
              if(listNode.val === node){
                let previousNode = this.getELement(index-1);
                let currentNode = this.getELement(index);
                let nextNode = currentNode.next;
                listNode = null;
                previousNode.next = nextNode;                  
              }
            
        }

    }
}

     


 var arr1 = [4,5,1,9];
 var linkedList = new LinkedList();
console.log(linkedList.createList(arr1));
console.log(linkedList.getELement(2));
// console.log(linkedList.deleteNode(5));
deleteNode(5);
 