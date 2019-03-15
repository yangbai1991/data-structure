class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);

    if (this.root === null) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }

  insertNode(node, newNode) {
    if (node.value > newNode.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  inOrderTraversal() {
    this.inOrderTraversalNode(this.root);
  }

  inOrderTraversalNode(node) {
    if (node !== null) {
      this.inOrderTraversalNode(node.left);
      console.log(node.value);
      this.inOrderTraversalNode(node.right);
    }
  }
}

const items = [8, 4, 9, 10, 3, 6, 2, 7, 1, 5];
const tree = new BinaryTree();

items.map(item => {
  tree.insert(item);
});

console.log(JSON.stringify(tree));
tree.inOrderTraversal();
