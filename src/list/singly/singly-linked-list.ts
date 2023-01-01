class Nodes {
  next: any = null;
  constructor(public val: string) {}
}

class LinkedList {
  head: any = null;
  tail: any = null;
  length: number = 0;
  constructor() {}

  push(val: string) {
    let node: Nodes = new Nodes(val);
    if (!this.head) {
        this.head = node;
        this.tail = this.head;
    } else {
        this.tail.next = node;
        this.tail = node;
    }
    this.length++;
  }
  pop(){
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
