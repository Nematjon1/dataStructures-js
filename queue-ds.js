/* Queue Data Structure
 * lookup O(n)
 * enqueue O(1)
 * dequeue O(1)
 * peek O(1)
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if(this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.lenght++;
    return this;
  }
  dequeue() {
    if(!this.first) {
      return null;
    } else if(this.first === this.last) {
      this.last = null;
    }
    const holdingPointer = this.first;
    this.first = this.first.next;
    this.lenght--;
    return holdingPointer;
  }
}
