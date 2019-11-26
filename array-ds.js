// Array Data Structure
const strings = ["alien", "b", "c", "d"]; // 4*4 = 16 bytes of storage

strings[2]; // O(1) Speed Complexity

// push
strings.push("e"); // O(1) S-d C-y

// pop
strings.pop(); // O(1) S-d C-y

// unshift
strings.unshift("x"); // O(n) S-d C-y

// splice
strings.splice(2, 0, "alien"); // O(n) S-d C-y

// ======== Dynamic Array ==========
// lookup O(1)
// append* O(1) *may be O(n)
// insert O(n)
// delete O(n)
// ========= Static Arrays ==========
// lookup O(1)
// push O(1)
// insert O(n)
// delet O(n)

// ===== MyArray Implementation
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
  }
  shiftItems(index) {
    const len = this.length;
    for(let i = index; i < len; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[len - 1];
    this.length--;
  }
}
