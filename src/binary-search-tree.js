const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  treeRoot = null;

  root() {
    return this.treeRoot;   
  }

  add(data) {
    this.treeRoot = createNewBranch(this.treeRoot, data);

    function createNewBranch(node, data) {
      if (!node) {
        return {
          data: data,
          left: null,
          right: null
        };
      } else if (node.data === data) {
        return node;
      } else if (data < node.data) {
        node.left = createNewBranch(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = createNewBranch(node.right, data);
        return node;
      }
    }
  }

  has(data) {
    return searchTree(this.treeRoot, data);

    function searchTree(node, data) {
      if (!node) {
        return false;
      } else if (node.data === data) {
        return true;
      } else if (data < node.data) {
        return searchTree(node.left, data);
      } else if (data > node.data) {
        return searchTree(node.right, data);
      }
    }
  }

  find(data) {
    return findNode(this.treeRoot, data);
    
    function findNode(node, data) {
      if (!node) {
        return null;
      } else if (node.data === data) {
        return node;
      } else if (data < node.data) {
        return findNode(node.left, data);
      } else if (data > node.data) {
        return findNode(node.right, data);
      }
    }
  }

  remove(data) {
    this.treeRoot = removeNode(this.treeRoot, data);
    
    function removeNode(node, data) {
      if (!node) {
        return null;
      } else if (node.data === data) {
        if (!node.left && !node.right) {
          return null;
        } else if (!node.left) {
          return node.right;
        } else if (!node.right) {
          return node.left;
        }
        
        let current = node.right;
        
        while(current.left) {
          current = current.left;
        }
        node.data = current.data;
        node.right = removeNode(node.right, current.data);        
        
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
      }
      
      return node;
    }
  }

  min() {
    if (!this.treeRoot) {
      return null;
    }

    let min = this.treeRoot;
    while (min.left) {
      min = min.left;
    }

    return min.data;
  }

  max() {
    if (!this.treeRoot) {
      return null;
    }

    let max = this.treeRoot;
    while (max.right) {
      max = max.right;
    }

    return max.data;
  }
}

module.exports = {
  BinarySearchTree
};