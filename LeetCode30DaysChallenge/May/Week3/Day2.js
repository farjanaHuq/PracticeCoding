//Problem: Odd Even Linked List
//Link: https://leetcode.com/explore/challenge/card/may-leetcoding-challenge/536/week-3-may-15th-may-21st/3331/

const e = require("express");

//Given a singly linked list, group all odd nodes together followed by the even nodes. 
//Please note here we are talking about the node number and not the value in the nodes.
// You should try to do it in place. The program should run in O(1) space complexity and O(nodes) 
// time complexity.

// Example 1:
// Input: 1->2->3->4->5->NULL
// Output: 1->3->5->2->4->NULL

// Example 2:
// Input: 2->1->3->5->6->4->7->NULL
// Output: 2->3->6->7->1->5->4->NULL
// Note:

// The relative order inside both the even and odd groups should remain as it was in the input.
// The first node is considered odd, the second node even and so on ..

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// function ListNode(val, next) {  
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }

// function LinkedList(node){
//     this.node = (node === undefined ? null : node);
// }

// LinkedList.prototype.createList = function(arr){
//     for(var elem of arr){
//         this.node = ListNode(elem, this.node);
//     }
// }

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
       this.head = null;
    }
    createList(arr){
        if (this.head === null) return this.head;
        for(let elem of arr){
            this.head = new Node(elem, this.head)
        }
    }
}
var maple = new LinkedList();
var arr = [1,2,3,4,5];
maple.createList(arr);
console.log("Maple: ",maple);
var oddEvenList = function(head) {
    if (head === null) return null;
    
    var result = new LinkedList();
  //  console.log(result.createList(head)) ;
    // var p1 = new ListNode(head);
    // var p2 = new ListNode(head.next);
    // connectNode = new ListNode(head.next);
 
    // while(p1 != null && p2 != null){
    //         let tempNode = new ListNode(p2.next);
    //         if(tempNode == null)
    //             break;
 
    //         p1.next = p2.next;
    //         p1 = p1.next;
 
    //         p2.next = p1.next;
    //         p2 = p2.next;
    // }
 
    // p1.next = connectNode;
 
   // return result;
};

// (oddEvenList([1,2,3,4,5]));