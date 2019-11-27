class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.count = 1;
  }

  show() {
    return this.data;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    let n = new Node(data, null, null);
    if(this.root === null) {
      this.root = n;
    } else {
      let current = this.root;
      let parent;
      while(true) {
        parent = current;
        if(data < current.data) {
          current = current.left;

          if(current === null) {
            parent.left = n;
            break;
          }
        } else {
          current = current.right;

          if(current === null) {
            parent.right = n;
            break;
          }
        }
      }
    }
  }
  inOrder(node) {
    if(!(node === null)) {
      this.inOrder(node.left);
      console.log(`${node.show()} `);
      this.inOrder(node.right);
    }
  }
  getMin() {
    let current = this.root;
    while(!(current.left === null)) {
      current = current.left;
    }

    return current.data;
  }

  getMax() {
    let current = this.root;

    while(!(current.right === null)) {
      current = current.right;
    }

    return current.data;
  }

  find(data) {
    let current = this.root;
    while(current.data !== data) {
      if(data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }

      if(current === null) {
        return null;
      }
    }

    return current;
  }

  update(data) {
    let grade = thid.find(data);
    grade.count++;
    return grade;
  }
  preOrder(node) {
    if(!(node === null)) {
      console.log(`${node.show()} `);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }
  postOrder(node) {
    if(!(node === null)) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(`${node.show()} `);
    }
  }

  remove(data) {
    let root = this.removeNode(this.root, data);
  }

  removeNode(node, data) {
    if(node === null) {
      return null;
    }

    if(data === node.data) {
      if(node.left === null && node.right === null) {
        return null;
      }

      // node has no left child
      if(node.left === null) {
        return node.right;
      }

      // node has no right child
      if(node.right === null) {
        return node.left;
      }

      // node has two children
      let tempNode = getSmallest(node.right);
      node.data = tempNode.data;
      node.right = removeNode(node.right, tempNode.data);
    } else if(data < node.data) {
      node.left = removeNode(node.left, data);
      return node;
    } else {
      node.right = removeNode(node.right, data);
      return node;
    }

  }
}

function example() {
  const nums = new BinarySearchTree();

  nums.insert(23);
  nums.insert(50);
  nums.insert(63);
  nums.insert(73);
  nums.insert(36);
  nums.insert(21);
  nums.insert(43);
  nums.insert(56);
  nums.insert(12);
  nums.insert(22);
  console.log("Inorder traversal: ");
  nums.inOrder(nums.root);
  console.log("Preorder traversal: ");
  nums.preOrder(nums.root);
  console.log("Postorder traversal: ");
  nums.postOrder(nums.root);
}
example();
