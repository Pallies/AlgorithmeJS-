"use strict";
class Nodes {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let node = new Nodes(val);
        if (!this.head) {
            this.head = node;
            this.tail = this.head;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }
    pop() {
        let node;
    }
}
const list = new LinkedList();
list.push("hello");
list.push("hello1");
list.push("hello2");
console.log(list.head);
console.log(list.head.next);
console.log(list.tail);
console.log(list.length);
