const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
      this.data = data; // node value
      this.left = null;   // left node child reference
      this.right = null; // right node child reference
  }
}
module.exports = class BinarySearchTree {
      constructor(){
          this.root = null;
      }


root() {
  return this.root;
}


  add(data) {
    let newNode = new Node(data);
    if (this.root === null) {
        this.root = newNode;
    } else {
        this.insertNode(this.root, newNode); 
    }
  }
insertNode(node, newNode) {
    if (newNode.data < node.data) {
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



has = (data, node = this.root) => {
  if(node === null){
    return false;
  }
  
  if(data < node.data){
    return this.has(data, node.left);
  }else if(data > node.data){
    return this.has(data, node.right);
  }else{
    return true;
  }
}



  find = (data, node = this.root) => {
    if(node === null){
      return null;
    }
    
    if(data < node.data){
      return this.find(data, node.left);
    }else if(data > node.data){
      return this.find(data, node.right);
    }else{
      return node;
    }
  }
minNode(node) {
    if (node.left === null)
        return node;
    else
        return this.minNode(node.left);
}
remove(data) {
    this.root = this.removeNode(this.root, data); 
}
removeNode(node, data) {
    if (node === null) {
        return null;
  
    } else if (data < node.data) {
        node.left = this.removeNode(node.left, data);
        return node;
  
    } else if (data > node.data) {
        node.right = this.removeNode(node.right, data);
        return node;
 
    } else {
      
        if (node.left === null && node.right === null) {
            node = null;
            return node;
        }
        
        if (node.left === null) {
            node = node.right;
            return node;
        } else if(node.right === null) {
            node = node.left;
            return node;
        }
       
        let newNode = this.minNode(node.right);
        node.data = newNode.data;
        node.right = this.removeNode(node.right, newNode.data);
        return node;
    }
}
min = (node = this.root) => {
  if(node){
    while(node && node.left !== null){
      node = node.left;
    }
    
    return node.data;
  }
  
  return null;
}
max = (node = this.root) => {
  if(node){
    while(node && node.right !== null){
      node = node.right;
    }
    
    return node.data
  }
  
  return null;
}

}
