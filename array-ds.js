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

/* Create a function that reverses a string:
 * "Hi My name is Nematjon" should be:
 * "nojtameN si eman yM iH"
 */
function reverseString(string) {
  // Check an input
  if(!string || typeof string !== "string" || string.length < 2) {
    return "The input must be type of 'string' and greater than 1";
  }
  // string = ["s", "t", "r"];
  let reversed = [];
  const totalItems = string.length - 1;
  for(let i = totalItems; i >= 0; i--) {
    reversed.push(string[i]);
  }
  return reversed.join("");
}
//console.log(reverseString("string"));
//console.log(reverseString(undefined));

function reverseString2(string){
  return string.split("").reverse().join("");
}
const reverseString3 = string => [...string].reverse().join("");
//console.log(reverseString3("Hi My name is SSSS"))

/* Merge 2 sorted arrays */
function mergeSortedArray(arr1, arr2) {
  let mergedArray = [];
  // Check inputs
  if(arr1.length === 0) {
    return arr2;
  } else if(arr2.length === 0) {
    return arr1;
  }
  let arr1Item = arr1[0];
  let arr2Item = arr2[0];
  let i = 0;
  let j = 0;
  while(arr1Item || arr2Item) {
    console.log(arr1Item, arr2Item);
    if(!arr2Item || arr1Item < arr2Item) {
      mergedArray.push(arr1Item);
      arr1Item = arr1[i];
      i++;
    } else {
      mergedArray.push(arr2Item);
      arr2Item = arr2[j];
      j++;
    }
  }
  return mergedArray;
}

