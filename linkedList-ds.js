class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LList {
  constructor() {
    this.head = new Node("head");
  }

  remove(item) {
    const prevNode = this.findPrevious(item);
    if(!(prevNode.next === null)) {
      prevNode.next = prevNode.next.next;
    }
  }

  findPrevious(item) {
    let currNode = this.head;
    while(!(currNode.next === null) && (currNode.next.element !== item)) {
      currNode = currNode.next;
    }

    return currNode;
  }

  display() {
    let currNode = this.head;
    while(!(currNode.next === null)) {
      console.log(currNode.next.element);
      currNode = currNode.next;
    }
  }

  find(item) {
    let currNode = this.head;
    while(currNode.element !== item) {
      currNode = currNode.next;
    }
    return currNode;
  }

  insert(newElement, item) {
    let newNode = new Node(newElement);
    let currNode = this.find(item);
    newNode.next = currNode.next;
    currNode.next = newNode;
  }
}

function example() {
  const cities = new LList();

  cities.insert("Conway", "head");
  cities.insert("Russellville", "Conway");
  cities.insert("Carlisle", "Russellville");
  cities.insert("Alma", "Carlisle");
  cities.display();
  console.log(" ----------\n Removed: Carlisle ");
  cities.remove("Carlisle");
  cities.display();
}

example();
