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
            this.tail = this.head = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }
    pop() {
        if (this.length <= 1) {
            this.length--;
            return (this.head = this.tail = null);
        }
        let before = this.head;
        let tmp;
        while (before.next != this.tail) {
            before = before.next;
        }
        tmp = before.next;
        this.tail = before;
        this.tail.next = null;
        this.length--;
        return tmp;
    }
    popRecursive(node = null) {
        if (this.length <= 1) {
            this.length = 0;
            return (this.head = this.tail = null);
        }
        if ((node === null || node === void 0 ? void 0 : node.next) == this.tail) {
            let tmp = this.tail;
            node.next = null;
            this.tail = node;
            this.length--;
            return tmp;
        }
        return node ? this.popRecursive(node.next) : this.popRecursive(this.head);
    }
    unshift(val) {
        let node = new Nodes(val);
        if (!this.head) {
            this.tail = this.head = node;
        }
        else {
            node.next = this.head;
            this.head = node;
        }
        this.length++;
    }
    shift() {
        let tmp = this.head;
        this.head = tmp.next;
        tmp.next = null;
        this.length--;
        return tmp;
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
console.log(list.pop());
console.log(list.popRecursive(), "recursive");
console.log(list.length);
console.log(list.tail);
console.log(list.head);
list.unshift("push");
list.push("hello1");
list.push("hello2");
console.log(list.shift(), "shift");
console.log(list.head);
console.log(list);
const list2 = new LinkedList();
list2.unshift("push");
console.log(list2.tail);
