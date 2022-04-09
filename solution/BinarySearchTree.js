
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  orderData = []; // this is only for save the data to return to the sync-sorted-merge

  constructor() {
    this.root = null;
  }

  // here, we are inserting and sorting the data in the tree
  // in this method we create the tree and start whit the node inserting
  insert(data , last ) {
    const newNode = new Node(data);
    if(this.root === null)
      this.root = newNode;
    else
      this.insertNode(this.root, newNode);

    if (last) {
      this.returnOrdered(this.root)
      return this.orderData;
    }
  }

  // here we ask about the data, if the date its bigger that the past date we put in the right branch of the tree
  insertNode(node, newNode) {
    if(newNode.data.date < node.data.date) {
      if(node.left === null)
        node.left = newNode;
      else
        this.insertNode(node.left, newNode);
    }
    else {
      if(node.right === null)
        node.right = newNode;
      else
        this.insertNode(node.right,newNode);
    }
  }

  /* Here we only go through the tree to form the array with the ordered data
  (they are already ordered because the tree swayed) and when going through them we first bring all the left ones and then the right ones
  (the left ones will always be less than the right ones)*/
  returnOrdered(node) {
    if(node !== null) {
      this.returnOrdered(node.left);
      this.orderData.push(node.data)
      this.returnOrdered(node.right);
    }
  }

  // this is when u use the class context (It can be used without the push of line 49)
  getRootNode() {
    return this.root;
  }

}

module.exports = {
  BinarySearchTree,
}
