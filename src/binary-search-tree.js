const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

module.exports = class BinarySearchTree {
      constructor(){
          this.Adroot = null;
      }


root() {
  return this.Adroot;
}


add(data){
  const node = this.Adroot;
  if (node === null) {
    this.Adroot = new Node(data);
    return;
  } else {
    const searchTree = function (node) {
      if (data < node.data) {
        if (node.left === null) {
          node.left = new Node(data);
          return;
        } else if (node.left !== null) {
          return searchTree(node.left);
        }
      } else if (data > node.data) {
        if (node.right === null) {
          node.right = new Node(data);
          return;
        } else if (node.right !== null) {
          return searchTree(node.right);
        }
      } else {
        return null;
      }
    };
    return searchTree(node);
  }
}



has(data) {
  let current = this.Adroot;
    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
}



find(data) {
  let current = this.Adroot;
  while (current.data !== data) {
    if (data < current.data) {
      current = current.left;
    } else {
      current = current.right;
    }
    if (current === null) {
      return null;
    }
  }
  return current;
}
remove(data) {
  const removeNode = function (node, data) {
    if (node == null) {
      return null;
    }
    if (data == node.data) {
      // node has no children
      if (node.left == null && node.right == null) {
        return null;
      }
      // node has no left child
      if (node.left == null) {
        return node.right;
      }
      // node has no right child
      if (node.right == null) {
        return node.left;
      }
      // node has two children
      var tempNode = node.right;
      while (tempNode.left !== null) {
        tempNode = tempNode.left;
      }
      node.data = tempNode.data;
      node.right = removeNode(node.right, tempNode.data);
      return node;
    } else if (data < node.data) {
      node.left = removeNode(node.left, data);
      return node;
    } else {
      node.right = removeNode(node.right, data);
      return node;
    }
  };
  this.Adroot = removeNode(this.Adroot, data);
}
min() {
  let current = this.Adroot;
  while (current.left !== null) {
    current = current.left;
  }
  return current.data;
}
max() {
  let current = this.Adroot;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
}

}
